# 🖥️ Infraestructura Mini PC - Mapeo Completo

**Fecha:** 02 de Febrero 2026  
**Host:** wcaceres  
**OS:** Ubuntu Server  

---

## 📦 Hardware - Discos Físicos

### 1. NVMe0n1 (468 GB) - Disco Principal del Sistema
**Dispositivo:** `/dev/nvme0n1`  
**Tipo:** NVMe SSD (más rápido)  
**Uso actual:** 12 GB / 468 GB (3%)

#### Particiones:
- **nvme0n1p1** (1.1 GB)
  - Sistema de archivos: VFAT (FAT32)
  - Montado en: `/boot/efi`
  - Propósito: Partición de arranque UEFI

- **nvme0n1p2** (468 GB)
  - Sistema de archivos: ext4
  - Montado en: `/` (raíz del sistema)
  - UUID: `f575c9d5-3030-4dbe-84c3-48505d06d6db`
  - Propósito: Sistema operativo completo

**Contenido clave:**
```
/var/lib/docker/          → 1.9 GB (imágenes y contenedores Docker)
/home/washington/         → Directorio de usuario (prácticamente vacío)
/etc/                     → Configuraciones del sistema
```

---

### 2. SDA (440 GB) - SSD Interno de Datos
**Dispositivo:** `/dev/sda1`  
**Tipo:** SSD SATA interno  
**Label:** `data`  
**Uso actual:** 4.3 GB / 440 GB (1%)  
**Montado en:** `/data`  
**UUID:** `f9f096fd-82b9-4d7b-9124-7b4bd2ddef46`

**Contenido actual:**
```
/data/
├── docker/                          → Volúmenes persistentes de Docker
│   └── n8n/
│       └── postgres_data/          → Base de datos PostgreSQL de n8n
├── gym-progress-tracker/           → Proyecto: Tracker de gimnasio
├── reels/                          → 14 GB de videos (montado en n8n)
│                                     ⚠️ A MIGRAR AL USB en el futuro
└── lost+found/                     → Directorio de recuperación ext4
```

**Propósito:**
- Almacenamiento de proyectos activos
- Volúmenes de Docker persistentes
- Datos que requieren acceso rápido

---

### 3. SDB (3.6 TB) - SSD Externo USB
**Dispositivo:** `/dev/sdb1`  
**Tipo:** SSD externo conectado por USB  
**Label:** `PATROL_STORAGE`  
**Uso actual:** 1.3 MB / 3.6 TB (0%)  
**Montado en:** `/mnt/patrol-storage`  
**UUID:** `1135f1f5-9f2c-45d3-8d8b-16fe8359aa59`  
**Opción de montaje:** `nofail` (el sistema arranca aunque no esté conectado)

**Contenido actual:**
```
/mnt/patrol-storage/
├── backups/              → Carpeta para backups (vacía)
├── images/               → Carpeta para imágenes (vacía)
├── logs/                 → Carpeta para logs (vacía)
└── lost+found/           → Directorio de recuperación ext4
```

**Propósito planificado:**
- Backups automáticos (pendiente de configurar)
- Almacenamiento de archivos grandes
- Destino futuro de la carpeta `/data/reels/`
- Archivo histórico

---

## 🐳 Docker - Servicios Corriendo

**Docker Root:** `/var/lib/docker` (en NVMe)  
**Storage Driver:** overlayfs  
**Tamaño total:** 1.9 GB

### Contenedores activos:

#### 1. n8n (Automation Tool)
- **Container ID:** `52d755296346`
- **Imagen:** `n8nio/n8n:latest`
- **Estado:** Running (21 horas)
- **Puerto:** `127.0.0.1:5678->5678/tcp`
- **Montajes:**
  - `/data/reels` → `/reels` (solo lectura)
  - (posiblemente otros volúmenes)

#### 2. PostgreSQL 16
- **Container ID:** `82a07cd4867b`
- **Imagen:** `postgres:16`
- **Estado:** Running, Healthy (21 horas)
- **Puerto:** `5432` (interno, no expuesto)
- **Montajes:**
  - `/data/docker/n8n/postgres_data` → `/var/lib/postgresql/data`

---

## 🗺️ Mapa Visual de Almacenamiento

```
┌─────────────────────────────────────────────────────────────┐
│  MINI PC - Ubuntu Server                                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ NVMe (468 GB) - RÁPIDO                                │  │
│  │ /dev/nvme0n1                                          │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │ /boot/efi (1.1 GB)          - Arranque UEFI          │  │
│  │ / (468 GB)                  - Sistema Operativo      │  │
│  │   ├── /var/lib/docker/      - Docker (1.9 GB)       │  │
│  │   ├── /home/washington/     - Usuario (vacío)       │  │
│  │   └── /etc/                 - Configs               │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ SSD Interno (440 GB) - RÁPIDO                        │  │
│  │ /dev/sda1 → /data                                    │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │ /data/gym-progress-tracker/ - Proyecto activo        │  │
│  │ /data/reels/               - Videos (14 GB) ⚠️      │  │
│  │ /data/docker/n8n/          - DB PostgreSQL           │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ USB Externo (3.6 TB) - GRANDE pero más LENTO         │  │
│  │ /dev/sdb1 → /mnt/patrol-storage                     │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │ /mnt/patrol-storage/backups/   - Vacío (pendiente)  │  │
│  │ /mnt/patrol-storage/images/    - Vacío              │  │
│  │ /mnt/patrol-storage/logs/      - Vacío              │  │
│  │                                                       │  │
│  │ 💡 Destino futuro: /data/reels/                      │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 Montajes Automáticos (/etc/fstab)

```bash
# NVMe - Sistema
UUID=f575c9d5-3030-4dbe-84c3-48505d06d6db  /          ext4  defaults     0  1
UUID=9E65-BAD7                              /boot/efi  vfat  defaults     0  1

