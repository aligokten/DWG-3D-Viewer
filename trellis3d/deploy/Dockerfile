# TRELLIS.2 paneli — GPU imajı (Hugging Face Spaces "docker" SDK'si ve kendi
# sunucunuz için aynı imaj).
#
# NOT: TRELLIS.2'nin `setup.sh` betiği çalıştığı makinede `nvidia-smi` arar;
# imaj derlenirken GPU bulunmadığı için burada aynı adımlar doğrudan
# uygulanır. Derlenecek CUDA mimarileri TORCH_CUDA_ARCH_LIST ile verilir
# (8.6 = A10G, 8.9 = L4/L40S, 9.0 = H100).

FROM nvidia/cuda:12.4.1-cudnn-devel-ubuntu22.04

ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    TORCH_CUDA_ARCH_LIST="8.6;8.9;9.0+PTX" \
    MAX_JOBS=4

RUN apt-get update && apt-get install -y --no-install-recommends \
        python3.10 python3-pip python3.10-dev \
        git build-essential ninja-build cmake \
        libgl1 libglib2.0-0 libjpeg-dev libegl1 libgles2 \
    && rm -rf /var/lib/apt/lists/* \
    && ln -sf /usr/bin/python3.10 /usr/bin/python

# --- 1) PyTorch (TRELLIS.2 ile aynı sürümler) ---
RUN pip install --upgrade pip && \
    pip install torch==2.6.0 torchvision==0.21.0 --index-url https://download.pytorch.org/whl/cu124

# --- 2) TRELLIS.2 kaynağı ---
ARG TRELLIS_REF=main
RUN git clone --depth 1 --branch ${TRELLIS_REF} https://github.com/microsoft/TRELLIS.2 /opt/TRELLIS.2

# --- 3) setup.sh --basic karşılığı ---
RUN pip install imageio imageio-ffmpeg tqdm easydict opencv-python-headless ninja \
        trimesh transformers tensorboard pandas lpips zstandard kornia timm pillow && \
    pip install git+https://github.com/EasternJournalist/utils3d.git@9a4eb15e4021b67b12c460c7057d642626897ec8

# --- 4) CUDA uzantıları (flash-attn, nvdiffrast, nvdiffrec, CuMesh, FlexGEMM, o-voxel) ---
RUN pip install flash-attn==2.7.3 --no-build-isolation

RUN git clone -b v0.4.0 --depth 1 https://github.com/NVlabs/nvdiffrast.git /tmp/nvdiffrast && \
    pip install /tmp/nvdiffrast --no-build-isolation && rm -rf /tmp/nvdiffrast

RUN git clone -b renderutils --depth 1 https://github.com/JeffreyXiang/nvdiffrec.git /tmp/nvdiffrec && \
    pip install /tmp/nvdiffrec --no-build-isolation && rm -rf /tmp/nvdiffrec

RUN git clone --depth 1 --recursive https://github.com/JeffreyXiang/CuMesh.git /tmp/CuMesh && \
    pip install /tmp/CuMesh --no-build-isolation && rm -rf /tmp/CuMesh

RUN git clone --depth 1 --recursive https://github.com/JeffreyXiang/FlexGEMM.git /tmp/FlexGEMM && \
    pip install /tmp/FlexGEMM --no-build-isolation && rm -rf /tmp/FlexGEMM

RUN pip install /opt/TRELLIS.2/o-voxel --no-build-isolation

# --- 5) Panel ve metin → görsel bağımlılıkları ---
COPY requirements.txt /tmp/panel-requirements.txt
RUN pip install -r /tmp/panel-requirements.txt && \
    pip install diffusers accelerate sentencepiece protobuf

# Hugging Face Spaces uygulamayı 1000 numaralı kullanıcıyla çalıştırır.
RUN useradd -m -u 1000 user
WORKDIR /home/user/panel
COPY --chown=user . /home/user/panel
RUN chown -R user:user /opt/TRELLIS.2 /home/user

USER user

ENV TRELLIS2_ROOT=/opt/TRELLIS.2 \
    TRELLIS2_PANEL_HOST=0.0.0.0 \
    TRELLIS2_PANEL_PORT=7860 \
    HF_HOME=/home/user/.cache/huggingface \
    PYTHONPATH=/opt/TRELLIS.2 \
    OPENCV_IO_ENABLE_OPENEXR=1 \
    PYTORCH_CUDA_ALLOC_CONF=expandable_segments:True \
    GRADIO_SERVER_NAME=0.0.0.0

EXPOSE 7860

# TRELLIS2_PANEL_MOCK=1 verilirse panel GPU'suz demo motoruyla açılır.
CMD ["python", "app.py"]
