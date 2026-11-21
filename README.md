# Calduki Downloader — Carbon v2

Frontend estático para Vercel y API Node/yt-dlp/FFmpeg para Render.

## Instalación

1. Sube las carpetas `frontend` y `backend` a tu repositorio GitHub.
2. En **Render**, servicio Web con Docker, Root Directory `backend`, Dockerfile `./Dockerfile`.
3. En Render → Environment, configura `FRONTEND_ORIGIN=https://calduki-downloader-frontend.vercel.app` (sustituye por tu dominio real, sin barra final).
4. En **Vercel**, importa el mismo repositorio, Root Directory `frontend`, Framework Preset `Other`.
5. En `frontend/config.js`, cambia `CALDUKI_API_URL` si tu API Render tiene otra URL.
6. Despliega ambos servicios y prueba `/health` en Render.

## Funciones

- Diseño negro carbón, adaptable a móviles.
- Selección MP3/MP4 y calidad (MP3 alta/media/ligera, MP4 1080p/720p/480p/360p).
- Descargas asíncronas con progreso aproximado, velocidad y ETA; botón de guardar y cancelar.
- Trabajos limitados a 2 concurrentes; caducan y limpian sus archivos a los 15 minutos.
- Límite de tamaño por archivo y tiempo máximo de procesamiento.
- Lista restringida de dominios para evitar usar el servidor como proxy abierto.

## Limitaciones

El progreso es el de yt-dlp y puede retroceder o detenerse temporalmente durante la mezcla/conversión. El botón de guardar se muestra al finalizar; los archivos no se transmiten progresivamente al navegador. Los archivos desaparecen cuando expira el trabajo o Render reinicia la instancia. El almacenamiento temporal y los recursos de Render limitan tamaño, concurrencia y tiempo. En despliegues con varias instancias los trabajos en memoria requieren almacenamiento compartido/cola externa.

Algunas plataformas pueden requerir autenticación, bloquear IP de hosting o usar DRM. No hay soporte para descargar canciones de Spotify. No se deben subir cookies personales a un servidor público. Solo descarga contenido sobre el que tengas derechos o autorización.

## Configuración opcional

- `MAX_ACTIVE_JOBS` (por defecto 2)
- `MAX_FILE_MB` (por defecto 150)
- `JOB_TIMEOUT_SECONDS` (por defecto 300)
- `PORT` (Render lo configura automáticamente)
