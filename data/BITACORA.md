# Mica App - Bitácora de Desarrollo

## Registro de Avances

---

### 2026-02-02 | V1.0 MVP - Regalo Inicial

**Estado:** Completado

#### Decisiones de Diseño

**Paleta de colores elegida:**
| Color | Hex | Uso |
|-------|-----|-----|
| Coral | `#FF6B6B` | Botón principal, acentos |
| Coral Light | `#FEC5BB` | Fondo gradiente |
| Lavender | `#E2D1F9` | Fondo gradiente, botón secundario |
| Lavender Dark | `#B8A9C9` | Hover estados |
| Cream | `#FFF9F5` | Textos claros |
| Text Dark | `#2D2D2D` | Textos oscuros |

**Estilo visual:**
- Glassmorphism sutil (tarjetas con blur)
- Bordes muy redondeados (24px cards, full en botones)
- Sombras suaves
- Animaciones: float, pulse, fade-in, slide-up

#### Stack Implementado

```
Frontend:
├── React 18 + TypeScript
├── Vite 7.3.1 (build tool)
├── Tailwind CSS v4 (@tailwindcss/vite)
└── PWA nativo (manifest + service worker manual)

Infraestructura:
├── Docker (Dockerfile multi-stage)
├── Nginx (serving estático)
└── docker-compose.yml
```

#### Estructura de Archivos Creada

```
relationship-app/
├── data/
│   ├── ROADMAP.md
│   ├── BITACORA.md          # Este archivo
│   └── infra-minipc-mapeo.md
├── frontend/
│   ├── public/
│   │   ├── manifest.json
│   │   ├── sw.js
│   │   ├── heart.svg
│   │   ├── icon.svg
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   └── apple-touch-icon.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── ActionButton.tsx
│   │   │   ├── HeartIcon.tsx
│   │   │   └── PhraseCard.tsx
│   │   ├── data/
│   │   │   └── phrases.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── scripts/
│   │   └── generate-icons.cjs
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
└── docker-compose.yml
```

#### Funcionalidades Implementadas

- [x] Botón "Dame un abrazo" - muestra frase aleatoria de cualquier categoría
- [x] Botón "Estoy bajón" - muestra frase de confort específicamente
- [x] Tarjeta con animación slide-up al mostrar frase
- [x] Emoji según categoría de frase
- [x] Botón "Otro más" para nueva frase
- [x] Botón "Volver" para resetear
- [x] PWA instalable (manifest.json)
- [x] Service Worker para offline
- [x] Iconos generados (192, 512, apple-touch)
- [x] Build de producción funcionando
- [x] Dockerfile listo para deploy

#### Frases Iniciales

Total: **30 frases** distribuidas en:
- `comfort` (7) - Para momentos tristes
- `love` (8) - Expresiones de cariño
- `motivation` (7) - Para dar ánimo
- `reminder` (8) - Pequeños gestos/recordatorios

**Archivo:** `frontend/src/data/phrases.ts`

#### Comandos Útiles

```bash
# Desarrollo
cd frontend && npm run dev     # http://localhost:5173

# Build
cd frontend && npm run build   # Genera dist/

# Docker local
docker-compose up -d --build   # http://localhost:3000

# Regenerar iconos
cd frontend && node scripts/generate-icons.cjs
```

#### Pendientes para V1.5

- [ ] Testing en iOS real
- [ ] Deploy a mini PC
- [ ] Configurar GitHub Actions
- [ ] Agregar más frases personalizadas
- [ ] Galería de fotos (siguiente fase)

---

### Próxima Sesión

**Objetivo:** Deploy a producción en mini PC

**Tareas:**
1. Push a GitHub
2. Configurar GitHub Actions básico
3. Deploy con Docker en mini PC
4. Probar instalación PWA en iOS
5. Ajustes de UX según feedback

---

## Notas Técnicas

### PWA en iOS

Para que funcione correctamente en iOS:
- `apple-mobile-web-app-capable: yes`
- `apple-mobile-web-app-status-bar-style: black-translucent`
- `apple-touch-icon.png` de 180x180
- El service worker tiene limitaciones en iOS Safari

### Tailwind v4

Se usa la nueva sintaxis de Tailwind v4:
- `@import "tailwindcss"` en vez de las directivas @tailwind
- `@theme` para variables CSS custom
- Plugin `@tailwindcss/vite` integrado en vite.config.ts

---

**Última actualización:** 02/Feb/2026
**Versión actual:** V1.0 MVP
