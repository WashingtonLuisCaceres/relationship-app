# Mica App - Roadmap

## 🎯 Visión del Proyecto

Una Progressive Web App (PWA) que comienza como un regalo de amor con frases reconfortantes y evoluciona hacia una aplicación completa de pareja con mensajería, galería compartida, calendario y notificaciones personalizadas.

---

## 🛠️ Stack Tecnológico

### Frontend
- **React** - Framework principal
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Styling mobile-first
- **Workbox** - Service Workers y PWA capabilities
- **Socket.io Client** - Real-time messaging

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **Socket.io** - WebSocket para mensajería en tiempo real
- **JWT** - Autenticación
- **Multer** - Upload de archivos (fotos, videos, audios)

### Base de Datos
- **MySQL** - Base de datos principal
- **Redis** - Caché y gestión de sesiones

### Storage
- **MinIO** o **Nginx file serving** - CDN para multimedia (fotos, videos, audios)
- Almacenamiento en mini PC

### Notificaciones
- **Firebase Cloud Messaging (FCM)** - Push notifications para iOS/Android
- **Web Push API** - Notificaciones web

### Infraestructura
- **Docker** - Containerización
- **Docker Compose** - Orquestación de servicios
- **GitHub Actions** - CI/CD
- **Nginx** - Reverse proxy y file server
- **Mini PC** - Servidor self-hosted
- **DNS Dinámico** - wcaceres.tplinkdbs.com
- **Let's Encrypt** - HTTPS (ya configurado)

---

## 📋 Fases de Desarrollo

### 🌟 V1.0 - MVP: Regalo Inicial (Semanas 1-2)

**Objetivo:** App funcional para que tu novia reciba frases de amor

**Features:**
- ✅ Botón principal "Dame un abrazo" / "Estoy bajón"
- ✅ Mostrar frase aleatoria de un pool de frases
- ✅ Frases almacenadas en JSON local
- ✅ Diseño mobile-first responsive
- ✅ PWA instalable en iOS
- ✅ Funciona offline
- ✅ Animaciones suaves al mostrar frases

**Stack V1.0:**
- Frontend: React + Vite + Tailwind
- Data: JSON estático en el repo
- Deploy: Docker en mini PC
- CI/CD: GitHub Actions básico

**Entregables:**
- App instalable en iPhone
- 10-20 frases iniciales
- Manifest.json configurado
- Service Worker básico

---

### 🖼️ V1.5 - Galería de Recuerdos (Semanas 3-4)

**Objetivo:** Agregar sección de fotos con recuerdos especiales

**Features:**
- ✅ Galería de fotos responsive
- ✅ Cada foto con descripción/recuerdo
- ✅ Navegación tipo swipe en mobile
- ✅ Lazy loading de imágenes
- ✅ Categorías de recuerdos (opcional)

**Stack V1.5:**
- CDN: Nginx serving images desde mini PC
- Imágenes optimizadas (WebP)
- Metadata en JSON

**Entregables:**
- CDN configurado
- 15-30 fotos iniciales
- Optimización de imágenes automática

---

### 👥 V2.0 - Sistema Multi-Usuario (Semanas 5-7)

**Objetivo:** Transformar en app de pareja compartida

**Features:**
- ✅ Sistema de autenticación (tú y ella)
- ✅ Perfiles de usuario
- ✅ Login/Logout
- ✅ Datos personalizados por usuario
- ✅ Dashboard personalizado

**Stack V2.0:**
- Backend: Node.js + Express
- Auth: JWT
- BD: MySQL
- Migración: JSON → MySQL

**Cambios Arquitectónicos:**
- API REST para frases
- Base de datos MySQL en Docker
- Redis para sesiones
- Backend API dockerizado

**Entregables:**
- API REST funcional
- Sistema de auth completo
- Migración de frases a BD
- Separación frontend/backend

---

### 💌 V2.5 - Mensajería Básica (Semanas 8-10)

**Objetivo:** Chat uno a uno entre ustedes

**Features:**
- ✅ Chat en tiempo real
- ✅ Mensajes de texto
- ✅ Historial de conversaciones
- ✅ Indicador "escribiendo..."
- ✅ Timestamp de mensajes
- ✅ Mensajes no leídos

**Stack V2.5:**
- Socket.io (server + client)
- WebSocket connection
- MySQL para persistencia de mensajes

**Entregables:**
- Chat funcional
- Mensajes persistentes en BD
- UI de chat mobile-friendly

---

### 📸 V3.0 - Mensajería Multimedia (Semanas 11-13)