# SSD Interno - Datos
UUID=f9f096fd-82b9-4d7b-9124-7b4bd2ddef46  /data      ext4  defaults     0  2

# USB Externo - Almacenamiento masivo
UUID=1135f1f5-9f2c-45d3-8d8b-16fe8359aa59  /mnt/patrol-storage  ext4  defaults,nofail  0  2

# Swap
/swap.img  none  swap  sw  0  0
```

**Nota sobre `nofail`:** El disco USB tiene la opción `nofail`, lo que significa que si se desconecta o falla, el sistema arrancará igual. Esto es bueno para evitar que el sistema se cuelgue en el arranque.

---

## 🎯 Guía Rápida para Nuevos Proyectos

### ¿Dónde ubicar cada tipo de proyecto?

#### 1. Proyectos de desarrollo activo
**Ubicación:** `/data/`  
**Razón:** SSD rápido, acceso frecuente  
**Ejemplo:**
```bash
mkdir /data/mi-nuevo-proyecto
cd /data/mi-nuevo-proyecto
```

#### 2. Datos de Docker persistentes
**Ubicación:** `/data/docker/nombre-servicio/`  
**Razón:** Mantener consistencia con n8n  
**Ejemplo:**
```bash
sudo mkdir -p /data/docker/mi-servicio/db_data
```

#### 3. Archivos grandes / Videos / Multimedia
**Ubicación actual:** `/data/` (temporal)  
**Ubicación futura:** `/mnt/patrol-storage/`  
**Razón:** Aprovechar el espacio de 3.6 TB  
**Ejemplo:**
```bash
mkdir /mnt/patrol-storage/media
```

#### 4. Backups
**Ubicación:** `/mnt/patrol-storage/backups/`  
**Razón:** Disco separado, redundancia  
**Ejemplo:**
```bash
# Backup manual rápido
tar -czf /mnt/patrol-storage/backups/proyecto-$(date +%Y%m%d).tar.gz /data/mi-proyecto/
```

#### 5. Logs históricos
**Ubicación:** `/mnt/patrol-storage/logs/`  
**Razón:** No llenar los SSDs rápidos con logs antiguos  

---

## ⚠️ Consideraciones Importantes

### Ventajas de tu setup actual:
✅ Sistema operativo en el disco más rápido (NVMe)  
✅ Proyectos activos en SSD rápido interno  
✅ Disco USB gigante para expansión futura  
✅ Separación lógica entre sistema, datos y almacenamiento masivo  

### Riesgos actuales:
⚠️ **Sin backups automáticos** - Si `/data/` falla, pierdes proyectos  
⚠️ **Disco USB infrautilizado** - 3.6 TB casi vacíos  
⚠️ **Carpeta reels (14 GB)** atada a automatización en disco interno  
⚠️ **Sin monitoreo de salud de discos** - No sabrás si un disco está fallando  

### Pendientes para el futuro:
🔜 Migrar `/data/reels/` → `/mnt/patrol-storage/media/reels/`  
🔜 Configurar backups automáticos diarios  
🔜 Implementar monitoreo SMART de discos  
🔜 Configurar rotación de logs al USB  

---

## 🚀 Comandos Útiles de Referencia

### Ver espacio en discos:
```bash
df -h                           # Espacio general
du -sh /data/*                  # Tamaño de carpetas en /data
du -sh /mnt/patrol-storage/*    # Tamaño en USB
```

### Ver salud de discos:
```bash
sudo smartctl -H /dev/nvme0n1   # Salud NVMe
sudo smartctl -H /dev/sda       # Salud SSD interno
sudo smartctl -H /dev/sdb       # Salud USB
```

### Docker:
```bash
sudo docker ps -a               # Contenedores
sudo docker volume ls           # Volúmenes
sudo du -sh /var/lib/docker/    # Espacio usado por Docker
```

### Verificar montajes:
```bash
lsblk -f                        # Vista general
mount | grep -E "data|patrol"   # Tus discos de datos
```

---

## 📝 Notas Finales

Este es tu setup actual. Está **bien estructurado** para un homelab/servidor personal:

- **Velocidad** donde la necesitas (proyectos activos en SSD)
- **Capacidad** disponible para crecer (3.6 TB USB)
- **Separación** lógica entre sistema y datos

Lo único que falta es **protección** (backups) y **monitoreo** (salud de discos).

---

**Última actualización:** 02/Feb/2026  
**Mantenido por:** Washington Cáceres
