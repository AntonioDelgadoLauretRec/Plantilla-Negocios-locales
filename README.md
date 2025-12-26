# 🚀 Plantilla Web Profesional Modular

## 📋 Descripción

Plantilla web profesional, completamente responsiva y altamente personalizable diseñada para negocios que buscan establecer su presencia digital de manera profesional y efectiva.

### ✨ Características Principales

- ✅ **100% Responsive** - Mobile First Design
- ✅ **Accesibilidad WCAG** - Etiquetas semánticas y navegación por teclado
- ✅ **Sistema de Temas** - Personalización fácil con variables CSS
- ✅ **Sin Dependencias** - Vanilla JavaScript, ligero y rápido
- ✅ **Modular** - Arquitectura de componentes reutilizables
- ✅ **SEO Optimizado** - Meta tags y estructura semántica
- ✅ **Performance** - Carga rápida y optimizada

---

## 🗂️ Estructura de Archivos

```
proyecto/
│
├── index.html              # Página principal
├── theme-config.css        # 🎨 Configuración de colores y temas
├── main.css               # Estilos base y componentes
├── responsive.css         # Media queries y responsive
├── main.js               # Funcionalidad JavaScript
└── README.md             # Esta documentación
```

---

## 🎨 Guía de Personalización Rápida

### 1️⃣ **Cambiar Colores de Marca**

Edita el archivo `theme-config.css` (líneas 13-18):

```css
:root {
  --color-primary: #TU-COLOR-AQUI;        /* Color principal */
  --color-primary-dark: #TU-COLOR-OSCURO;  /* Hover/activo */
  --color-secondary: #TU-COLOR-SECUNDARIO; /* Acentos */
}
```

**💡 Temas Predefinidos:** El archivo incluye 5 temas listos para usar. 
Simplemente descomenta el que desees (líneas 137-176).

### 2️⃣ **Personalizar Contenido**

Busca los comentarios `🔧 PERSONALIZAR:` en `index.html`:

#### **Logo y Nombre** (línea 58)
```html
<span>TuNegocio</span>  <!-- Cambia esto -->
```

#### **Título Hero** (línea 105)
```html
<h1 class="hero__title">
  Tu Título Impactante Aquí
</h1>
```

#### **Servicios** (línea 149+)
Modifica el contenido de cada `service-card`:
```html
<h3 class="service-card__title">Nombre del Servicio</h3>
<p class="service-card__description">Descripción del servicio...</p>
```

#### **Testimonios** (línea 289+)
Actualiza nombre, rol y comentario de cada cliente.

#### **Información de Contacto** (línea 459+)
Actualiza dirección, email, teléfono y horarios.

### 3️⃣ **Cambiar Tipografías**

Edita `index.html` (línea 34) y `theme-config.css` (línea 36):

```html
<!-- En index.html -->
<link href="https://fonts.googleapis.com/css2?family=TU-FUENTE&display=swap">
```

```css
/* En theme-config.css */
--font-primary: 'TU-FUENTE', sans-serif;
```

### 4️⃣ **Configurar Formulario de Contacto**

Edita `main.js` (línea 261) para conectar con tu backend:

