import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone_number, subject, message } = await req.json();

    const response = await resend.emails.send({
      from: "no-reply@yourdomain.com", // Usa un dominio verificado en Resend
      to: ["info@empalifeusa.com"], // Cambia por tu email real
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone_number}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error al enviar el email:", error);
    return new Response(
      JSON.stringify({ error: "Error enviando el mensaje" }),
      { status: 500 }
    );
  }
}
