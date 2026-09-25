# ALITOSHI — Documento de Transferencia (Handoff)

Este documento resume todo lo necesario para que **cualquier asistente de IA** (ChatGPT, Claude, u otro) o desarrollador humano pueda continuar el mantenimiento y las mejoras del sitio web de ALITOSHI, incluyendo el flujo de control de versiones en GitHub y el despliegue al hosting.

---

## 1. Qué es este proyecto

**ALITOSHI** es una landing page para una marca ecuatoriana de escritorios plegables de pared (muebles que se transforman de cuadro decorativo a estación de trabajo). Es un sitio de una sola página (single-page), pensado para conversión: presentación del producto, configurador de precio dinámico, rastreo de pedidos, FAQ y checkout simulado.

- **Dominio en producción:** https://web.bursatil.ec
- **Repositorio:** https://github.com/jolguer/alitoshi
- **Hosting:** GitHub Pages (gratuito), con dominio personalizado vía Cloudflare DNS

---

## 2. Arquitectura técnica

**Todo el sitio es un único archivo HTML autocontenido: `index.html`.**

- HTML + CSS + JavaScript vanilla, sin frameworks, sin build step, sin `node_modules`.
- No hay backend. El "checkout" y el "rastreo de pedidos" son simulaciones en el propio JavaScript (datos hardcodeados en el archivo).
- Los videos del producto están **embebidos como base64** directamente dentro del HTML (`<video><source src="data:video/mp4;base64,...">`), por eso el archivo pesa varios cientos de KB a más de 1 MB. Esto es intencional: mantiene el sitio como un solo archivo desplegable sin necesidad de assets externos ni CDN.
- Paleta de colores, tipografía (Google Fonts "Inter") y toda la lógica del configurador de precio están dentro del mismo archivo (`<style>` y `<script>` inline).

### Por qué un solo archivo
Se eligió deliberadamente para simplicidad de despliegue: no hay pipeline de build, no hay dependencias que puedan romperse, y GitHub Pages puede servirlo directamente sin configuración.

---

## 3. Estructura del repositorio

```
alitoshi/
├── index.html          ← EL SITIO COMPLETO (HTML+CSS+JS+video embebido)
├── CNAME                ← contiene "web.bursatil.ec" (necesario para GitHub Pages)
├── README.md            ← descripción general del proyecto
├── docs/
│   ├── CHANGELOG.md      ← historial detallado de TODAS las versiones (v1.0.0 → actual)
│   └── HANDOFF.md        ← este documento
├── data/
│   └── orders.json       ← pedidos de ejemplo usados por el simulador de rastreo
└── assets/               ← reservado para futuros archivos (actualmente vacío)
```

**IMPORTANTE:** `data/orders.json` es solo referencia — los datos reales que usa el sitio están hardcodeados dentro del `<script>` de `index.html` (variable `orders`). Si se edita uno, hay que editar el otro para mantener consistencia.

---

## 4. Historial de versiones

El archivo `docs/CHANGELOG.md` documenta **cada versión desde v1.0.0 hasta la actual** con detalle de qué cambió y por qué. Antes de hacer cambios grandes, léelo para entender decisiones previas (por ejemplo: por qué se corrigió el mecanismo de apertura del mueble, por qué se pasó de animación Canvas a video 3D renderizado, etc.).

Cada versión está etiquetada con `git tag` (ej: `v14.0.0`, `v15.0.0`). Para ver todas:
```bash
git tag -l
git log --oneline --decorate
```

---

## 5. Flujo de trabajo: cómo hacer cambios y publicarlos

### 5.1 Clonar el repositorio
```bash
git clone https://github.com/jolguer/alitoshi.git
cd alitoshi
```

### 5.2 Hacer cambios
Edita `index.html` directamente. Es un solo archivo; usa `Ctrl+F` / búsqueda de texto para ubicar la sección relevante (el archivo tiene comentarios tipo `<!-- ════════ SECCIÓN ════════ -->` que delimitan cada bloque: NAVBAR, HERO, TRUST BAR, PROBLEM, SOLUTION, DESIGN, SPECS, TESTIMONIALS, CONFIGURATOR, ORDER TRACKING, FAQ, FOOTER).