**Objetivo:** Envío completo de multimedia

**Features:**
- ✅ Envío de fotos
- ✅ Envío de videos
- ✅ Envío de audios/notas de voz
- ✅ Previsualización de multimedia
- ✅ Compresión automática
- ✅ Descarga de archivos

**Stack V3.0:**
- Multer para uploads
- MinIO o storage local
- FFmpeg para procesamiento de video/audio
- Thumbnail generation

**Entregables:**
- Upload multimedia completo
- Storage optimizado
- Previews y thumbnails

---

### 🔔 V3.5 - Sistema de Notificaciones (Semanas 14-15)

**Objetivo:** Notificaciones push personalizadas

**Features:**
- ✅ Notificaciones de nuevos mensajes
- ✅ Botón "Te extraño" → notificación instantánea
- ✅ Notificaciones programadas/random
- ✅ Personalización de notificaciones
- ✅ Control de permisos

**Stack V3.5:**
- Firebase Cloud Messaging
- Web Push API
- Cron jobs para notificaciones programadas

**Entregables:**
- Push notifications en iOS
- Sistema de notificaciones custom
- Panel de control de notificaciones

---

### 📅 V4.0 - Calendario Compartido (Semanas 16-18)

**Objetivo:** Gestión de fechas importantes y eventos

**Features:**
- ✅ Calendario mensual/semanal
- ✅ Crear eventos compartidos
- ✅ Recordatorios de fechas especiales
- ✅ Aniversarios automáticos
- ✅ Notificaciones de eventos próximos
- ✅ Notas en eventos

**Stack V4.0:**
- Librería de calendario (ej: FullCalendar, React Big Calendar)
- Cron para recordatorios

**Entregables:**
- Calendario funcional
- CRUD de eventos
- Notificaciones de recordatorios

---

### 📝 V4.5 - Notas y Recordatorios (Semanas 19-20)

**Objetivo:** Sistema de notas compartidas y to-dos

**Features:**
- ✅ Notas compartidas
- ✅ To-do lists colaborativas
- ✅ Recordatorios personales y compartidos
- ✅ Categorías de notas
- ✅ Búsqueda de notas

**Stack V4.5:**
- Rich text editor (ej: Tiptap, Quill)
- Tags/categorías en BD

**Entregables:**
- Sistema de notas completo
- To-dos con checkboxes
- Búsqueda funcional

---

### ⚙️ V5.0 - Panel de Administración (Semanas 21-22)

**Objetivo:** Módulo para administrar contenido sin tocar código

**Features:**
- ✅ CRUD de frases desde la app
- ✅ Gestión de galería (subir/eliminar fotos)
- ✅ Configuración de notificaciones random
- ✅ Estadísticas de uso
- ✅ Backup/Export de datos

**Stack V5.0:**
- Admin panel con React
- Roles y permisos
- Dashboard con stats

**Entregables:**
- Panel admin completo
- Gestión de todo el contenido
- Sistema de backups

---

### 🎨 V5.5 - Personalización Avanzada (Semanas 23-24)

**Objetivo:** Customización de la experiencia

**Features:**
- ✅ Temas de color personalizables
- ✅ Modo oscuro/claro
- ✅ Personalización de notificaciones
- ✅ Configuración de privacidad
- ✅ Ajustes de la app

**Entregables:**
- Sistema de temas
- Preferencias guardadas por usuario
- UI de configuración

---

## 🚀 Funcionalidades Futuras (Post V5.5)

### Features Opcionales
- 🎯 Metas de pareja
- 🎁 Wishlist compartida
- 📊 Mood tracker conjunto
- 🎉 Celebración automática de hitos
- 🎮 Mini juegos de pareja
- 📖 Diario de pareja
- 🗺️ Mapa de lugares visitados juntos
- 💰 Gastos compartidos
- 🎵 Playlist compartida

---

## 📦 Estructura del Proyecto

