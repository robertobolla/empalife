import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
      });
    }

    // Envía el correo de bienvenida
    const response = await resend.emails.send({
      from: "no-reply@yourdomain.com", // Debe ser un dominio verificado en Resend
      to: [email], // Email del usuario que se suscribió
      subject: "Welcome to our Newsletter!",
      html: `
        <h2>Welcome to Empalife Newsletter!</h2>
        <p>Thank you for subscribing. You'll now receive the latest updates and special offers from us.</p>
        <p>If you have any questions, feel free to contact us at <a href="mailto:info@empalifeusa.com">info@empalifeusa.com</a>.</p>
        <p>Best regards,<br/>Empalife Team</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
}
