const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createPdf() {
  const doc = await PDFDocument.create();
  const dossierDir = path.join(__dirname, '../public/dossier');
  const outputDir = path.join(__dirname, '../public');
  
  // List of pages in order
  const pages = [
    'page1.png', // Portada
    'page2.png', // Historia (Actualizada)
    'page3.png', // MetodologÃa
    'page4.png', // Servicios (Actualizada)
    'page5.png', // Stack (Actualizada)
    'page6.png', // Sectores
    'page7.png'  // Contacto
  ];

  console.log('Generating PDF with updated pages...');

  for (const pageName of pages) {
    const imagePath = path.join(dossierDir, pageName);
    if (fs.existsSync(imagePath)) {
      const imageBytes = fs.readFileSync(imagePath);
      console.log(`Processing ${pageName}...`);
      try {
        const image = await doc.embedPng(imageBytes);
        const { width, height } = image.scale(1);
        const page = doc.addPage([width, height]);
        page.drawImage(image, {
          x: 0,
          y: 0,
          width: width,
          height: height,
        });
        console.log(`Added ${pageName}`);
      } catch (e) {
        console.error(`Error embedding ${pageName}: ${e.message}`);
        // Try embedding as JPG if PNG fails, just in case
        try {
             console.log(`Attempting to embed ${pageName} as JPEG...`);
             const image = await doc.embedJpg(imageBytes);
             const { width, height } = image.scale(1);
             const page = doc.addPage([width, height]);
             page.drawImage(image, { x: 0, y: 0, width, height });
             console.log(`Added ${pageName} as JPEG`);
        } catch (e2) {
             console.error(`Failed to embed ${pageName} as PNG or JPEG: ${e2.message}`);
             throw e;
        }
      }
    } else {
      console.warn(`Warning: ${pageName} not found!`);
    }
  }

  const pdfBytes = await doc.save();
  const outputPath = path.join(outputDir, 'CostaLabs_Dossier_2026.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  
  console.log(`Success! PDF saved to: ${outputPath}`);
}

createPdf().catch(err => console.error(err));
