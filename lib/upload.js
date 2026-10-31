// Validación de archivos subidos (CV). Lógica pura y testeable.
// Corré el self-check con:  node lib/upload.js
export const MAX_CV_BYTES = 4 * 1024 * 1024 // 4MB (el body de Vercel topa en 4.5MB)

// Un PDF real empieza con "%PDF-". Validamos por CONTENIDO, no por la extensión
// ni el content-type: ambos los controla el cliente y se pueden falsear.
export function isPdf(buffer) {
  return buffer.length > 5 && buffer.subarray(0, 5).toString('latin1') === '%PDF-'
}

// Nombre seguro para el adjunto: sin rutas, solo chars simples, termina en .pdf, acotado.
export function safePdfName(name) {
  const base = String(name || 'cv.pdf').split(/[\\/]/).pop()
  const cleaned = base.replace(/[^a-zA-Z0-9._-]/g, '_').replace(/_+/g, '_').slice(0, 100)
  return /\.pdf$/i.test(cleaned) ? cleaned : `${cleaned || 'cv'}.pdf`
}

// self-check
if (import.meta.url === `file://${process.argv[1]}`) {
  const assert = (c, m) => { if (!c) throw new Error('FAIL: ' + m) }
  assert(isPdf(Buffer.from('%PDF-1.7\nfoo')), 'pdf válido')
  assert(!isPdf(Buffer.from('<html>')), 'html no es pdf')
  assert(!isPdf(Buffer.from('MZ\x90\x00')), 'exe no es pdf')
  assert(!isPdf(Buffer.from('')), 'vacío no es pdf')
  assert(safePdfName('../../etc/passwd') === 'passwd.pdf', 'strip path: ' + safePdfName('../../etc/passwd'))
  assert(safePdfName('mi cv!.pdf') === 'mi_cv_.pdf', 'sanitiza: ' + safePdfName('mi cv!.pdf'))
  assert(safePdfName('') === 'cv.pdf', 'vacío → cv.pdf')
  assert(safePdfName('CV-Juan.PDF') === 'CV-Juan.PDF', 'respeta .PDF')
  console.log('ok')
}
