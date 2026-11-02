"""Renderiza publicaciones de MichiGuau.pet desde un JSON.

Uso:
    python3 agente/motor/render.py publicaciones/AAAA-MM-DD-tema/posts.json

Por cada elemento de "posts" genera <id>.jpg (1080x1350, JPEG para la API de
Instagram) en la misma carpeta del JSON, más _hoja.png con todas juntas para
revisarlas de un vistazo. Imprime advertencias de texto que no cabe.
"""
import json
import os
import sys
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

MOTOR = Path(__file__).resolve().parent
PLANTILLA = (MOTOR / "plantilla.html").as_uri()


def main(json_path: str) -> int:
    src = Path(json_path).resolve()
    data = json.loads(src.read_text(encoding="utf-8"))
    out = src.parent
    posts = data["posts"]
    problemas = 0
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for post in posts:
            page = browser.new_page(viewport={"width": 1080, "height": 1350})
            page.add_init_script(f"window.POST = {json.dumps(post, ensure_ascii=False)};")
            page.goto(PLANTILLA)
            page.wait_for_function("window.READY === true")
            page.wait_for_timeout(200)
            png = out / f"{post['id']}.png"
            page.locator("#post").screenshot(path=str(png))
            for w in page.evaluate("window.WARN"):
                problemas += 1
                print(f"ADVERTENCIA [{post['id']}]: {w}")
            page.close()
            Image.open(png).convert("RGB").save(out / f"{post['id']}.jpg", "JPEG", quality=92)
            png.unlink()
            print(f"ok {post['id']}.jpg")
        browser.close()
    # Hoja de revisión
    ims = [Image.open(out / f"{p['id']}.jpg").resize((360, 450)) for p in posts]
    cols = min(3, len(ims))
    rows = (len(ims) + cols - 1) // cols
    hoja = Image.new("RGB", (360 * cols, 450 * rows), "white")
    for i, im in enumerate(ims):
        hoja.paste(im, ((i % cols) * 360, (i // cols) * 450))
    hoja.save(out / "_hoja.png")
    print(f"hoja de revisión: {out / '_hoja.png'}")
    return 1 if problemas else 0


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(2)
    sys.exit(main(sys.argv[1]))
