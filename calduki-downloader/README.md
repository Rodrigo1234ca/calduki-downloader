# Calduki Downloader — despliegue Vercel + Render

## 1. Backend en Render
1. Sube esta carpeta a un repositorio de GitHub (con `frontend` y `backend` en la raiz).
2. Render → New → Web Service → conecta el repositorio.
3. Root Directory: `backend`; Runtime: `Docker`; Dockerfile Path: `./Dockerfile` (relativo al root directory).
4. Añade variable de entorno `FRONTEND_ORIGIN` con la URL exacta de Vercel, por ejemplo `https://calduki-downloader.vercel.app` (sin `/` final). Si aún no la sabes, puedes establecerla después.
5. Despliega y abre `https://TU-SERVICIO.onrender.com/health` para comprobar que devuelve `{ "ok": true }`.
6. Render puede requerir un plan de pago, suspender servicios inactivos o limitar recursos: revisa sus precios y límites vigentes.

## 2. Frontend en Vercel
1. Edita `frontend/config.js`: sustituye `https://REEMPLAZAR.onrender.com` por la URL real de Render, sin barra final.
2. Sube el cambio a GitHub.
3. Vercel → Add New → Project → importa el mismo repositorio.
4. Root Directory: `frontend`; Framework Preset: `Other`; Build Command: vacío; Output Directory: vacío.
5. Despliega y copia la URL real de Vercel a `FRONTEND_ORIGIN` en Render. Guarda para reiniciar/desplegar de nuevo el backend.
6. Prueba con un vídeo propio o con permiso explícito de descarga. Acepta la casilla y pulsa Descargar.

## Limitaciones
- Spotify no permite extraer sus pistas mediante su API oficial.
- Los vídeos protegidos, privados, con restricciones o sin derechos de descarga pueden fallar.
- El backend usa yt-dlp y FFmpeg; cambios en las plataformas pueden romper compatibilidad.
- Este ejemplo no tiene usuarios, cola persistente, almacenamiento ni protección antiabuso suficiente para alto tráfico. Antes de hacerlo público a gran escala, añade autenticación, cola, cuotas y controles de seguridad.
- Los archivos se generan temporalmente y se eliminan después de enviarse. La conversión tiene un límite de 180 segundos y tamaño objetivo de 100 MB.
- Evita usarlo para descargar material sin autorización.
