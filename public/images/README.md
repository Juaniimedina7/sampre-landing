# Guía de Imágenes - SAMPRE Landing

Esta carpeta contiene todas las imágenes utilizadas en la landing page de SAMPRE.

## Estructura de Carpetas

```
images/
├── hero/           # Imágenes del carousel principal (4 imágenes)
├── events/         # Imágenes de eventos y congresos
├── authorities/    # Fotos de los miembros de la comisión directiva
└── backgrounds/    # Imágenes de fondo adicionales
```

## Especificaciones de Imágenes

### Hero Carousel (`/hero`)
**Cantidad:** 4 imágenes
**Nombres sugeridos:**
- `hero-1.jpg` - Ambulancia o vehículo de emergencias
- `hero-2.jpg` - Equipo médico de emergencias en acción
- `hero-3.jpg` - Paramédicos trabajando
- `hero-4.jpg` - Equipo de emergencias

**Dimensiones recomendadas:** 1920x1080px (16:9)
**Formato:** JPG o WebP
**Peso máximo:** 500KB por imagen (optimizado)

**Características:**
- Imágenes relacionadas con medicina prehospitalaria
- Buena iluminación y calidad profesional
- Composición que permita overlay de texto
- Colores que complementen la paleta roja/naranja

---

### Eventos (`/events`)
**Cantidad:** Variable (mínimo 3)
**Nombres sugeridos:**
- `congreso-sampre-2026.jpg` - Imagen del congreso principal
- `curso-trauma.jpg` - Curso de soporte vital en trauma
- `jornada-cardiovascular.jpg` - Jornada de emergencias cardiovasculares

**Dimensiones recomendadas:** 800x600px (4:3)
**Formato:** JPG o WebP
**Peso máximo:** 300KB por imagen

**Características:**
- Fotos de eventos anteriores de SAMPRE
- Auditorios, talleres, conferencias
- Participantes y actividades

---

### Autoridades (`/authorities`)
**Cantidad:** 6 fotos
**Nombres sugeridos:**
- `presidente.jpg` - Dr. Juan Carlos Rodríguez
- `vicepresidenta.jpg` - Dra. María Fernanda López
- `secretario.jpg` - Dr. Roberto Martínez
- `tesorera.jpg` - Dra. Ana Patricia Gómez
- `vocal-1.jpg` - Dr. Carlos Alberto Fernández
- `vocal-2.jpg` - Dra. Silvia Beatriz Ramírez

**Dimensiones recomendadas:** 400x400px (1:1 - cuadrado)
**Formato:** JPG o WebP
**Peso máximo:** 150KB por imagen

**Características:**
- Fotos profesionales tipo retrato
- Fondo neutro o uniforme
- Buena iluminación
- Vestimenta profesional/formal
- Alta calidad y resolución

---

### Backgrounds (`/backgrounds`)
**Cantidad:** Variable
**Uso:** Imágenes de fondo adicionales para secciones

**Dimensiones recomendadas:** 1920x1080px
**Formato:** JPG o WebP
**Peso máximo:** 400KB por imagen

---

## Cómo Reemplazar las Imágenes

### 1. Preparar las imágenes
- Optimiza las imágenes usando herramientas como TinyPNG, Squoosh, o ImageOptim
- Asegúrate de que tengan las dimensiones correctas
- Renómbralas según la convención sugerida

### 2. Colocar en las carpetas
- Copia tus imágenes en las carpetas correspondientes
- Mantén los nombres consistentes

### 3. Activar imágenes locales

Edita `lib/images.js` y cambia:
```jsx
// Cambiar de:
export const USE_LOCAL_IMAGES = false

// A:
export const USE_LOCAL_IMAGES = true
```

¡Listo! El sistema automáticamente usará tus imágenes locales.

**Nota:** No necesitas editar los componentes individualmente. Todas las rutas están centralizadas en `lib/images.js`.

---

## Optimización de Imágenes

### Herramientas Recomendadas
1. **TinyPNG** (https://tinypng.com/) - Compresión online
2. **Squoosh** (https://squoosh.app/) - Herramienta de Google
3. **ImageOptim** (Mac) - App de escritorio
4. **RIOT** (Windows) - Optimizador de imágenes

### Formatos Recomendados
- **WebP:** Mejor compresión, ideal para web moderna
- **JPG:** Compatible con todos los navegadores
- **PNG:** Solo para imágenes con transparencia

### Next.js Image Optimization
Para máxima optimización, considera usar el componente `<Image>` de Next.js:

```jsx
import Image from 'next/image'

<Image
  src="/images/hero/hero-1.jpg"
  alt="Descripción"
  width={1920}
  height={1080}
  quality={85}
  priority={true}
/>
```

---

## Checklist de Imágenes

### Hero (4 imágenes)
- [ ] hero-1.jpg
- [ ] hero-2.jpg
- [ ] hero-3.jpg
- [ ] hero-4.jpg

### Eventos (mínimo 3)
- [ ] congreso-sampre-2026.jpg
- [ ] curso-trauma.jpg
- [ ] jornada-cardiovascular.jpg

### Autoridades (6 fotos)
- [ ] presidente.jpg
- [ ] vicepresidenta.jpg
- [ ] secretario.jpg
- [ ] tesorera.jpg
- [ ] vocal-1.jpg
- [ ] vocal-2.jpg

---

## Notas Importantes

1. **Derechos de Autor:** Asegúrate de tener los derechos o permisos para usar las imágenes
2. **Privacidad:** Obtén consentimiento de las personas fotografiadas para las fotos de autoridades
3. **Optimización:** Siempre optimiza las imágenes antes de subirlas para mejorar el rendimiento
4. **Respaldo:** Mantén copias de las imágenes originales en alta resolución
5. **Nombres de archivo:** Usa nombres descriptivos sin espacios ni caracteres especiales

---

## Estado Actual

⚠️ **Actualmente usando imágenes de Unsplash (URLs externas)**

Las imágenes actuales son placeholders de Unsplash. Para usar imágenes locales:
1. Coloca tus imágenes en las carpetas correspondientes
2. Actualiza las rutas en los componentes según la guía arriba
3. Elimina las URLs de Unsplash y usa rutas relativas `/images/...`
