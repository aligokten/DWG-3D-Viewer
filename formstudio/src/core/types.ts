/** Profil eğrisinin bir kontrol noktası. z ve r 0..1 aralığında normalize edilmiştir. */
export interface ProfilePoint {
  /** 0 = taban, 1 = ağız (yükseklik oranı) */
  z: number;
  /** 0 = eksen, 1 = azami yarıçap */
  r: number;
}

/** Enine kesit (yatay) biçimi. */
export interface CrossSection {
  /** Çokgen kenar sayısı. 0 => tam daire. */
  polygonSides: number;
  /** 0 = keskin çokgen, 1 = daire (köşe yuvarlatma) */
  polygonRound: number;
  /** Çevresel dalga (loblar) sayısı */
  lobes: number;
  /** Lob genliği (yarıçapa oran) */
  lobeAmount: number;
  /** Yükseklik boyunca toplam burulma (derece) */
  twist: number;
}

/** Yüzey dokusu: dikey dalgalar ve ince nervürler. */
export interface SurfaceTexture {
  /** Dikey dalga sayısı (yükseklik boyunca) */
  waveCount: number;
  /** Dikey dalga genliği (mm) */
  waveAmount: number;
  /** Dalganın açıyla kaydırılması -> spiral desen */
  waveSpiral: number;
  /** İnce nervür (baskı çizgisi dokusu) sayısı */
  ribCount: number;
  /** Nervür genliği (mm) */
  ribAmount: number;
  /** Rastgele pürüz genliği (mm) */
  noiseAmount: number;
  /** Pürüzün ölçeği (büyük = daha sık) */
  noiseScale: number;
}

/** Kafes (lattice) deformasyonu: satır = yükseklik, sütun = açı. */
export interface Lattice {
  enabled: boolean;
  rows: number;
  cols: number;
  /** rows*cols uzunluğunda, -1..1 aralığında değerler (satır önce) */
  values: number[];
  /** Etkisi (mm) */
  strength: number;
}

export type ObjectKind = "vazo" | "saksi" | "kase" | "armatur" | "kupa";

export interface ModelParams {
  kind: ObjectKind;
  /** Toplam yükseklik (mm) */
  height: number;
  /** Azami yarıçap (mm) */
  radius: number;
  /** Cidar kalınlığı (mm) */
  wall: number;
  /** Taban kalınlığı (mm). 0 => alttan açık (abajur/armatür) */
  base: number;
  /** Saksı su deliği çapı (mm). 0 => delik yok */
  drainHole: number;
  /** Yatay dilim sayısı */
  layers: number;
  /** Çevresel segment sayısı */
  segments: number;
  profile: ProfilePoint[];
  cross: CrossSection;
  texture: SurfaceTexture;
  lattice: Lattice;
}

/** Üretilmiş üçgen ağı (mm cinsinden, Z yukarı). */
export interface MeshData {
  positions: Float32Array;
  indices: Uint32Array;
  triangleCount: number;
  /** Kapladığı kutu: [genişlik, derinlik, yükseklik] mm */
  size: [number, number, number];
  /** Malzeme hacmi (cm³) */
  volumeCm3: number;
}
