# Dağıtım — Hugging Face Space (GPU)

Panel bir Python/Gradio uygulamasıdır ve gerçek üretim için NVIDIA GPU ister;
bu yüzden GitHub Pages'e değil, GPU'lu bir **Hugging Face Space**'e dağıtılır.
GitHub tarafında dağıtımı `.github/workflows/deploy-hf-space.yml` yürütür:
`main` dalındaki her `trellis3d/**` değişikliğinde panel Space'e yüklenir.

```
GitHub (main)  ──►  Actions: duman testi ──►  Space'e upload  ──►  Space Docker build ──►  panel URL'i
```

## 1) Hugging Face erişim anahtarı

1. https://huggingface.co/settings/tokens → **Create new token**
2. Tür: **Write** (Space oluşturma ve dosya yükleme yetkisi gerekir)
3. Anahtarı kopyalayın.

## 2) GitHub deposunda ayarlar

Depo → **Settings → Secrets and variables → Actions**

| Tür | Ad | Değer |
|-----|----|-------|
| Secret | `HF_TOKEN` | 1. adımdaki write anahtarı |
| Variable | `HF_SPACE_ID` | Hedef Space, örn. `aligokten/trellis2-panel` |

İş akışı Space'i `docker` SDK'siyle oluşturmayı dener. Hugging Face hesabınız
API'den yeni Space açmaya izin vermiyorsa (`402 Payment Required`) bu adım
atlanır ve yükleme yine de sürer — bu durumda Space'i bir kez elle açın:

**https://huggingface.co/new-space**

* Space name: `HF_SPACE_ID` ile **birebir aynı** (örn. `trellis2-panel`)
* SDK: **Docker** (şablon seçmeyin, boş Docker Space yeterli)
* Hardware: başlangıçta ücretsiz CPU seçilebilir, GPU'ya sonra geçilir
* Visibility: Public (özel Space de olur, panelin çalışmasına etkisi yok)

## 3) İlk dağıtımı çalıştırın

* Depo → **Actions → "TRELLIS.2 Paneli — Hugging Face Space dağıtımı" → Run workflow**
  (istersen `space_id` alanına farklı bir Space yazabilirsiniz), ya da
* `main` dalına `trellis3d/` altında bir değişiklik gönderin.

İş akışı önce GPU'suz duman testini çalıştırır, sonra panel dosyalarını
Space'e yükler. Yükleme bittiğinde iş özetinde Space adresi görünür.

Ayarlar henüz tanımlı değilse `main`'e yapılan push'larda iş **başarılı**
biter ve özetinde "Dağıtım atlandı" uyarısı görünür; **Run workflow** ile elle
çalıştırıldığında ise eksik ayarları hata olarak bildirir.

## 4) Space'e GPU verin

Space → **Settings → Hardware**: TRELLIS.2 için **≥24 GB VRAM** gerekir
(L4, L40S, A10G-large veya A100). Ücretsiz CPU donanımında panel açılır ama
gerçek üretim yapamaz — bu durumda **Settings → Variables** altında
`TRELLIS2_PANEL_MOCK=1` tanımlayıp demo modunda kullanın.

İlk Docker derlemesi uzundur (flash-attn, nvdiffrast, CuMesh, FlexGEMM ve
o-voxel kaynaktan derlenir; tipik olarak 30–60 dakika). Sonraki dağıtımlar
katman önbelleğinden yararlanır.

### Space ortam değişkenleri

| Değişken | İşlevi |
|----------|--------|
| `TRELLIS2_PANEL_MOCK` | `1` → GPU'suz demo motoru |
| `TRELLIS2_MODEL` | 3B model (varsayılan `microsoft/TRELLIS.2-4B`) |
| `TRELLIS2_T2I_MODEL` | metin→görsel modeli (varsayılan SDXL) |
| `HF_TOKEN` (Space secret) | özel/kapılı model ağırlıkları çekilecekse |

`TRELLIS2_ROOT`, `TRELLIS2_PANEL_HOST` ve `TRELLIS2_PANEL_PORT` imaj içinde
zaten doğru ayarlıdır; değiştirmeyin.

## Yerelden dağıtım

Aynı betik elle de çalıştırılabilir:

```bash
cd trellis3d
pip install huggingface_hub
HF_TOKEN=hf_xxx python deploy/push_to_space.py --space kullanici/trellis2-panel

# Ağa çıkmadan yalnızca gönderilecek dosyaları görmek için:
python deploy/push_to_space.py --space kullanici/trellis2-panel --dry-run
```

## Kendi GPU sunucunuzda (Docker)

Aynı `deploy/Dockerfile` doğrudan kullanılabilir:

```bash
cd trellis3d
docker build -f deploy/Dockerfile -t trellis2-panel .
docker run --gpus all -p 7860:7860 \
    -v $HOME/.cache/huggingface:/home/user/.cache/huggingface \
    trellis2-panel
# http://sunucu:7860
```

Model ağırlıkları ilk çalıştırmada indirilir; önbellek dizinini bağlamak
yeniden başlatmalarda indirmeyi önler.

## Sorun giderme

| Belirti | Neden / çözüm |
|---------|----------------|
| Actions: `402 Payment Required` (`/api/repos/create`) | HF hesabı API'den yeni Space açmaya izin vermiyor. Space'i https://huggingface.co/new-space adresinden Docker SDK ile elle açın; iş akışı bundan sonra yalnızca yükleme yapar. |
| Actions: `Space bulunamadı` | `HF_SPACE_ID` ile Space'in adı/sahibi birebir aynı değil (büyük/küçük harf dahil) |
| Actions: `403 Forbidden` | Token **Write** değil ya da o isim üzerinde yetkiniz yok |
| Actions özetinde `Dağıtım atlandı` | 2. adımdaki `HF_TOKEN` ve/veya `HF_SPACE_ID` eksik. Otomatik push'ta iş yeşil kalır, yalnız uyarı verilir; elle çalıştırmada (Run workflow) hata olarak bildirilir. |
| Space `Runtime error: CUDA` | Donanım CPU kalmış; GPU seçin veya `TRELLIS2_PANEL_MOCK=1` |
| Üretimde `No module named 'trellis2'` | Space CPU donanımında Docker imajı GPU uzantılarını derleyememiş olabilir; GPU donanımıyla yeniden derleyin |
| Derleme çok uzun / zaman aşımı | Space'i GPU donanımına alıp yeniden derleyin; derleme adımları katman katman önbelleklenir |
