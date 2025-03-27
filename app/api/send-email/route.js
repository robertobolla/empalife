import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    console.log("✅ Se recibió una solicitud en /api/send-email");

    const { name, email, phone_number, subject, message } = await req.json();

    console.log("📝 Datos recibidos:", {
      name,
      email,
      phone_number,
      subject,
      message,
    });

    const response = await resend.emails.send({
      from: "no-reply@empalifeusa.com", // Usa este para pruebas sin dominio verificado
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

    console.log("📤 Respuesta de Resend:", response);

    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
    });
  } catch (error) {
    console.error("❌ Error al enviar el email:", error);
    return new Response(
      JSON.stringify({ error: "Error enviando el mensaje" }),
      { status: 500 }
    );
  }
}
