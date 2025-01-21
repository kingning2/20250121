import { PDFDocument, degrees } from 'pdf-lib';

export async function rotatePDF(file: File, pageRotations: { [key: number]: number }) {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pages = pdfDoc.getPages();

  Object.entries(pageRotations).forEach(([pageNum, rotation]) => {
    const pageIndex = parseInt(pageNum) - 1;
    if (pageIndex >= 0 && pageIndex < pages.length) {
      const page = pages[pageIndex];
      const currentRotation = page.getRotation().angle;
      page.setRotation(degrees((currentRotation + rotation) % 360));
    }
  });

  const modifiedPdfBytes = await pdfDoc.save();
  return new Blob([modifiedPdfBytes], { type: 'application/pdf' });
} 