import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializar Resend con la API Key de las variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Enviar correo vía Resend
    const { data, error } = await resend.emails.send({
      from: 'CostaLabs <web@costalabs.cl>', // Usando el dominio verificado
      to: ['contacto@costalabs.cl'],
      subject: `Nueva consulta de: ${nombre} ${apellido}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #00d4ff;">Nueva consulta desde el sitio Web</h2>
          <p><strong>De:</strong> ${nombre} ${apellido}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Empresa:</strong> ${empresa || 'No especificada'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${descripcion}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return NextResponse.json({ error: 'Error al enviar el correo vía Resend' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error('Error interno:', error);
    return NextResponse.json(
      { error: 'Error interno en el servidor' },
      { status: 500 }
    );
  }
}
