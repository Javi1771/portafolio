// app/api/contact/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    //* Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 },
      );
    }

    //* Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const YOUR_EMAIL = process.env.CONTACT_EMAIL || "jl728122@gmail.com";

    if (!RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY no está configurada");
      return NextResponse.json(
        { error: "Error de configuración del servidor" },
        { status: 500 },
      );
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" });
    const timeStr = now.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });

    //* Versión texto plano (crítica para evitar spam)
    const textBody = `
Nuevo mensaje desde el formulario de contacto de javier-lopez.dev

De: ${name}
Email: ${email}
Asunto: ${subject}
Fecha: ${dateStr} ${timeStr}

Mensaje:
${message}

---
Para responder, escribe directamente a: ${email}
Este correo fue generado automáticamente desde javier-lopez.dev
    `.trim();

    //* Enviar correo con Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Javier Lopez Portfolio <contacto@javier-lopez.dev>",
        to: [YOUR_EMAIL],
        reply_to: `${name} <${email}>`,
        subject: `Contacto portfolio: ${subject}`,
        text: textBody,
        headers: {
          "X-Priority": "1",
          "Importance": "high",
          "X-Mailer": "Portfolio Contact Form",
        },
        html: `
          <!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nuevo mensaje de contacto</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc;">

            <!-- Contenedor principal -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background: #f7f9fc; padding: 40px 20px;">
              <tr>
                <td align="center">

                  <!-- Tarjeta de email -->
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">

                    <!-- Encabezado -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 50px 40px; text-align: center;">
                        <h1 style="color: white; font-size: 28px; font-weight: 700; margin: 0 0 10px 0;">Nuevo Mensaje Recibido</h1>
                        <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 0;">Formulario de contacto — Javier Lopez</p>
                      </td>
                    </tr>

                    <!-- Sección de contenido -->
                    <tr>
                      <td style="padding: 40px;">

                        <!-- Aviso de fecha -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                          <tr>
                            <td style="background: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; border-radius: 8px;">
                              <p style="margin: 0; color: #c2410c; font-size: 15px; font-weight: 600;">
                                Mensaje recibido el ${dateStr} a las ${timeStr}
                              </p>
                              <p style="margin: 5px 0 0 0; color: #9a3412; font-size: 14px;">
                                Recomendado responder en las proximas 24 horas
                              </p>
                            </td>
                          </tr>
                        </table>

                        <!-- Información del contacto -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 40px;">
                          <tr>
                            <td>
                              <h2 style="color: #1f2937; font-size: 20px; font-weight: 700; margin: 0 0 25px 0; padding-bottom: 12px; border-bottom: 2px solid #f3f4f6;">
                                Informacion del Contacto
                              </h2>

                              <!-- Nombre -->
                              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                                <tr>
                                  <td style="background: #f8fafc; padding: 18px; border-radius: 12px; border: 1px solid #e2e8f0;">
                                    <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 4px;">Nombre</div>
                                    <div style="color: #1e293b; font-size: 18px; font-weight: 700;">${name}</div>
                                  </td>
                                </tr>
                              </table>

                              <!-- Email -->
                              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                                <tr>
                                  <td style="background: #f8fafc; padding: 18px; border-radius: 12px; border: 1px solid #e2e8f0;">
                                    <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 4px;">Email</div>
                                    <a href="mailto:${email}" style="color: #059669; font-size: 18px; font-weight: 700; text-decoration: none;">
                                      ${email}
                                    </a>
                                  </td>
                                </tr>
                              </table>

                              <!-- Asunto -->
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td style="background: #f8fafc; padding: 18px; border-radius: 12px; border: 1px solid #e2e8f0;">
                                    <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 4px;">Asunto</div>
                                    <div style="color: #1e293b; font-size: 18px; font-weight: 700;">${subject}</div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!-- Mensaje -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 40px;">
                          <tr>
                            <td>
                              <h2 style="color: #1f2937; font-size: 20px; font-weight: 700; margin: 0 0 20px 0; padding-bottom: 12px; border-bottom: 2px solid #f3f4f6;">
                                Mensaje
                              </h2>
                              <div style="background: #f1f5f9; padding: 25px; border-radius: 12px; border: 1px solid #cbd5e1;">
                                <p style="color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0;">${message}</p>
                              </div>
                            </td>
                          </tr>
                        </table>

                        <!-- Instrucción para responder -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                          <tr>
                            <td style="background: #eff6ff; padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6;">
                              <p style="margin: 0; color: #1e40af; font-size: 15px; font-weight: 600;">
                                Como responder
                              </p>
                              <p style="margin: 8px 0 0 0; color: #1e3a8a; font-size: 14px; line-height: 1.5;">
                                Haz clic en "Responder" en tu cliente de email.<br>
                                El correo de ${name} sera automaticamente seleccionado.
                              </p>
                            </td>
                          </tr>
                        </table>

                        <!-- Botón para responder -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="text-align: center;">
                              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; text-decoration: none; font-weight: 600; font-size: 16px; padding: 16px 32px; border-radius: 10px;">
                                Responder a ${name}
                              </a>
                            </td>
                          </tr>
                        </table>

                      </td>
                    </tr>

                    <!-- Pie de página -->
                    <tr>
                      <td style="background: #1e293b; padding: 40px; text-align: center; color: white;">

                        <h3 style="color: white; font-size: 22px; font-weight: 700; margin: 0 0 8px 0;">
                          Javier Lopez
                        </h3>
                        <p style="color: #cbd5e1; font-size: 14px; margin: 0 0 20px 0;">
                          Desarrollador Full Stack
                        </p>

                        <!-- Enlace al portfolio -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="text-align: center;">
                              <a href="https://javier-lopez.dev" style="display: inline-block; background: white; color: #6366f1; text-decoration: none; font-weight: 600; font-size: 15px; padding: 14px 28px; border-radius: 10px; margin: 0 0 30px 0; border: 2px solid #6366f1;">
                                Visitar Mi Portfolio
                              </a>
                            </td>
                          </tr>
                        </table>

                        <!-- Información legal -->
                        <div style="color: #94a3b8; font-size: 12px; line-height: 1.6; margin-top: 25px; padding-top: 25px; border-top: 1px solid #334155;">
                          <p style="margin: 0 0 10px 0;">
                            Este mensaje fue enviado desde el formulario de contacto de javier-lopez.dev
                          </p>
                          <p style="margin: 0; font-size: 11px;">
                            &copy; ${now.getFullYear()} Javier Lopez Portfolio
                          </p>
                        </div>

                      </td>
                    </tr>

                  </table>

                </td>
              </tr>
            </table>

          </body>
          </html>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Error de Resend:", data);
      throw new Error(data.message || "Error al enviar el correo");
    }

    console.log("✅ Email enviado exitosamente:", data.id);

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado exitosamente",
      id: data.id,
    });
  } catch (error) {
    console.error("❌ Error en /api/contact:", error);
    return NextResponse.json(
      {
        error: "Error al enviar el mensaje. Por favor intenta nuevamente.",
        details: error.message,
      },
      { status: 500 },
    );
  }
}