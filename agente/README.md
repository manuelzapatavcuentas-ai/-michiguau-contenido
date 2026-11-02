# Agente de contenido — MichiGuau.pet

Carpeta de trabajo del agente que crea y publica contenido en Instagram.

| Archivo | Para qué |
| --- | --- |
| `marca.md` | Guía de marca, tono de los textos y reglas de seguridad |
| `catalogo.json` | Productos y precios. **Única fuente de precios** que puede publicar el agente |
| `ejemplo-posts.json` | Ejemplo con los 5 tipos de publicación |
| `motor/plantilla.html` | Plantillas visuales: `producto`, `pov`, `educativo`, `aviso`, `fecha` |
| `motor/ilustraciones.js` | Ilustraciones originales estilo anime (perritos y gatitos) |
| `motor/render.py` | Convierte un `posts.json` en imágenes JPEG 1080×1350 |

Uso: `python3 agente/motor/render.py publicaciones/AAAA-MM-DD-tema/posts.json`

Para cambiar un precio, edita `catalogo.json`.
