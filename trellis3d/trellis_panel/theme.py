"""Panelin görsel dili: koyu tema CSS'i ve statik arayüz parçaları.

Yerleşim ve renkler, kullanıcı tarafından verilen referans tasarıma göre
kurgulanmıştır: solda ikon rayı, yanında koyu bir kenar çubuğu, ortada sekme
çipleri + kahraman bölümü + kart ızgarası ve altta degrade çerçeveli yazım
alanı.
"""

from __future__ import annotations

from typing import Iterable, List, Tuple

# Gemini benzeri degrade: mavi → mor → turuncu → sarı.
GRADIENT = "linear-gradient(93deg, #4f8cff 0%, #a97cf8 34%, #f2963c 68%, #f0d264 100%)"

DARK_CSS = f"""
/* ----------------------------- temel yüzeyler ----------------------------- */
:root, .gradio-container {{
    --panel-bg: #0b0b0d;
    --panel-surface: #121216;
    --panel-surface-2: #17171c;
    --panel-surface-3: #1e1e24;
    --panel-border: rgba(255, 255, 255, 0.08);
    --panel-border-strong: rgba(255, 255, 255, 0.16);
    --panel-text: #e9e9ee;
    --panel-muted: #8b8b96;
    --panel-accent: #7aa7ff;
    --color-accent: #7aa7ff;
}}

body, gradio-app, .gradio-container {{
    background: radial-gradient(1200px 700px at 20% -10%, #17171d 0%, #0b0b0d 60%) fixed !important;
    color: var(--panel-text) !important;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}}

.gradio-container {{
    max-width: 100% !important;
    padding: 18px !important;
}}

footer, .built-with, .show-api {{ display: none !important; }}

/* Gradio blok kabuklarını şeffaflaştır: kendi kartlarımızı kullanıyoruz. */
.block, .form, .panel, .gr-box, .gr-block {{
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
}}

label, .gr-label, span[data-testid="block-info"] {{
    color: var(--panel-muted) !important;
    font-size: 12px !important;
    letter-spacing: 0.01em;
}}

input, textarea, select {{
    background: var(--panel-surface-2) !important;
    color: var(--panel-text) !important;
    border: 1px solid var(--panel-border) !important;
    border-radius: 12px !important;
}}

input:focus, textarea:focus {{
    outline: none !important;
    border-color: var(--panel-border-strong) !important;
}}

/* ------------------------------- uygulama -------------------------------- */
#app-shell {{
    gap: 14px !important;
    flex-wrap: nowrap !important;
    align-items: stretch !important;
}}

/* ikon rayı */
#rail {{
    background: var(--panel-surface);
    border: 1px solid var(--panel-border);
    border-radius: 22px;
    padding: 16px 10px;
}}

.rail-inner {{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    height: 100%;
}}

.rail-item {{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: var(--panel-muted);
}}

.rail-icon {{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--panel-surface-2);
    border: 1px solid var(--panel-border);
}}

.rail-item.active .rail-icon {{
    background: linear-gradient(180deg, #2b6bff 0%, #1f4fd8 100%);
    border-color: transparent;
}}

.rail-item.active {{ color: var(--panel-text); }}

.rail-spacer {{ flex: 1 1 auto; }}

.rail-dashed {{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px dashed var(--panel-border-strong);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--panel-muted);
}}

/* kenar çubuğu */
#sidebar {{
    background: linear-gradient(180deg, #131318 0%, #0f0f13 55%, #0d1220 100%);
    border: 1px solid var(--panel-border);
    border-radius: 24px;
    padding: 18px 16px !important;
    gap: 10px !important;
}}

.sidebar-head {{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
}}

.sidebar-head .glyph {{
    width: 30px;
    height: 30px;
    border-radius: 9px;
    background: var(--panel-surface-3);
    display: flex;
    align-items: center;
    justify-content: center;
}}

.section-label {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--panel-muted);
    font-size: 13px;
    margin: 14px 2px 6px;
}}

.section-label .add {{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #2b6bff;
    color: #fff;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
}}

.sidebar-divider {{
    height: 1px;
    background: var(--panel-border);
    margin: 12px 0;
}}

/* "Yeni üretim" düğmesi */
#new-run-btn button, #new-run-btn {{
    background: #101014 !important;
    color: var(--panel-text) !important;
    border: 1px solid var(--panel-border-strong) !important;
    border-radius: 999px !important;
    height: 46px !important;
    font-weight: 600 !important;
}}

/* kenar çubuğundaki mod listesi (radio) */
#mode-list .wrap, #mode-list fieldset {{
    display: flex !important;
    flex-direction: column !important;
    gap: 6px !important;
    background: transparent !important;
    border: none !important;
}}

#mode-list label {{
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    padding: 11px 14px !important;
    border-radius: 999px !important;
    background: transparent !important;
    border: 1px solid transparent !important;
    color: var(--panel-text) !important;
    font-size: 14px !important;
    cursor: pointer;
}}

#mode-list label:hover {{ background: var(--panel-surface-2) !important; }}

#mode-list input {{ display: none !important; }}

#mode-list label:has(input:checked) {{
    background: {GRADIENT} !important;
    color: #16161a !important;
    font-weight: 600 !important;
    border-color: transparent !important;
}}

/* entegrasyon / durum satırları */
.integration {{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 6px;
    font-size: 14px;
}}

.integration .dot {{
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    background: var(--panel-surface-3);
}}

.integration .check {{ color: #4f8cff; font-size: 12px; }}

.sidebar-foot {{ color: var(--panel-muted); font-size: 14px; }}
.sidebar-foot .row {{ display: flex; align-items: center; gap: 10px; padding: 8px 4px; }}

.credits {{
    margin-top: 10px;
    border-radius: 18px;
    padding: 14px 16px;
    background: linear-gradient(120deg, rgba(43, 107, 255, 0.22), rgba(169, 124, 248, 0.16));
    border: 1px solid var(--panel-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
}}

.credits .title {{ font-size: 14px; font-weight: 600; }}
.credits .sub {{ font-size: 12px; color: #8fb0ff; }}
.credits .ring {{
    width: 44px; height: 44px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; color: #cdd9ff;
    background: conic-gradient(#4f8cff var(--ring, 64%), rgba(255,255,255,0.08) 0);
}}
.credits .ring span {{
    width: 34px; height: 34px; border-radius: 50%;
    background: #14141a; display: flex; align-items: center; justify-content: center;
}}

/* ------------------------------ ana bölüm -------------------------------- */
#main {{ gap: 12px !important; min-width: 0 !important; }}

/* üst sekme çipleri */
#main [role="tablist"], #main .tabs, #main .tab-wrapper,
#main .tab-container, #main .tab-nav {{
    border: none !important;
    background: transparent !important;
    gap: 10px !important;
    margin-bottom: 8px !important;
    padding: 0 !important;
}}

#main button[role="tab"] {{
    background: var(--panel-surface-2) !important;
    border: 1px solid var(--panel-border) !important;
    border-radius: 999px !important;
    color: var(--panel-muted) !important;
    padding: 10px 22px !important;
    font-size: 14px !important;
    margin: 0 !important;
}}

#main button[role="tab"].selected, #main button[role="tab"][aria-selected="true"] {{
    background: var(--panel-surface-3) !important;
    color: var(--panel-text) !important;
    border-color: var(--panel-border-strong) !important;
}}

.stage {{
    background: linear-gradient(180deg, #101014 0%, #0d0d11 100%);
    border: 1px solid var(--panel-border);
    border-radius: 24px;
    padding: 18px 20px !important;
}}

/* model çipi (çözünürlük seçimi) */
#model-chip {{
    max-width: 200px;
    margin: 0 0 4px 0 !important;
    min-width: 0 !important;
}}

#model-chip .wrap, #model-chip .secondary-wrap {{ background: transparent !important; }}

#model-chip input, #model-chip .wrap-inner {{
    background: var(--panel-surface-2) !important;
    border-radius: 999px !important;
    border: 1px solid var(--panel-border) !important;
    padding-left: 14px !important;
}}

/* kahraman bölümü */
.hero {{ text-align: center; padding: 26px 10px 6px; }}

.hero .orb {{
    width: 96px; height: 96px; border-radius: 50%;
    margin: 0 auto 20px;
    background: #fff;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 0 0 18px rgba(79, 140, 255, 0.06), 0 0 60px rgba(169, 124, 248, 0.25);
}}

.hero h1 {{
    font-size: 30px;
    line-height: 1.28;
    font-weight: 600;
    font-style: italic;
    margin: 0 auto 14px;
    max-width: 760px;
    background: {GRADIENT};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}}

.hero p {{
    color: var(--panel-muted);
    font-size: 15px;
    max-width: 640px;
    margin: 0 auto;
}}

/* kart ızgarası */
.cards-label {{
    display: flex; align-items: center; gap: 8px;
    color: var(--panel-text); font-size: 15px; margin: 24px 2px 12px;
}}

.cards {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; }}

.card {{
    background: var(--panel-surface-2);
    border: 1px solid var(--panel-border);
    border-radius: 18px;
    padding: 16px;
}}

.card .icon {{
    width: 38px; height: 38px; border-radius: 10px;
    background: var(--panel-surface-3);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 12px; font-size: 18px;
}}

.card .title {{ font-size: 15px; font-weight: 600; margin-bottom: 6px; }}
.card .desc {{ font-size: 13px; color: var(--panel-muted); line-height: 1.45; }}
.card .meta {{ font-size: 12px; color: #6f6f7a; margin-top: 12px; }}
.card.empty {{ border-style: dashed; color: var(--panel-muted); }}

/* öneri çipleri */
#suggestions {{ gap: 10px !important; flex-wrap: wrap !important; margin-top: 8px; }}

#suggestions > button, #composer-actions > button, #composer-actions > .block {{
    flex: 0 0 auto !important;
    width: auto !important;
    min-width: 0 !important;
}}

#suggestions button {{
    background: var(--panel-surface-2) !important;
    border: 1px solid var(--panel-border) !important;
    border-radius: 999px !important;
    color: var(--panel-text) !important;
    font-size: 13px !important;
    font-weight: 400 !important;
    padding: 9px 16px !important;
    min-width: 0 !important;
}}

#suggestions button:hover {{ border-color: var(--panel-border-strong) !important; }}

/* yazım alanı */
#composer {{
    margin-top: 14px;
    border-radius: 24px;
    padding: 2px !important;
    background: {GRADIENT};
    gap: 0 !important;
}}

#composer-inner {{
    background: #0e0e12;
    border-radius: 22px;
    padding: 12px 14px !important;
    gap: 8px !important;
}}

.composer-notice {{
    display: flex; align-items: center; gap: 8px;
    font-size: 13px; color: #f2e6b8; padding: 4px 2px 8px;
}}

#composer textarea {{
    background: transparent !important;
    border: none !important;
    font-size: 15px !important;
    color: var(--panel-text) !important;
    resize: none !important;
}}

#composer-actions {{ gap: 8px !important; align-items: center !important; flex-wrap: nowrap !important; }}

#composer-actions button {{
    background: var(--panel-surface-2) !important;
    border: 1px solid var(--panel-border) !important;
    border-radius: 999px !important;
    color: var(--panel-text) !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    padding: 8px 16px !important;
    min-width: 0 !important;
}}

button#run-btn, #composer-actions button#run-btn, #run-btn button {{
    background: {GRADIENT} !important;
    color: #15151a !important;
    border: none !important;
    font-weight: 700 !important;
    border-radius: 999px !important;
    padding: 10px 26px !important;
}}

#attach-thumb {{ max-width: 130px; margin: 0 0 6px 0 !important; }}
#attach-thumb img {{ border-radius: 14px !important; max-height: 90px !important; }}

.disclaimer {{
    text-align: center;
    color: #6b6b76;
    font-size: 12px;
    padding: 10px 0 2px;
}}

.status-bar {{ color: var(--panel-muted) !important; font-size: 13px !important; }}

/* gelişmiş ayarlar */
.gr-accordion, .accordion, #advanced {{
    background: var(--panel-surface) !important;
    border: 1px solid var(--panel-border) !important;
    border-radius: 18px !important;
}}

#advanced button.label-wrap, #advanced .label-wrap {{ color: var(--panel-text) !important; }}

/* önizleyiciyi koyu yüzeye uydur; yazım alanı ekranda kalsın diye yükseklik sınırlı */
.previewer-container {{ height: auto !important; min-height: 0 !important; padding: 6px !important; }}
.previewer-container .display-row {{ min-height: 0 !important; max-height: 380px; margin-bottom: 14px; }}
.previewer-container .previewer-main-image {{
    border-radius: 18px;
    max-height: 380px !important;
    width: auto !important;
    flex-grow: 0 !important;
}}
.previewer-container input[type=range]::-webkit-slider-runnable-track {{
    background: rgba(255, 255, 255, 0.12) !important;
}}
.previewer-container .mode-btn {{ border-color: rgba(255, 255, 255, 0.2); }}

/* 3B görüntüleyici */
#glb-view {{ border-radius: 18px !important; overflow: hidden; }}
"""

