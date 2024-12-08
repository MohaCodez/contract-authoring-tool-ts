import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import type { Section } from '../types';

export const exportToPDF = async (sections: Section[]) => {
  // Create a temporary container for rendering
  const container = document.createElement('div');
  container.style.width = '800px';
  container.style.padding = '40px';
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  document.body.appendChild(container);

  // Add content
  sections.forEach((section) => {
    const sectionDiv = document.createElement('div');
    sectionDiv.innerHTML = `
      <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 12px;">${section.title}</h2>
      ${section.content}
      <div style="height: 20px"></div>
    `;
    container.appendChild(sectionDiv);
  });

  try {
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [595.28, 841.89] // A4 size
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('contract.pdf');
  } finally {
    document.body.removeChild(container);
  }
};