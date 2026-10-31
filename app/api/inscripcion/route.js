// Solicitud de socio: multipart con CV adjunto. Manda la solicitud a info@
// con el CV adjunto y un acuse automático al solicitante.
import { sendMail, rowsToHtml, MAIL_TO } from '@/lib/email'
import { isPdf, safePdfName, MAX_CV_BYTES } from '@/lib/upload'

export async function POST(req) {
  let form
  try {
    form = await req.formData()
  } catch {
    return Response.json({ error: 'Body inválido' }, { status: 400 })
  }

  // Honeypot
  if (form.get('_honey')) return Response.json({ ok: true })

  const file = form.get('attachment')
  if (!file || typeof file === 'string' || file.size === 0) {
    return Response.json({ error: 'Falta el CV' }, { status: 400 })
  }
  if (file.size > MAX_CV_BYTES) {
    return Response.json({ error: 'El CV supera los 4MB' }, { status: 413 })
  }

  // Campos del form (todo lo que no sea el archivo ni keys internas)
  const data = {}
  for (const [k, v] of form.entries()) {
    if (k !== 'attachment' && !k.startsWith('_') && typeof v === 'string') data[k] = v
  }

  const email = typeof data.email === 'string' ? data.email : undefined
  if (!email) return Response.json({ error: 'Falta el email' }, { status: 400 })

  const categoria = data.categoria || 'Socio'
  const buffer = Buffer.from(await file.arrayBuffer())

  // Seguridad: validamos por magic bytes, no por extensión ni content-type
  // (los controla el cliente). Solo aceptamos PDF real.
  if (!isPdf(buffer)) {
    return Response.json({ error: 'El CV debe ser un archivo PDF válido' }, { status: 415 })
  }
  const filename = safePdfName(file.name)

  try {
    // 1) Solicitud a la institución, con CV adjunto
    await sendMail({
      to: MAIL_TO,
      subject: `Nueva solicitud de socio — ${categoria}`,
      html: rowsToHtml(data),
      replyTo: email,
      attachments: [{ filename, content: buffer }],
    })

    // 2) Acuse al solicitante (best-effort: sin dominio verificado Resend no deja
    //    enviar a terceros; que falle no debe romper la recepción de la solicitud).
    try {
      await sendMail({
        to: email,
        subject: 'Recibimos tu solicitud de asociación a SAMPRE',
        html: `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#374151">
          <p>¡Gracias por tu interés en asociarte a <strong>SAMPRE</strong>!</p>
          <p>Recibimos tu solicitud y tu CV. La Comisión Directiva la evaluará y te responderemos por este medio.
          Si es aprobada, te enviaremos los datos para abonar la cuota societaria.</p>
          <p>Consultas: <a href="mailto:info@sampre.com.ar">info@sampre.com.ar</a></p>
        </div>`,
      })
    } catch (e) {
      console.warn('[inscripcion] acuse no enviado:', e?.message)
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('[inscripcion]', err)
    return Response.json({ error: 'No se pudo enviar' }, { status: 500 })
  }
}
