# ⚡ GUÍA DE INICIO RÁPIDO - 5 MINUTOS

## 🎯 Objetivo
Tener tu sitio web personalizado y funcionando en menos de 5 minutos.

---

## 📁 PASO 1: Organiza los archivos (30 segundos)

Crea una carpeta para tu proyecto y organiza así:

```
mi-sitio-web/
├── index.html
├── theme-config.css
├── main.css
├── responsive.css
└── main.js
```

✅ **Todos estos archivos están incluidos en el paquete**

---

## 🎨 PASO 2: Personaliza los Colores (1 minuto)

Abre `theme-config.css` y cambia estas 3 líneas (13-15):

```css
--color-primary: #2563eb;      /* 👈 Tu color principal */
--color-secondary: #7c3aed;    /* 👈 Tu color de acento */
```

### 💡 ¿No sabes qué colores usar?

Visita [Coolors.co](https://coolors.co/), genera una paleta y copia los códigos hex.

**O usa uno de los 5 temas predefinidos** en el mismo archivo (línea 137+)

---

## ✏️ PASO 3: Cambia el Contenido (2 minutos)

Abre `index.html` y busca los comentarios `🔧 PERSONALIZAR:`

### Cambios Mínimos Esenciales:

1. **Nombre del negocio** (línea 60):
```html
<span>TuNegocio</span>  <!-- 👈 Cambia esto -->
```

2. **Título Hero** (línea 107):
```html
<h1 class="hero__title">
  Tu Título Aquí  <!-- 👈 Cambia esto -->
</h1>
```

3. **Información de contacto** (línea 461+):
- Dirección
- Email  
- Teléfono

---

## 👀 PASO 4: Vista Previa (30 segundos)

### Opción A: Doble click en `index.html`
- Se abrirá en tu navegador predeterminado

### Opción B: Live Server (Recomendado)
1. Instala [Visual Studio Code](https://code.visualstudio.com/)
2. Instala extensión "Live Server"
3. Click derecho en `index.html` → "Open with Live Server"

---

## 🚀 PASO 5: Publicar Online (1 minuto)

### Opción Más Fácil: [Netlify Drop](https://app.netlify.com/drop)

1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta de tu proyecto
3. ¡Listo! Tu sitio está online con una URL

### Otras opciones:
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

---

## ✅ CHECKLIST FINAL

Antes de publicar, verifica:

- [ ] Logo y nombre del negocio cambiados
- [ ] Colores de marca aplicados
- [ ] Información de contacto actualizada
- [ ] Al menos 3 servicios personalizados
- [ ] Imágenes reemplazadas (opcional pero recomendado)
- [ ] Meta tags SEO actualizados (título, descripción)
- [ ] Probado en móvil y desktop

---

## 🎓 PERSONALIZACIONES ADICIONALES (Opcional)

### Cambiar Imágenes

Reemplaza las URLs de Unsplash con tus propias imágenes:

```html
<!-- Busca esto en index.html -->
<img src="https://images.unsplash.com/..." alt="...">

<!-- Cámbialo por -->
<img src="ruta/a/tu/imagen.jpg" alt="...">
```

### Añadir/Quitar Servicios

En `index.html`, busca `<article class="service-card">` y:
- Duplica para añadir
- Elimina para quitar

### Conectar Formulario de Contacto

Usa [Formspree](https://formspree.io/) (gratis):

1. Crea cuenta en Formspree
2. Crea un nuevo form
3. Copia el endpoint
4. Pégalo en `main.js` línea 266

---

## 🆘 PROBLEMAS COMUNES

### "Los estilos no se ven"
✅ Verifica que todos los archivos CSS estén en la misma carpeta que `index.html`

### "El menú móvil no funciona"
✅ Verifica que `main.js` esté en la misma carpeta

### "Las imágenes no cargan"
✅ Verifica la ruta de las imágenes o usa URLs completas

---

## 📚 RECURSOS ÚTILES

### Imágenes Gratis
- [Unsplash](https://unsplash.com/) - Fotos profesionales
- [Pexels](https://www.pexels.com/) - Stock photos gratis

### Paletas de Color
- [Coolors](https://coolors.co/) - Generador de paletas
- [Adobe Color](https://color.adobe.com/) - Rueda de colores

### Iconos
- [Font Awesome](https://fontawesome.com/) - Miles de iconos
- [Heroicons](https://heroicons.com/) - Iconos SVG

---

## 💡 TIPS PRO

1. **Optimiza imágenes**: Usa [TinyPNG](https://tinypng.com/) antes de subirlas
2. **Testea en móvil**: Abre Chrome DevTools (F12) → Toggle device toolbar
3. **Verifica SEO**: Usa [Lighthouse](https://developers.google.com/web/tools/lighthouse) en Chrome

---

## 🎯 Próximo Paso

Una vez que tengas lo básico funcionando:

👉 Lee el archivo `README.md` completo para personalizaciones avanzadas

---

**¿Listo? ¡Empieza con el PASO 1!** 🚀

*Tiempo estimado total: 5 minutos*
*Nivel de dificultad: Principiante ⭐*
