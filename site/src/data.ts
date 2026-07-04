export interface Project {
  name: string;
  kicker: string;
  body: string;
  location: string;
  year: string;
  area: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Meridyen Kulesi",
    kicker: "Karma Kullanım — Yüksek Yapı",
    body:
      "42 katlı kule, her katta 1,5° dönerek Boğaz'a bakan cephelerini " +
      "güneşe göre yeniden konumlandırır. Burulan strüktür, altın eloksal " +
      "alüminyum lamellerle sarılıdır; kule gece kentin siluetinde akışkan " +
      "bir ışık çizgisine dönüşür.",
    location: "İstanbul",
    year: "2024",
    area: "68.400 m²",
  },
  {
    name: "Avlu Konutları",
    kicker: "Konut — Teraslı Blok",
    body:
      "Kademelenerek geri çekilen üç konut bloğu, aralarında rüzgârdan " +
      "korunan yeşil bir avlu tanımlar. Her teras bir alt dairenin bahçesi " +
      "olur; brüt beton kütleler pirinç korkuluk detaylarıyla yumuşatılır.",
    location: "İzmir",
    year: "2023",
    area: "24.700 m²",
  },
  {
    name: "Cam Pavyon",
    kicker: "Kültür — Sergi Yapısı",
    body:
      "Jeodezik altın kafes strüktür, tek bir iç mekânı örten hafif bir " +
      "kabuk oluşturur. Gündüz gölge deseni sergi alanını çizer, gece " +
      "kafesin kendisi kentin fenerine dönüşür.",
    location: "Ankara",
    year: "2025",
    area: "1.900 m²",
  },
];