# Gradio'nun koyu temasını zorlar (kullanıcı ?__theme=dark yazmasa da).
FORCE_DARK_JS = """
<script>
    (function () {
        function forceDark() {
            document.body.classList.add('dark');
            document.documentElement.classList.add('dark');
        }
        forceDark();
        document.addEventListener('DOMContentLoaded', forceDark);
        window.addEventListener('load', forceDark);
    })();
</script>
"""


def _spark_svg(size: int = 34) -> str:
    """Degrade dolgulu dört köşeli yıldız (panel logosu)."""
    return f"""
    <svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stop-color="#4f8cff"/><stop offset="45%" stop-color="#a97cf8"/>
          <stop offset="75%" stop-color="#f2963c"/><stop offset="100%" stop-color="#f0d264"/>
        </linearGradient>
      </defs>
      <path d="M12 2c.6 4.6 3.4 7.4 8 8-4.6.6-7.4 3.4-8 8-.6-4.6-3.4-7.4-8-8 4.6-.6 7.4-3.4 8-8z"
            fill="url(#sparkGrad)"/>
    </svg>
    """


RAIL_HTML = f"""
<div class="rail-inner">
    <div class="rail-item">{_spark_svg(30)}</div>
    <div class="rail-item active"><div class="rail-icon">✎</div><span>Üret</span></div>
    <div class="rail-item"><div class="rail-icon">◗</div><span>Sohbet</span></div>
    <div class="rail-item"><div class="rail-icon">▤</div><span>Kütüphane</span></div>
    <div class="rail-item"><div class="rail-icon">◎</div><span>Keşfet</span></div>
    <div class="rail-dashed">+</div>
    <div class="rail-spacer"></div>
    <div class="rail-item"><div class="rail-icon">☀</div></div>
    <div class="rail-item"><div class="rail-icon">→]</div></div>
</div>
"""


