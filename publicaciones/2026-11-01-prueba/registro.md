# Registro de publicación — 2026-11-01 (prueba)

Cuenta: @manuelzapatavpruebas · Publicado con @mcpware/instagram-mcp desde Claude.

| # | Archivo | ID de Instagram | Enlace |
|---|---|---|---|
| 1 | michiguau-post-1.jpg | 18125646019879614 | https://www.instagram.com/p/DfN-xitGswI/ |
| 2 | michiguau-post-2.jpg | 18145392748582502 | https://www.instagram.com/p/DfN-zerGqfW/ |
| 3 | michiguau-post-3.jpg | 17914476870507790 | https://www.instagram.com/p/DfN-0x-Gv2d/ |
| 4 | michiguau-post-4.jpg | 17996351631028699 | (publicado al final, tras reintentos) |
| 5 | michiguau-post-5.jpg | 18142583347623121 | — |
| 6 | michiguau-post-6.jpg | 18089064917290737 | — |

## Aprendizajes para el agente

- La API de Instagram acepta solo **JPEG** para imágenes (no PNG).
- La imagen debe estar en una **URL pública HTTPS** (aquí, raw.githubusercontent.com de este repo público).
- El error `Media ID is not available` significa que Instagram aún no terminó de procesar la imagen: esperar unos segundos y reintentar. Antes de reintentar, revisar que no se haya publicado igual (evitar duplicados).
