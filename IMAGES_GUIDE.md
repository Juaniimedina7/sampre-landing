# Guía Rápida: Cambiar a Imágenes Locales

## Paso a Paso

### 1. Preparar tus imágenes

Coloca tus imágenes en las carpetas correspondientes dentro de `/public/images/`:

```
public/images/
├── hero/
│   ├── hero-1.jpg  (1920x1080px, max 500KB)
│   ├── hero-2.jpg
│   ├── hero-3.jpg
│   └── hero-4.jpg
│
├── events/
│   ├── congreso-sampre-2026.jpg  (800x600px, max 300KB)
│   ├── curso-trauma.jpg
│   └── jornada-cardiovascular.jpg
│
└── authorities/
    ├── presidente.jpg  (400x400px, max 150KB)
    ├── vicepresidenta.jpg
    ├── secretario.jpg
    ├── tesorera.jpg
    ├── vocal-1.jpg
    └── vocal-2.jpg
```

### 2. Activar imágenes locales

Edita el archivo `lib/images.js` y cambia:

```javascript
// Cambiar de:
export const USE_LOCAL_IMAGES = false

// A:
export const USE_LOCAL_IMAGES = true
```

### 3. ¡Listo!

Recarga la página y verás tus imágenes locales. El sitio automáticamente usará las rutas locales en lugar de las URLs de Unsplash.

---

## Estructura Actual

El sistema de imágenes está centralizado en `/lib/images.js`. Este archivo contiene:

- **heroImages**: 4 imágenes del carousel principal
- **eventImages**: Imágenes de los eventos destacados
- **authorityImages**: Fotos de los 6 miembros de la comisión directiva

Cada imagen tiene dos rutas configuradas:
- `local`: Ruta a la carpeta `/public/images/`
- `external`: URL de Unsplash (actualmente en uso)

---

## Ventajas de este sistema

✅ **Cambio instantáneo**: Solo cambia una variable para usar imágenes locales
✅ **Centralizado**: Todas las rutas en un solo archivo
✅ **Fácil mantenimiento**: Actualiza rutas sin tocar los componentes
✅ **Flexible**: Puedes volver a usar URLs externas cuando quieras

---

## Optimización Recomendada

Antes de agregar tus imágenes, optimízalas con:

- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim** (Mac)

Esto mejorará significativamente la velocidad de carga del sitio.

---

## Consulta la documentación completa

Ver `/public/images/README.md` para especificaciones detalladas de cada tipo de imagen.
