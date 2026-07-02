// A3 yatay PDF proje portföyü (jsPDF). Masaüstü pdf_report.py karşılığı.
import { jsPDF } from "jspdf";
import type { DrawingData } from "./dxf";

const PW = 420; // A3 yatay genişlik (mm)
const PH = 297;
const MARGIN = 12;
const TB_H = 22; // antet yüksekliği

export interface PdfInputs {
  projectName: string;
  data: DrawingData;
  stats: Record<string, string>;
  planImg?: string; // dataURL
  views: { name: string; dataUrl: string }[];
  sourceName: string;
}

function imgSize(dataUrl: string): { w: number; h: number } {
  // PNG boyutunu başlıktan oku (16-24. baytlar)
  try {
    const b64 = dataUrl.split(",")[1];
    const bin = atob(b64.slice(0, 64));
    const w = (bin.charCodeAt(16) << 24) | (bin.charCodeAt(17) << 16) | (bin.charCodeAt(18) << 8) | bin.charCodeAt(19);
    const h = (bin.charCodeAt(20) << 24) | (bin.charCodeAt(21) << 16) | (bin.charCodeAt(22) << 8) | bin.charCodeAt(23);
    if (w > 0 && h > 0) return { w, h };
  } catch {
    /* yoksay */
  }
  return { w: 1000, h: 720 };
}

