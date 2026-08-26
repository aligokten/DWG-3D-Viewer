"""Önizleyici arayüzü: CSS, JS ve HTML üreticileri.

Bu modüldeki CSS/JS, Microsoft TRELLIS.2 deposundaki `app.py` önizleyicisinden
uyarlanmıştır (MIT Lisansı, Copyright (c) Microsoft Corporation).
"""

from __future__ import annotations

from typing import Dict, List

import numpy as np
from PIL import Image

from .assets import image_to_base64
from .config import DEFAULT_MODE, DEFAULT_STEP, STEPS


CSS = """
/* Overwrite Gradio Default Style */
.stepper-wrapper {
    padding: 0;
}

.stepper-container {
    padding: 0;
    align-items: center;
}

.step-button {
    flex-direction: row;
}

.step-connector {
    transform: none;
}

.step-number {
    width: 16px;
    height: 16px;
}

.step-label {
    position: relative;
    bottom: 0;
}

.wrap.center.full {
    inset: 0;
    height: 100%;
}

.wrap.center.full.translucent {
    background: var(--block-background-fill);
}

.meta-text-center {
    display: block !important;
    position: absolute !important;
    top: unset !important;
    bottom: 0 !important;
    right: 0 !important;
    transform: unset !important;
}

/* Previewer */
.previewer-container {
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    width: 100%;
    height: 722px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.previewer-container .tips-icon {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
    border-radius: 10px;
    color: #fff;
    background-color: var(--color-accent);
    padding: 3px 6px;
    user-select: none;
}

.previewer-container .tips-text {
    position: absolute;
    right: 10px;
    top: 50px;
    color: #fff;
    background-color: var(--color-accent);
    border-radius: 10px;
    padding: 6px;
    text-align: left;
    max-width: 300px;
    z-index: 10;
    transition: all 0.3s;
    opacity: 0%;
    user-select: none;
}

.previewer-container .tips-text p {
    font-size: 14px;
    line-height: 1.2;
}

.tips-icon:hover + .tips-text { 
    display: block;
    opacity: 100%;
}

/* Row 1: Display Modes */
.previewer-container .mode-row {
    width: 100%;
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
}
.previewer-container .mode-btn {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.2s;
    border: 2px solid #ddd;
    object-fit: cover;
}
.previewer-container .mode-btn:hover { opacity: 0.9; transform: scale(1.1); }
.previewer-container .mode-btn.active {
    opacity: 1;
    border-color: var(--color-accent);
    transform: scale(1.1);
}

/* Row 2: Display Image */
.previewer-container .display-row {
    margin-bottom: 20px;
    min-height: 400px;
    width: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.previewer-container .previewer-main-image {
    max-width: 100%;
    max-height: 100%;
    flex-grow: 1;
    object-fit: contain;
    display: none;
}
.previewer-container .previewer-main-image.visible {
    display: block;
}

/* Row 3: Custom HTML Slider */
.previewer-container .slider-row {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
}

.previewer-container input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    max-width: 400px;
    background: transparent;
}
.previewer-container input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #ddd;
    border-radius: 5px;
}
.previewer-container input[type=range]::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: var(--color-accent);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: transform 0.1s;
}
.previewer-container input[type=range]::-webkit-slider-thumb:hover {
    transform: scale(1.2);
}

/* Overwrite Previewer Block Style */
.gradio-container .padded:has(.previewer-container) {
    padding: 0 !important;
}

.gradio-container:has(.previewer-container) [data-testid="block-label"] {
    position: absolute;
    top: 0;
    left: 0;
}
/* --- Panel eklentileri --- */
.panel-title h2 {
    margin-bottom: 4px;
}

.panel-title .subtitle {
    opacity: 0.75;
    font-size: 14px;
}

.prompt-tabs .tabitem {
    padding: 12px 8px 4px 8px;
}

.t2i-preview {
    margin-top: 8px;
}

.status-bar {
    font-size: 13px;
    opacity: 0.8;
    min-height: 20px;
}

"""


HEAD = """
<script>
    function refreshView(mode, step) {
        // 1. Find current mode and step
        const allImgs = document.querySelectorAll('.previewer-main-image');
        for (let i = 0; i < allImgs.length; i++) {
            const img = allImgs[i];
            if (img.classList.contains('visible')) {
                const id = img.id;
                const [_, m, s] = id.split('-');
                if (mode === -1) mode = parseInt(m.slice(1));
                if (step === -1) step = parseInt(s.slice(1));
                break;
            }
        }
        
        // 2. Hide ALL images
        // We select all elements with class 'previewer-main-image'
        allImgs.forEach(img => img.classList.remove('visible'));

        // 3. Construct the specific ID for the current state
        // Format: view-m{mode}-s{step}
        const targetId = 'view-m' + mode + '-s' + step;
        const targetImg = document.getElementById(targetId);

        // 4. Show ONLY the target
        if (targetImg) {
            targetImg.classList.add('visible');
        }

        // 5. Update Button Highlights
        const allBtns = document.querySelectorAll('.mode-btn');
        allBtns.forEach((btn, idx) => {
            if (idx === mode) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }
    
    // --- Action: Switch Mode ---
    function selectMode(mode) {
        refreshView(mode, -1);
    }
    
    // --- Action: Slider Change ---
    function onSliderChange(val) {
        refreshView(-1, parseInt(val));
    }
</script>
"""


EMPTY_HTML = """
<div class="previewer-container">
    <svg style="opacity: .5; height: var(--size-5); color: var(--body-text-color);"
    xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
</div>
"""


def build_previewer_html(snapshots: Dict[str, List[np.ndarray]], modes: List[Dict]) -> str:
    """Render modu x görüş açısı matrisini tek bir HTML bileşenine gömer.

    Tüm kareler `<img>` olarak gömülür; mod düğmeleri ve kaydırıcı yalnızca
    hangisinin görünür olduğunu değiştirir (sunucuya gidiş dönüş yok).
    """
    images_html = ""
    for m_idx, mode in enumerate(modes):
        frames = snapshots.get(mode["render_key"])
        if not frames:
            continue
        for s_idx in range(min(STEPS, len(frames))):
            visible = "visible" if (m_idx == DEFAULT_MODE and s_idx == DEFAULT_STEP) else ""
            frame = frames[s_idx]
            image = frame if isinstance(frame, Image.Image) else Image.fromarray(frame)
            images_html += (
                f'<img id="view-m{m_idx}-s{s_idx}" class="previewer-main-image {visible}" '
                f'src="{image_to_base64(image)}" loading="eager">'
            )

    btns_html = ""
    for idx, mode in enumerate(modes):
        active = "active" if idx == DEFAULT_MODE else ""
        btns_html += (
            f'<img src="{mode["icon_base64"]}" class="mode-btn {active}" '
            f'onclick="selectMode({idx})" title="{mode["name"]}">'
        )

    return f"""
    <div class="previewer-container">
        <div class="tips-wrapper">
            <div class="tips-icon">💡 İpucu</div>
            <div class="tips-text">
                <p>● <b>Render modu</b> — Yuvarlak düğmelerle görüntüleme modunu değiştirin.</p>
                <p>● <b>Görüş açısı</b> — Kaydırıcıyı sürükleyerek modeli çevirin.</p>
            </div>
        </div>

        <div class="display-row">
            {images_html}
        </div>

        <div class="mode-row" id="btn-group">
            {btns_html}
        </div>

        <div class="slider-row">
            <input type="range" id="custom-slider" min="0" max="{STEPS - 1}"
                   value="{DEFAULT_STEP}" step="1" oninput="onSliderChange(this.value)">
        </div>
    </div>
    """
