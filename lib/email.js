// Envío de mails server-only vía Resend. NUNCA importar desde un 'use client'.
// Requiere RESEND_API_KEY y un dominio verificado en Resend para el FROM.
import { Resend } from 'resend'

// Destino de las solicitudes. Temporalmente overridable por env mientras no esté
// verificado el dominio en Resend (Resend solo deja enviar al mail de la cuenta).
export const MAIL_TO = process.env.MAIL_TO || 'info@sampre.com.ar'
// El FROM debe ser de un dominio verificado en Resend (ver DNS). Override con MAIL_FROM.
const MAIL_FROM = process.env.MAIL_FROM || 'SAMPRE <noreply@sampre.com.ar>'

export async function sendMail({ to = MAIL_TO, subject, html, replyTo, attachments }) {
  if (!process.env.RESEND_API_KEY) throw new Error('RESEND_API_KEY no configurada')
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { data, error } = await resend.emails.send({
    from: MAIL_FROM,
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
    ...(attachments ? { attachments } : {}),
  })
  if (error) throw new Error(error.message || 'Error de Resend')
  return data
}

// Renderiza {campo: valor} como tabla HTML. Omite keys internas (_subject, _honey, etc.).
export function rowsToHtml(data) {
  const rows = Object.entries(data)
    .filter(([k, v]) => !k.startsWith('_') && v != null && String(v).trim() !== '')
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb">${esc(
          k
        )}</td><td style="padding:6px 10px;border:1px solid #e5e7eb">${esc(String(v))}</td></tr>`
    )
    .join('')
  return `<table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">${rows}</table>`
}

function esc(s) {
  return s.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))
}