function drawImageFit(pdf: jsPDF, dataUrl: string, x: number, y: number, w: number, h: number) {
  const { w: iw, h: ih } = imgSize(dataUrl);
  const scale = Math.min(w / iw, h / ih);
  const dw = iw * scale;
  const dh = ih * scale;
  pdf.addImage(dataUrl, "PNG", x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
}

function titleBlock(pdf: jsPDF, inputs: PdfInputs, sheet: string, pageNo: number, total: number) {
  const x0 = MARGIN;
  const y0 = MARGIN;
  const w = PW - 2 * MARGIN;
  const h = PH - 2 * MARGIN;
  pdf.setDrawColor(38, 41, 46);
  pdf.setLineWidth(0.5);
  pdf.rect(x0, y0, w, h);
  // Antet (sayfanın alt şeridi)
  const tbY = y0 + h - TB_H;
  pdf.setLineWidth(0.3);
  pdf.rect(x0, tbY, w, TB_H);
  pdf.line(x0 + w - 70, tbY, x0 + w - 70, tbY + TB_H);
  pdf.line(x0 + w - 140, tbY, x0 + w - 140, tbY + TB_H);

  pdf.setTextColor(30, 32, 36);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(12);
  pdf.text(inputs.projectName.slice(0, 60), x0 + 4, tbY + 9);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.text(sheet, x0 + 4, tbY + TB_H - 4);

  const midX = x0 + w - 140 + 4;
  const tarih = inputs.data.info["TARIH"] || inputs.data.info["TARİH"] || new Date().toLocaleDateString("tr-TR");
  const mimar = inputs.data.info["MIMAR"] || inputs.data.info["MİMAR"] || inputs.data.info["ARCHITECT"] || "-";
  pdf.setFontSize(8);
  pdf.text(`Tarih: ${tarih}`, midX, tbY + 8);
  pdf.text(`Mimar: ${mimar.slice(0, 28)}`, midX, tbY + 15);

  const rightX = x0 + w - 70 + 4;
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(9);
  pdf.text("MIMARI3D PORTFOY", rightX, tbY + 9);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.text(`Sayfa ${pageNo} / ${total}`, rightX, tbY + TB_H - 4);
}

function contentArea() {
  return {
    x: MARGIN + 6,
    y: MARGIN + 6,
    w: PW - 2 * MARGIN - 12,
    h: PH - 2 * MARGIN - TB_H - 12,
  };
}

export function buildPdf(inputs: PdfInputs): jsPDF {
  const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a3", compress: true });
  const planPages = inputs.planImg ? 1 : 0;
  const viewPages = inputs.views.length > 0 ? 1 : 0;
  const total = 2 + planPages + viewPages;
  let page = 0;

  // 1) Kapak
  page++;
  pdf.setFillColor(41, 75, 90);
  pdf.rect(0, 0, PW, 60, "F");
  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(30);
  pdf.text("MIMARI PROJE PORTFOYU", MARGIN + 8, 32);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(16);
  pdf.text(inputs.projectName.slice(0, 70), MARGIN + 8, 48);
  const thumb = inputs.views[0]?.dataUrl || inputs.planImg;
  if (thumb) drawImageFit(pdf, thumb, MARGIN + 30, 75, PW - 2 * MARGIN - 60, PH - 130);
  pdf.setTextColor(30, 32, 36);
  pdf.setFontSize(11);
  pdf.text(`Kaynak: ${inputs.sourceName}`, MARGIN + 8, PH - 20);
  pdf.setFont("helvetica", "italic");
  pdf.setFontSize(9);
  pdf.text("Mimari3D — DWG/DXF'den 3B model ve PDF portfoy uretici (web)", MARGIN + 8, PH - 12);

  // 2) Proje bilgileri
  pdf.addPage();
  page++;
  titleBlock(pdf, inputs, "Proje Bilgileri ve Istatistikler", page, total);
  {
    const { x, y, w, h } = contentArea();
    pdf.setTextColor(41, 75, 90);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.text("Proje Bilgileri", x, y + 6);
    const merged: Record<string, string> = { ...inputs.data.info, ...inputs.stats };
    let ry = y + 16;
    const colW = w * 0.48;
    pdf.setFontSize(9);
    for (const [k, v] of Object.entries(merged)) {
      if (ry > y + h - 4) break;
      pdf.setTextColor(30, 32, 36);
      pdf.setFont("helvetica", "bold");
      pdf.text(`${k}:`, x, ry);
      pdf.setFont("helvetica", "normal");
      pdf.text(String(v).slice(0, 40), x + 45, ry);
      pdf.setDrawColor(225, 225, 225);
      pdf.setLineWidth(0.2);
      pdf.line(x, ry + 2, x + colW, ry + 2);
      ry += 8;
    }
    // Katmanlar
    const rx = x + colW + 12;
    pdf.setTextColor(41, 75, 90);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text(`Katmanlar (${inputs.data.layers.length})`, rx, y + 6);
    pdf.setTextColor(30, 32, 36);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    let ly = y + 14;
    for (const name of inputs.data.layers) {
      if (ly > y + h - 4) {
        pdf.text("...", rx, ly);
        break;
      }
      pdf.text(`- ${name.slice(0, 48)}`, rx, ly);
      ly += 5;
    }
  }

  // 3) 2B plan
  if (inputs.planImg) {
    pdf.addPage();
    page++;
    titleBlock(pdf, inputs, "2B Mimari Plan", page, total);
    const { x, y, w, h } = contentArea();
    pdf.setTextColor(41, 75, 90);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.text("2B Mimari Plan", x, y + 5);
    drawImageFit(pdf, inputs.planImg, x, y + 8, w, h - 10);
  }

  // 4) 3B görünümler (2x2)
  if (inputs.views.length > 0) {
    pdf.addPage();
    page++;
    titleBlock(pdf, inputs, "3B Model Gorunumleri", page, total);
    const { x, y, w, h } = contentArea();
    pdf.setTextColor(41, 75, 90);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.text("3B Model Gorunumleri", x, y + 5);
    const gridTop = y + 10;
    const cellW = (w - 8) / 2;
    const cellH = (h - 10 - 8) / 2;
    inputs.views.slice(0, 4).forEach((v, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const cx = x + col * (cellW + 8);
      const cy = gridTop + row * (cellH + 8);
      drawImageFit(pdf, v.dataUrl, cx, cy, cellW, cellH - 5);
      pdf.setTextColor(30, 32, 36);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.text(v.name, cx, cy + cellH - 1);
    });
  }

  return pdf;
}