SIDEBAR_HEAD_HTML = """
<div class="sidebar-head">
    <div class="glyph">◧</div>
    <div>Üretimler</div>
    <div style="margin-left:auto;color:#8b8b96;">⌕</div>
</div>
"""


def section_label(title: str) -> str:
    return f'<div class="section-label"><span>{title}</span><span class="add">+</span></div>'


def integrations_html(rows: Iterable[Tuple[str, str, bool]]) -> str:
    """(ikon, ad, bağlı mı) satırlarından entegrasyon listesi üretir."""
    items = "".join(
        f'<div class="integration"><div class="dot">{icon}</div><span>{name}</span>'
        f'{"<span class=check>✔</span>" if ok else ""}</div>'
        for icon, name, ok in rows
    )
    return f'<div class="integrations">{items}</div>'


SIDEBAR_FOOT_HTML = """
<div class="sidebar-foot">
    <div class="row">◎ Ayarlar</div>
    <div class="row">☎ Yardım &amp; Destek</div>
</div>
"""


def credits_html(title: str, subtitle: str, percent: int, label: str) -> str:
    return f"""
<div class="credits">
    <div>
        <div class="title">{title}</div>
        <div class="sub">{subtitle}</div>
    </div>
    <div class="ring" style="--ring:{percent}%"><span>{label}</span></div>
</div>
"""


