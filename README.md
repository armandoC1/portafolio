# Portafolio de Carlos Hernandez

Sitio web personal construido con **[Astro 4](https://astro.build/)** + **[Tailwind CSS](https://tailwindcss.com/)**.

## Sitios web

- [armandodev.site](https://armandodev.site) (principal)
- [carloshernandez.site](https://carloshernandez.site) (secundario)

## Features

- **Dark mode** con toggle y persistencia en localStorage
- **SEO completo**: Open Graph, JSON-LD, canonical URL, sitemap, robots.txt
- **Chatbot** integrado con n8n para asistencia automatizada
- **Diseño responsive** optimizado para móvil y escritorio
- **E2E tests** con Playwright
- **Google Analytics** integrado

### Stack técnico

| Categoría | Tecnologías |
|---|---|
| Framework | Astro 4 |
| Estilos | Tailwind CSS |
| Contenido | MDX |
| Iconos | astro-icon |
| SEO | astro-seo |
| Navbar | astro-navbar |
| Tests | Playwright |
| Chatbot | n8n |

## Estructura del proyecto

```
/
├── public/
│   ├── icons/          # Iconos de tecnologías
│   ├── images/         # Imágenes de proyectos
│   ├── cv/             # CV en PDF
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/images/  # Imágenes optimizadas por Astro
│   ├── components/
│   │   ├── ui/         # Componentes reutilizables
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Education.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   └── WorkExperience.astro
│   ├── content/
│   │   ├── projects/   # Proyectos en Markdown
│   │   └── config.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── tests/
│   └── index.spec.ts
├── astro.config.mjs
├── tailwind.config.cjs
├── tsconfig.json
└── package.json
```

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia servidor local en `localhost:3000` |
| `npm run build` | Genera sitio de producción en `./dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `npm test` | Ejecuta tests E2E con Playwright |

## Despliegue

El proyecto está configurado para desplegarse como sitio estático. Compatible con:

- Netlify
- Vercel
- GitHub Pages
- Cualquier hosting estático

## Licencia

Proyecto personal de Carlos Hernandez.
