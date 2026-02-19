const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function createMasterPDF() {
    console.log('Generando PDF Maestro en Alta Definición...');
    const pdfDoc = await PDFDocument.create();

    for (let i = 1; i <= 7; i++) {
        const imgPath = `./public/dossier_master/page${i}.png`;
        console.log(`Procesando página ${i}...`);

        const imgBytes = fs.readFileSync(imgPath);
        const image = await pdfDoc.embedJpg(imgBytes);

        // Mapeo perfecto 1:1 de píxeles a puntos (1024x1024)
        const page = pdfDoc.addPage([1024, 1024]);
        page.drawImage(image, {
            x: 0,
            y: 0,
            width: 1024,
            height: 1024,
        });
    }

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('./public/Dossier_CostaLabs_2026_FINAL.pdf', pdfBytes);
    console.log('\n✅ ¡PDF MAESTRO creado con éxito!: ./public/Dossier_CostaLabs_2026_FINAL.pdf');
}

createMasterPDF().catch(console.error);
