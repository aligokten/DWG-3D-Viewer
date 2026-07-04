import * as THREE from "three";

export const VOID_COLOR = new THREE.Color("#0d0d0f");
export const GOLD = new THREE.Color("#d9a441");
export const GOLD_BRIGHT = new THREE.Color("#f2c96b");

/** Mat, ışığı emen antrasit yüzey — "matte charcoal void" temeli. */
export function matteCharcoal(): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: 0x17171a,
    roughness: 0.95,
    metalness: 0.15,
  });
}

/** Parlayan altın kenar çizgileri (EdgesGeometry ile kullanılır). */
export function goldLine(opacity = 0.9): THREE.LineBasicMaterial {
  return new THREE.LineBasicMaterial({
    color: GOLD,
    transparent: true,
    opacity,
  });
}

/**
 * "Sıvı altın" özel malzemesi: fresnel kenar parlaması + zamana bağlı
 * akan bant deseni. Ağır doku/texture kullanmadan, tamamen prosedürel —
 * indirme boyutu sıfıra yakın kalır.
 */
export function liquidGold(): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uDeep: { value: new THREE.Color("#8a6420") },
      uGold: { value: GOLD.clone() },
      uBright: { value: GOLD_BRIGHT.clone() },
    },
    vertexShader: /* glsl */ `
      varying vec3 vNormal;
      varying vec3 vView;
      varying vec3 vWorld;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        vView = normalize(cameraPosition - wp.xyz);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform vec3 uDeep;
      uniform vec3 uGold;
      uniform vec3 uBright;
      varying vec3 vNormal;
      varying vec3 vView;
      varying vec3 vWorld;

      void main() {
        // Akışkan bantlar: iki kaydırılmış sinüs dalgasının girişimi.
        float flow = sin(vWorld.y * 1.6 - uTime * 0.9
                       + sin(vWorld.x * 1.1 + uTime * 0.5) * 1.4);
        float band = flow * 0.5 + 0.5;
        vec3 base = mix(uDeep, uGold, band);

        // Fresnel: kenarlarda ışıldayan sıcak altın hâle.
        float fres = pow(1.0 - max(dot(normalize(vView), normalize(vNormal)), 0.0), 2.4);
        vec3 col = base * (0.35 + 0.65 * band) + uBright * fres * 1.1;

        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
}

/** Altın toz zerreleri için nokta malzemesi. */
export function goldDust(): THREE.PointsMaterial {
  return new THREE.PointsMaterial({
    color: GOLD_BRIGHT,
    size: 0.14,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}