HERO_HTML = f"""
<div class="hero">
    <div class="orb">{_spark_svg(46)}</div>
    <h1>TRELLIS.2 ile hayalinizdeki nesneyi üç boyuta taşıyın</h1>
    <p>Bir cümle yazın ya da bir görsel yükleyin; panel PBR malzemeli, dokulu bir
       3B varlık üretsin ve tek tıkla GLB olarak dışa aktarsın.</p>
</div>
"""


def cards_html(cards: List[dict], label: str = "Son üretimler") -> str:
    """Kart ızgarası: son üretimlerin özetleri."""
    if not cards:
        body = (
            '<div class="card empty"><div class="icon">✦</div>'
            '<div class="title">Henüz üretim yok</div>'
            '<div class="desc">İlk 3B varlığınızı üretmek için aşağıya bir istem yazın '
            'ya da bir görsel ekleyin.</div></div>'
        )
    else:
        body = "".join(
            f'<div class="card"><div class="icon">{c["icon"]}</div>'
            f'<div class="title">{c["title"]}</div>'
            f'<div class="desc">{c["desc"]}</div>'
            f'<div class="meta">{c["meta"]}</div></div>'
            for c in cards
        )
    return f'<div class="cards-label">◔ {label}</div><div class="cards">{body}</div>'


def notice_html(text: str) -> str:
    return f'<div class="composer-notice">⏱ {text}</div>'


DISCLAIMER_HTML = (
    '<div class="disclaimer">TRELLIS.2 üretimleri yapay zekâ çıktısıdır; ölçü ve '
    'detayları üretim öncesi doğrulayın.</div>'
)