```
mica-app/
├── frontend/                 # React PWA
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── pages/           # Páginas/Vistas
│   │   ├── services/        # API calls, socket
│   │   ├── hooks/           # Custom hooks
│   │   ├── utils/           # Utilidades
│   │   ├── assets/          # Assets estáticos
│   │   └── App.jsx
│   ├── public/
│   │   ├── manifest.json
│   │   └── sw.js           # Service Worker
│   ├── Dockerfile
│   └── package.json
│
├── backend/                  # Node.js API
│   ├── src/
│   │   ├── routes/          # Endpoints
│   │   ├── controllers/     # Lógica de negocio
│   │   ├── models/          # Modelos MySQL
│   │   ├── middleware/      # Auth, validación
│   │   ├── socket/          # Socket.io handlers
│   │   ├── services/        # Servicios (FCM, email, etc)
│   │   └── server.js
│   ├── Dockerfile
│   └── package.json
│
├── database/
│   ├── migrations/          # Migraciones MySQL
│   ├── seeds/               # Datos iniciales
│   └── schema.sql
│
├── cdn/                      # Almacenamiento multimedia
│   ├── images/
│   ├── videos/
│   └── audios/
│
├── nginx/
│   └── nginx.conf           # Configuración reverse proxy
│
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD
│
├── docker-compose.yml       # Orquestación completa
├── ROADMAP.md              # Este archivo
└── README.md
```

---

## 🔄 CI/CD Pipeline

### Workflow de Desarrollo
1. **Commit** a GitHub → rama `develop` o `main`
2. **GitHub Actions** ejecuta:
   - Tests (frontend y backend)
   - Build de React (producción)
   - Build de imágenes Docker
3. **Push** de imágenes a registry (o directamente a mini PC)
4. **Deploy** automático en mini PC
5. **Restart** de containers vía Docker Compose

### Entornos
- **Development:** Local
- **Production:** Mini PC (wcaceres.tplinkdbs.com)

---

## 📊 Esquema de Base de Datos (V2.0+)

### Tablas Principales

**users**
- id (PK)
- username
- email
- password_hash
- name
- avatar_url
- created_at
- updated_at

**phrases**
- id (PK)
- content (TEXT)
- category (enum: sad, love, motivational, etc)
- author_id (FK → users)
- created_at

**photos**
- id (PK)
- url
- caption
- uploaded_by (FK → users)
- created_at

**messages**
- id (PK)
- sender_id (FK → users)
- receiver_id (FK → users)
- content (TEXT)
- type (enum: text, image, video, audio)
- media_url
- read (boolean)
- created_at

**events** (calendario)
- id (PK)
- title
- description
- start_date
- end_date
- created_by (FK → users)
- is_shared (boolean)
- created_at

**notes**
- id (PK)
- title
- content (TEXT)
- created_by (FK → users)
- is_shared (boolean)
- created_at
- updated_at

**notifications**
- id (PK)
- user_id (FK → users)
- type
- title
- message
- scheduled_at
- sent_at
- read (boolean)

---

## 🔐 Seguridad

### Medidas Implementadas
- ✅ HTTPS obligatorio
- ✅ JWT con expiración
- ✅ Password hashing (bcrypt)
- ✅ Rate limiting en API
- ✅ Validación de inputs
- ✅ CORS configurado
- ✅ Headers de seguridad (Helmet.js)
- ✅ Sanitización de uploads
- ✅ Autenticación en Socket.io

---

## 📈 Métricas de Éxito

### V1.0
- [ ] App instalable en iOS
- [ ] Botón funcional con frases
- [ ] Funciona offline

### V2.0
- [ ] Sistema de login funcional
- [ ] 2 usuarios activos
- [ ] Datos separados por usuario

### V3.0
- [ ] Chat en tiempo real
- [ ] Envío de multimedia exitoso
- [ ] <100ms latencia en mensajes

### V4.0
- [ ] Calendario sincronizado
- [ ] Notificaciones push funcionando
- [ ] 90%+ tasa de entrega de notificaciones

### V5.0
- [ ] Panel admin completo
- [ ] 0 deploys manuales necesarios
- [ ] Backups automáticos

---

## 🎯 Próximos Pasos Inmediatos

1. ✅ Crear repositorio GitHub: `mica-app`
2. ✅ Definir colores y diseño inicial
3. ✅ Escribir 10-20 frases iniciales (30 escritas)
4. ✅ Setup proyecto React + Vite
5. ✅ Crear componente botón principal
6. ✅ Implementar lógica de frases aleatorias
7. ✅ Configurar PWA (manifest + service worker)
8. ✅ Dockerizar frontend
9. ⬜ Setup GitHub Actions
10. ⬜ Deploy a mini PC
11. ⬜ Testing en iOS

---

## 📝 Notas

- El proyecto es escalable y modular
- Cada versión es funcional y deployable
- Prioridad en mobile (iOS) desde V1.0
- Self-hosted completo en mini PC
- Open source (privado inicialmente)
- **Ver BITACORA.md para detalles de implementación**

---

**Última actualización:** 02/Feb/2026
**Versión actual:** V1.0 MVP (en desarrollo local)
**Próximo milestone:** Deploy a producción
