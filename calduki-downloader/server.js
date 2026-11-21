import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const app=express();
const root=path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(root,'public')));
app.use(express.json());
app.post('/api/inspect', (req,res)=>{
  try {
    const u=new URL(req.body.url);
    if(!['http:','https:'].includes(u.protocol)) throw Error();
    const h=u.hostname.toLowerCase();
    const platform=h==='youtu.be'||h==='youtube.com'||h.endsWith('.youtube.com')?'YouTube':h==='soundcloud.com'||h.endsWith('.soundcloud.com')?'SoundCloud':h==='spotify.com'||h.endsWith('.spotify.com')?'Spotify':'Otra plataforma';
    res.json({platform, message: platform==='Spotify'?'Spotify no ofrece descarga MP3/MP4 mediante su API oficial.':'Enlace reconocido. Las descargas requieren una fuente autorizada o un archivo propio.',downloadAvailable:false});
  } catch {res.status(400).json({error:'Introduce una URL HTTP o HTTPS válida.'});}
});
app.listen(process.env.PORT||3000,()=>console.log('Calduki Downloader: http://localhost:'+(process.env.PORT||3000)));
