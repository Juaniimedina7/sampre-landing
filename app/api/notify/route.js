// Contacto y Rally: recibe { subject, data } y manda un mail-tabla a info@sampre.com.ar.
import { sendMail, rowsToHtml } from '@/lib/email'

export async function POST(req) {
  let body
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Body inválido' }, { status: 400 })
  }

  const { subject, data } = body || {}
  if (!subject || !data || typeof data !== 'object') {
    return Response.json({ error: 'Faltan datos' }, { status: 400 })
  }

  // Honeypot: si viene relleno, es bot. Fingimos éxito y descartamos.
  if (data._honey) return Response.json({ ok: true })

  try {
    await sendMail({
      subject,
      html: rowsToHtml(data),
      replyTo: typeof data.email === 'string' ? data.email : undefined,
    })
    return Response.json({ ok: true })
  } catch (err) {
    console.error('[notify]', err)
    return Response.json({ error: 'No se pudo enviar' }, { status: 500 })
  }
}