```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

**Servicios recomendados:**
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Web3Forms](https://web3forms.com/)

---

## 📱 Secciones Disponibles

### 1. **Header/Navigation**
- Menú fijo con scroll
- Hamburger menu para móvil
- Smooth scroll a secciones

### 2. **Hero**
- Título principal con CTA
- Dual-button layout
- Imagen opcional

### 3. **Servicios**
- Grid responsive (1/2/3 columnas)
- Cards con hover effects
- Iconos personalizables

### 4. **Sobre Nosotros**
- Layout de 2 columnas
- Lista de características
- Imagen destacada

### 5. **Testimonios**
- Cards de clientes
- Sistema de rating
- Avatares de clientes

### 6. **Contacto**
- Formulario funcional con validación
- Información de contacto
- Diseño dual-column

### 7. **Footer**
- Enlaces organizados
- Redes sociales
- Copyright automático

---

## 🎯 Nichos de Negocio Compatibles

Esta plantilla se adapta perfectamente a:

- 💼 **Consultorías** - Legal, financiera, empresarial
- 🏥 **Salud & Wellness** - Clínicas, spas, gimnasios
- 🍽️ **Restaurantes** - Cafeterías, restaurantes, catering
- 🏗️ **Construcción** - Arquitectura, ingeniería, reformas
- 💻 **Tecnología** - Startups, agencias digitales, desarrollo
- 🎓 **Educación** - Academias, tutorías, cursos online
- 🏠 **Inmobiliarias** - Agencias, promotoras
- 📸 **Creativos** - Fotógrafos, diseñadores, artistas

---

## ⚡ Optimización de Rendimiento

### Imágenes
1. **Comprime las imágenes** antes de subirlas
   - Usa [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)
   - Tamaño recomendado: < 200KB por imagen

2. **Formatos recomendados:**
   - WebP para mejor compresión
   - JPG para fotografías
   - PNG para gráficos con transparencia

### CSS
- ✅ Ya minificado y optimizado
- ✅ Critical CSS inline (considerar para producción)

### JavaScript
- ✅ Sin librerías pesadas
- ✅ Lazy loading de imágenes implementado
- ✅ Eventos pasivos para scroll

---

## ♿ Accesibilidad

Esta plantilla cumple con **WCAG 2.1 Level AA**:

- ✅ Contraste de colores adecuado
- ✅ Navegación por teclado completa
- ✅ Etiquetas ARIA implementadas
- ✅ HTML semántico
- ✅ Focus visible en elementos interactivos
- ✅ Textos alternativos en imágenes

### Testing de Accesibilidad

Usa estas herramientas:
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Lighthouse (Chrome DevTools)

---

## 🌐 SEO - Optimización para Motores de Búsqueda

### Meta Tags (index.html, líneas 10-30)

```html
<!-- Personaliza estos campos -->
<title>Tu Negocio | Soluciones Profesionales</title>
<meta name="description" content="Tu descripción aquí">
<meta name="keywords" content="palabra1, palabra2, palabra3">
```

### Open Graph (para redes sociales)

```html
<meta property="og:title" content="Tu título">
<meta property="og:description" content="Tu descripción">
<meta property="og:image" content="URL-de-tu-imagen.jpg">
```

### Checklist SEO

- ✅ Títulos únicos y descriptivos
- ✅ Meta descripción (150-160 caracteres)
- ✅ URLs amigables
- ✅ Etiquetas de encabezado (H1-H6) jerárquicas
- ✅ Imágenes con atributo `alt`
- ✅ Sitemap.xml (generar después del deploy)
- ✅ robots.txt

---

## 📊 Analytics (Opcional)

### Google Analytics 4

Descomenta el código en `index.html` (línea 584):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Reemplaza `G-XXXXXXXXXX` con tu ID de medición.

---

## 🚀 Despliegue

### Hosting Gratuito Recomendado

1. **[Netlify](https://www.netlify.com/)** (Recomendado)
   - Arrastrar y soltar
   - HTTPS automático
   - CDN global

2. **[Vercel](https://vercel.com/)**
   - Deploy con Git
   - Optimización automática

3. **[GitHub Pages](https://pages.github.com/)**
   - Hosting gratuito desde repositorio
   - Ideal para proyectos pequeños

### Pasos básicos (Netlify):

```bash
# 1. Crear cuenta en Netlify
# 2. Arrastrar carpeta del proyecto
# 3. ¡Listo! Tu sitio está online
```

---

## 🔧 Solución de Problemas

### El menú móvil no funciona
- ✅ Verifica que `main.js` esté cargado
- ✅ Comprueba la consola del navegador (F12)

### Los estilos no se aplican
- ✅ Verifica las rutas de los archivos CSS
- ✅ Limpia la caché del navegador (Ctrl+Shift+R)

### El formulario no envía
- ✅ Configura el endpoint en `main.js` (línea 261)
- ✅ Verifica CORS si usas API externa

---

## 📚 Recursos Adicionales

### Imágenes Gratuitas
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)

### Iconos
- [Font Awesome](https://fontawesome.com/)
- [Heroicons](https://heroicons.com/)
- [Feather Icons](https://feathericons.com/)

### Paletas de Colores
- [Coolors](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)
- [Color Hunt](https://colorhunt.co/)

---

## 📄 Licencia

Plantilla de uso libre para proyectos comerciales y personales.
Atribución apreciada pero no requerida.

---

## 💬 Soporte

¿Necesitas ayuda? Opciones:

1. **Documentación inline** - Revisa los comentarios en el código
2. **Validación** - Usa [W3C Validator](https://validator.w3.org/)
3. **Comunidad** - Stack Overflow para preguntas técnicas

---

## 🎓 Próximos Pasos

1. ✅ Personaliza colores en `theme-config.css`
2. ✅ Actualiza contenido en `index.html`
3. ✅ Configura formulario de contacto
4. ✅ Agrega tus imágenes
5. ✅ Configura SEO y meta tags
6. ✅ Prueba en diferentes dispositivos
7. ✅ Deploy a producción
8. ✅ Configura Analytics

---

**¡Éxito con tu proyecto! 🚀**

*Plantilla desarrollada siguiendo principios SOLID, DRY y mejores prácticas de la industria.*
