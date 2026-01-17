import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { nombre, apellido, telefono, email, empresa, descripcion } = await request.json();

    // Validar datos básicos
    if (!nombre || !email || !descripcion) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    // Configurar el transportador de correo (SMTP)
    // Tienes que configurar estas variables en tu archivo .env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com', // Por defecto Gmail, pero cámbialo si usas otro
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Web CostaLabs" <${process.env.SMTP_USER}>`, // Remitente
      to: 'contacto@costalabs.cl', // Destinatario FINAL
      subject: `Nueva consulta de: ${nombre} ${apellido}`,
      text: `
        Nombre: ${nombre} ${apellido}
        Email: ${email}
        Teléfono: ${telefono}
        Empresa: ${empresa || 'No especificada'}
        
        Mensaje:
        ${descripcion}
      `,
      html: `
        <h3>Tienes un nuevo mensaje desde costalabs.cl</h3>
        <p><strong>De:</strong> ${nombre} ${apellido}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Empresa:</strong> ${empresa || 'No especificada'}</p>
        <br/>
        <p><strong>Mensaje:</strong></p>
        <p>${descripcion.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json(
      { error: 'Error interno al enviar el correo' },
      { status: 500 }
    );
  }
}
