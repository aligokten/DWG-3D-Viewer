"""Paneli bir Hugging Face Space'e yükler.

GitHub Actions (`.github/workflows/deploy-hf-space.yml`) bu betiği çağırır;
aynı betik yerelden de çalıştırılabilir:

    HF_TOKEN=hf_xxx python deploy/push_to_space.py --space kullanici/trellis2-panel

`--dry-run` ile ağa çıkmadan yalnızca gönderilecek dosya listesi yazdırılır.
"""

from __future__ import annotations

import argparse
import os
import shutil
import sys
import tempfile
from pathlib import Path
from typing import List

PANEL_DIR = Path(__file__).resolve().parent.parent

# Space'e gönderilmeyecekler: geçici çıktılar, derleme artıkları, git verisi.
EXCLUDE_DIRS = {"tmp", "__pycache__", ".git", ".github", "node_modules", ".pytest_cache"}
EXCLUDE_SUFFIXES = {".pyc", ".pyo", ".glb"}


def collect_files(source: Path) -> List[Path]:
    """Panel klasöründen Space'e gidecek dosyaları toplar."""
    files: List[Path] = []
    for path in sorted(source.rglob("*")):
        if not path.is_file():
            continue
        parts = set(path.relative_to(source).parts)
        if parts & EXCLUDE_DIRS or path.suffix in EXCLUDE_SUFFIXES:
            continue
        files.append(path)
    return files


def build_staging(source: Path, staging: Path, space: str, repo: str, sha: str) -> List[str]:
    """Space kök dizinini hazırlar: panel dosyaları + Dockerfile + README."""
    for path in collect_files(source):
        target = staging / path.relative_to(source)
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(path, target)

    # Docker SDK'sı kökte Dockerfile bekler.
    shutil.copy2(source / "deploy" / "Dockerfile", staging / "Dockerfile")

    # Space kimliği README ön bilgisinden okunur; panel README'sinin üzerine yazılır.
    template = (source / "deploy" / "space_README.md").read_text(encoding="utf-8")
    (staging / "README.md").write_text(
        template.format(title=space.split("/")[-1].replace("-", " ").title(), repo=repo, sha=sha),
        encoding="utf-8",
    )

    return sorted(str(p.relative_to(staging)) for p in staging.rglob("*") if p.is_file())


def main() -> int:
    parser = argparse.ArgumentParser(description="Paneli Hugging Face Space'e yükler")
    parser.add_argument("--space", required=True, help="Space kimliği, örn. kullanici/trellis2-panel")
    parser.add_argument("--source", default=str(PANEL_DIR), help="Panel klasörü (varsayılan: trellis3d)")
    parser.add_argument("--repo", default=os.environ.get("GITHUB_REPOSITORY", "aligokten/DWG-3D-Viewer"))
    parser.add_argument("--sha", default=os.environ.get("GITHUB_SHA", "local")[:12])
    parser.add_argument("--private", action="store_true", help="Space'i gizli oluştur")
    parser.add_argument("--dry-run", action="store_true", help="Yükleme yapma, dosya listesini yazdır")
    args = parser.parse_args()

    source = Path(args.source).resolve()
    token = os.environ.get("HF_TOKEN")
    if not token and not args.dry_run:
        print("HATA: HF_TOKEN tanımlı değil (write yetkili bir Hugging Face token'ı gerekir).",
              file=sys.stderr)
        return 2

    with tempfile.TemporaryDirectory() as tmp:
        staging = Path(tmp) / "space"
        staging.mkdir()
        manifest = build_staging(source, staging, args.space, args.repo, args.sha)

        print(f"Space: {args.space}")
        print(f"Gönderilecek dosya sayısı: {len(manifest)}")
        for name in manifest:
            print(f"  · {name}")

        if args.dry_run:
            print("\n--dry-run: yükleme yapılmadı.")
            return 0

        from huggingface_hub import HfApi

        api = HfApi(token=token)
        api.create_repo(
            repo_id=args.space,
            repo_type="space",
            space_sdk="docker",
            private=args.private,
            exist_ok=True,
        )
        api.upload_folder(
            repo_id=args.space,
            repo_type="space",
            folder_path=str(staging),
            commit_message=f"DWG-3D-Viewer trellis3d dağıtımı ({args.sha})",
            delete_patterns="*",  # Space'te kalan eski dosyaları temizle.
        )

    print(f"\nTamam: https://huggingface.co/spaces/{args.space}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
