# SAMPRE - Landing Page

Landing page oficial de la Sociedad Argentina de Medicina Prehospitalaria con diseño de emergencias médicas.

## Tecnologías

- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- JavaScript (JSX)
- Lucide React (iconos)

## Características

- **Carousel de imágenes automático** en Hero con imágenes de emergencias médicas
- **Diseño responsive** mobile-first
- **Colores institucionales argentinos** (azules celeste y oscuro)
- **Navegación sticky** con menú hamburguesa en móviles
- **Animaciones y transiciones** suaves
- **Optimizado para SEO**

## Instalación

Las dependencias ya están instaladas. Si necesitas reinstalarlas:

```bash
npm install
```

## Desarrollo

Para ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el sitio.

## Build de Producción

Para crear una versión optimizada para producción:

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
sampre-landing/
├── app/
│   ├── layout.jsx          # Layout principal con metadata SEO
│   ├── page.jsx            # Página principal
│   └── globals.css         # Estilos globales + Tailwind
├── components/
│   ├── Header.jsx          # Navegación sticky con 6 secciones
│   ├── Hero.jsx            # Carousel de imágenes de emergencias
│   ├── About.jsx           # Misión, visión, valores e historia
│   ├── Services.jsx        # 4 servicios principales
│   ├── UpcomingEvents.jsx  # Eventos y congresos próximos
│   ├── Authorities.jsx     # Comisión directiva 2024-2026
│   ├── Contact.jsx         # Formulario de contacto
│   └── Footer.jsx          # Footer con enlaces y redes
├── lib/
│   └── images.js           # Configuración centralizada de imágenes
├── public/
│   └── images/             # Carpetas para imágenes locales
└── tailwind.config.js      # Configuración con colores azules
```

## Secciones de la Landing Page

### 1. Hero (Inicio)
- Carousel automático de 4 imágenes de emergencias médicas
- Cambia cada 5 segundos con transiciones suaves
- Indicadores visuales del carousel
- Badge distintivo y estadísticas destacadas
- CTAs principales: "Conocer más" y "Contacto"

### 2. Sobre Nosotros
- Misión, visión, valores y comunidad
- Cards con iconos y diseño moderno
- Sección de historia de SAMPRE
- Bordes rojos temáticos de emergencias

### 3. Servicios y Actividades
- Capacitaciones y cursos
- Eventos y congresos
- Publicaciones científicas
- Certificaciones profesionales
- Grid de 4 servicios con detalles

### 4. Próximos Eventos
- Listado de eventos destacados
- Información detallada: fecha, ubicación, horario, asistentes
- Botones de "Más información" e "Inscribirse"
- Categorías: Congreso, Curso, Jornada
- Link al calendario completo

### 5. Autoridades
- Comisión Directiva 2024-2026
- 6 miembros con fotos, cargo y especialidad
- Grid responsive 3 columnas
- Información del período actual

### 6. Contacto
- Formulario funcional (nombre, email, asunto, mensaje)
- Información de contacto (email, teléfono, ubicación)
- Horarios de atención
- Validación de campos

### 7. Footer
- Logo y descripción de SAMPRE
- Enlaces rápidos a todas las secciones
- Íconos de redes sociales
- Copyright

## Paleta de Colores

### Colores Primarios (Azul celeste)
- `primary-50` a `primary-900`: Escala de azules celeste
- `primary-600` (#0284c7): Color principal de marca
- Inspirado en los colores de Argentina

### Colores Secundarios (Azul oscuro)
- `secondary-50` a `secondary-900`: Escala de azules oscuros
- `secondary-600` (#2563eb): Color de acento
- Para contrastes y elementos destacados

Edita `tailwind.config.js` para personalizar la paleta.

## Personalización

### Cambiar imágenes del carousel (Hero)
Edita `components/Hero.jsx` líneas 10-15:
```jsx
const backgroundImages = [
  'tu-imagen-1.jpg',
  'tu-imagen-2.jpg',
  // ...
]
```

### Modificar eventos
Edita `components/UpcomingEvents.jsx` líneas 5-40 para actualizar los eventos.

### Actualizar autoridades
Edita `components/Authorities.jsx` líneas 5-30 para cambiar los miembros de la comisión.

### Cambiar colores
Edita `tailwind.config.js` para modificar los colores primarios y de emergencias.

### Configurar formulario de contacto
Edita `components/Contact.jsx` línea 19 para agregar la lógica de envío a tu backend.

## Sistema de Imágenes

### Sistema Centralizado

Todas las imágenes se gestionan desde `lib/images.js`, permitiendo cambiar fácilmente entre imágenes externas (Unsplash) y locales.

**Actualmente:** Usando imágenes de Unsplash (placeholders)

### Cambiar a imágenes locales

1. **Coloca tus imágenes** en las carpetas organizadas:
   ```
   public/images/
   ├── hero/         (4 imágenes - 1920x1080px)
   ├── events/       (3+ imágenes - 800x600px)
   └── authorities/  (6 fotos - 400x400px)
   ```

2. **Activa imágenes locales** en `lib/images.js`:
   ```javascript
   export const USE_LOCAL_IMAGES = true
   ```

3. **¡Listo!** El sitio usará automáticamente tus imágenes locales.

### Documentación detallada

- **Guía rápida:** Ver `IMAGES_GUIDE.md` en la raíz del proyecto
- **Especificaciones completas:** Ver `public/images/README.md`
- **Configuración:** Ver `lib/images.js`

## SEO

El metadata está configurado en `app/layout.jsx`:
- Title: "SAMPRE - Sociedad Argentina de Medicina Prehospitalaria"
- Description optimizada
- Keywords relacionadas

## Próximos Pasos Sugeridos

- [ ] Agregar imágenes reales en lugar de placeholders de Unsplash
- [ ] Conectar el formulario de contacto a un backend/API
- [ ] Agregar enlaces reales a redes sociales
- [ ] Configurar Google Analytics
- [ ] Agregar fotos reales de las autoridades
- [ ] Implementar sistema de gestión de eventos
- [ ] Agregar página de detalles de eventos individuales
- [ ] Configurar dominio y hosting

## Tecnologías Adicionales Recomendadas

- **Emailjs** o **Formspree** para el formulario de contacto
- **Google Analytics** para tracking
- **Vercel** o **Netlify** para deployment
- **Sanity** o **Contentful** para CMS (gestión de eventos y autoridades)

## Licencia

Proyecto desarrollado para SAMPRE - Sociedad Argentina de Medicina Prehospitalaria.