### 5.3 Probar localmente
Como es un solo HTML sin backend, basta con abrirlo directamente en el navegador:
```bash
open index.html   # macOS
# o simplemente arrastrar el archivo a una pestaña del navegador
```

### 5.4 Confirmar cambios (commit)
```bash
git add -A
git commit -m "vX.Y.Z: descripción breve del cambio"
git tag -a vX.Y.Z -m "vX.Y.Z — descripción"
```
Sigue [versionado semántico](https://semver.org/lang/es/): incrementa el número mayor para cambios de diseño grandes, el menor para features nuevas, el parche para fixes pequeños.

**No olvides actualizar `docs/CHANGELOG.md`** con una entrada nueva antes de o junto con el commit — es la única fuente de verdad del historial narrativo del proyecto.

### 5.5 Subir a GitHub
```bash
git push origin main --tags
```

### 5.6 ⚠️ PASO CRÍTICO: forzar el rebuild de GitHub Pages

**Esto es el gotcha más importante de todo el proyecto.** Como `index.html` es grande (por el video embebido en base64), el webhook automático de GitHub Pages **a veces no dispara** el rebuild tras un push normal. Ya ocurrió más de una vez que el sitio quedó "atascado" mostrando una versión vieja aunque el commit correcto ya estaba en `main`.

**Siempre, después de cada push, verifica y fuerza el build manualmente:**

```bash
# 1. Verificar qué commit tiene desplegado Pages actualmente
curl -s -H "Authorization: token TU_GITHUB_TOKEN" \
  "https://api.github.com/repos/jolguer/alitoshi/pages/builds/latest" | python3 -m json.tool

# 2. Si el "commit" mostrado NO es tu último commit, forzar rebuild:
curl -s -X POST -H "Authorization: token TU_GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/jolguer/alitoshi/pages/builds"

# 3. Esperar ~30-40 segundos y volver a verificar con el paso 1
#    hasta que "status" sea "built" y el commit coincida.
```

Necesitas un **Personal Access Token** de GitHub con permiso `repo` para estos comandos (Settings → Developer settings → Personal access tokens → Generate new token classic, scope `repo`).

### 5.7 Verificar en producción
Una vez que el build API confirma `"status": "built"` con el commit correcto, visita https://web.bursatil.ec y haz un hard-refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`) para descartar caché del navegador.

---

## 6. Configuración de DNS / Hosting (ya configurado, referencia solamente)

- El hosting real es **GitHub Pages**, gratuito, servido desde la rama `main` del repo.
- El dominio `web.bursatil.ec` apunta a GitHub Pages vía un registro **CNAME en Cloudflare**:
  - Tipo: `CNAME`
  - Name: `web`
  - Target: `jolguer.github.io`
  - Proxy status: **DNS only (nube gris)** — NUNCA lo pongas en "Proxied" (nube naranja), porque el proxy de Cloudflare interfiere con el certificado SSL que GitHub Pages emite automáticamente vía Let's Encrypt, causando errores intermitentes.
- El archivo `CNAME` en la raíz del repo (contiene el texto `web.bursatil.ec`) es lo que le dice a GitHub Pages qué dominio personalizado servir. No lo borres.

Si en algún momento hay que migrar a otro hosting (cPanel, Hestia, Netlify, etc.), recuerda: es un solo archivo HTML autocontenido, así que la migración es tan simple como subir `index.html` al nuevo servidor — no requiere build ni configuración de servidor especial, solo servir archivos estáticos.

---

## 7. Sobre los videos del producto (contexto importante)

Los dos videos que se ven en el sitio (sección Hero y sección Solución) muestran el mecanismo del escritorio abriéndose y a una persona interactuando con él. **Estos videos NO son grabaciones reales** — son renders 3D generados con **Blender** (motor Eevee), creados programáticamente vía scripts de Python ejecutados en modo headless (`blender -b --python script.py`).

**Estos scripts de Blender NO están versionados en este repositorio** (viven en el entorno del asistente que los generó). Si necesitas regenerar o modificar los videos:

- Si usas Claude con acceso a un entorno con Blender instalable (`apt-get install blender`), puedes reconstruir un pipeline similar: geometría del mueble vía `bpy`/`bmesh`, materiales PBR (madera procedural, metal para los pistones de gas), personaje humano simplificado con cinemática directa (evitar el sistema `parent`/`matrix_parent_inverse` de Blender por bugs de sincronización del depsgraph — mejor calcular transformaciones mundiales directamente en Python), renderizado en lotes de frames PNG, luego ensamblado con `ffmpeg` y textos superpuestos vía el filtro `drawtext`.
- Alternativa más simple: pide al usuario un video real filmado del producto (mucho más rápido y creíble que renders 3D) y solo hace falta reemplazar el base64 embebido.
- Si no tienes acceso a Blender ni a video real, se puede volver a una animación Canvas/JavaScript más simple (2D), aunque el usuario ya expresó que prefiere el resultado fotorrealista 3D sobre el estilo "Canvas".

**Cómo reemplazar el video embebido** (una vez tengas el nuevo archivo `.mp4`):
```python
import base64, re
new_b64 = base64.b64encode(open('nuevo_video.mp4','rb').read()).decode('ascii')
content = open('index.html').read()
pattern = r'(<source src="data:video/mp4;base64,)([A-Za-z0-9+/=]+)("\s*type="video/mp4">)'
content = re.sub(pattern, lambda m: m.group(1) + new_b64 + m.group(3), content, count=1)  # count=2 si son ambos videos
open('index.html','w').write(content)
```

---

## 8. Detalles del producto y negocio (para mantener coherencia de contenido)

- **Precio base:** $199 (1 monitor) / $249 (2 monitores)
- **Ajustes por tamaño de monitor:** 22"=+$0, 24"=+$20, 27"=+$40, 32"=+$70
- **5 colores de tablero:** Negro Mate, Blanco Nieve (incluidos), Roble Natural (+$15), Nogal Oscuro (+$15), Gris Cemento (+$10)
- **Garantía:** 1 año (¡ojo! en versiones antiguas decía 2 años por error, ya corregido — no lo reviertas)
- **Especificaciones:** abierto 120×60cm, cerrado 15cm de profundidad, soporta 50kg, instalación 20-30min
- **Mecanismo real:** pistones de gas (no bisagras rígidas), anclados desde la parte superior trasera del marco hasta el borde frontal del tablero. La tapa queda embutida bajo el marco cuando está cerrada — visualmente es como un cuadro colgado en la pared.
- **Nunca incluir marcas de terceros** (el proyecto se inspiró visualmente en fotos de un producto de la competencia llamado "DropTop Desk"; el sitio jamás debe mencionar ese nombre ni ningún otro competidor).
- **Paleta de color de marca:** fondo `#FAFAF7`, texto `#0A0A0A`, gris secundario `#6B6B6B`, acento negro `#1A1A1A`, terracota `#C05A3A`, dorado `#D4A054`, salvia `#7A9A6D` — coherente con los tonos de madera del producto.
- **WhatsApp de contacto:** actualmente un número placeholder (`593999999999`) — reemplazar por el real cuando se entregue.

---

## 9. Checklist rápido para cualquier tarea futura

- [ ] Leer `docs/CHANGELOG.md` para entender contexto reciente
- [ ] Hacer el cambio en `index.html`
- [ ] Probar abriendo el archivo en el navegador
- [ ] Verificar que no haya errores de sintaxis JS: `node --check` sobre el contenido del `<script>`
- [ ] Verificar que no se haya introducido ninguna marca de terceros
- [ ] Actualizar `docs/CHANGELOG.md` con la nueva versión
- [ ] `git add -A && git commit -m "..." && git tag -a vX.Y.Z -m "..."`
- [ ] `git push origin main --tags`
- [ ] **Forzar rebuild de Pages manualmente vía API** (paso 5.6 — no te lo saltes)
- [ ] Verificar en https://web.bursatil.ec con hard-refresh

---

## 10. Contacto / dueño del proyecto

Repositorio propiedad de `jolguer` en GitHub. El dominio `bursatil.ec` está gestionado vía Cloudflare por el dueño del negocio.
