# Portafolio estático para GitHub Pages

Sitio ligero en HTML, CSS y JavaScript listo para desplegarse en GitHub Pages. Incluye modo claro/oscuro, animaciones de scroll y secciones: hero, sobre mí, proyectos, habilidades y contacto.

## Estructura
- `index.html`: contenido principal.
- `styles.css`: estilos y tema claro/oscuro.
- `script.js`: interacción mínima (toggle de tema, animaciones, año dinámico).
- `.github/copilot-instructions.md`: checklist de trabajo.

## Cómo usar
1. Abre `index.html` en tu navegador para una vista local.
2. Personaliza el contenido:
   - Cambia nombre, descripción y métricas en la sección Hero.
   - Actualiza los textos de "Sobre mí", "Proyectos", "Habilidades" y enlaces sociales en el footer.
   - Ajusta el correo y enlace de agenda en la sección Contacto.
   - Si quieres otros colores o tipografía, modifica las variables en `styles.css`.
3. Opcional: añade imágenes y reemplaza los enlaces de GitHub/LinkedIn.

## Despliegue en GitHub Pages
1. Crea un repo y sube estos archivos a la rama `main`.
2. En GitHub, ve a **Settings → Pages**.
3. En **Source**, elige `Deploy from a branch` y selecciona rama `main`, carpeta `/root`.
4. Guarda. En unos minutos tendrás la URL pública.

## Notas
- No requiere dependencias ni build; solo archivos estáticos.
- El modo oscuro respeta la preferencia del sistema y se puede alternar con el botón en el header.
- Las animaciones se activan al hacer scroll usando `IntersectionObserver`.
