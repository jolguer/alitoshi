# ALITOSHI — Muebles Plegables de Pared

Landing page premium para ALITOSHI, marca ecuatoriana de escritorios plegables de pared.

🌐 **Dominio:** [alitoshi.com](https://alitoshi.com)

## Descripción

ALITOSHI diseña y fabrica muebles plegables de pared que transforman cualquier espacio. Un escritorio que se convierte en decoración en segundos.

## Características de la Landing

- **Configurador dinámico** — Selección de monitores (1 o 2), tamaño (22"–32") y color del tablero (5 opciones)
- **Precio en tiempo real** — Se actualiza según la configuración elegida
- **Animaciones Canvas** — Videos animados del producto abriéndose y cerrándose
- **Rastreo de pedidos** — Sistema de seguimiento con barra de progreso visual
- **Checkout simulado** — Modal tipo Stripe en modo test
- **Responsive** — Optimizado para móvil y escritorio
- **FAQ interactivo** — Acordeón con preguntas frecuentes

## Stack Técnico

- HTML5 / CSS3 / JavaScript (Vanilla)
- Google Fonts (Inter)
- Canvas API (animaciones de producto)
- Diseño responsive mobile-first

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Blanco Hueso | `#FAFAF7` | Fondo principal |
| Casi Negro | `#0A0A0A` | Texto principal |
| Gris | `#6B6B6B` | Texto secundario |
| Negro Profundo | `#1A1A1A` | Botones / Acento |
| Borde Sutil | `#E5E5E0` | Bordes y separadores |
| WhatsApp | `#25D366` | Botón WhatsApp |

## Colores del Tablero

| Color | Hex | Ajuste |
|-------|-----|--------|
| Negro Mate | `#1A1A1A` | Incluido |
| Blanco Nieve | `#F0EDE8` | Incluido |
| Roble Natural | `#C4A882` | +$15 |
| Nogal Oscuro | `#5C4033` | +$15 |
| Gris Cemento | `#8E8E8E` | +$10 |

## Tabla de Precios

| Configuración | Precio Base | Ajuste Tamaño | Rango Total |
|---------------|-------------|---------------|-------------|
| 1 monitor 22" | $199 | +$0 | **$199** |
| 1 monitor 24" | $199 | +$20 | **$219** |
| 1 monitor 27" | $199 | +$40 | **$239** |
| 1 monitor 32" | $199 | +$70 | **$269** |
| 2 monitores 22" | $249 | +$0 | **$249** |
| 2 monitores 24" | $249 | +$40 | **$289** |
| 2 monitores 27" | $249 | +$80 | **$329** |
| 2 monitores 32" | $249 | +$140 | **$389** |

*Los colores premium (Roble, Nogal, Gris) agregan $10–$15 adicionales.*

## Pedidos de Prueba (Rastreo)

| Código | Cliente | Estado | Ciudad |
|--------|---------|--------|--------|
| `ALI-2026-00123` | María Fernández | Enviado | Quito |
| `ALI-2026-00124` | Carlos Mendoza | En Producción | Guayaquil |
| `ALI-2026-00125` | Ana Paredes | Confirmado | Cuenca |

## Despliegue

El archivo `index.html` es autocontenido. Opciones de hosting:

```bash
# Netlify
netlify deploy --prod --dir=.

# Vercel
vercel --prod

# GitHub Pages
# Activar en Settings > Pages > Branch: main
```

## Estructura del Proyecto

```
alitoshi/
├── index.html          # Landing page completa
├── data/
│   └── orders.json     # Pedidos de ejemplo (referencia)
├── docs/
│   └── CHANGELOG.md    # Historial de cambios
├── assets/
│   └── .gitkeep        # Para futuros assets (videos, imágenes)
└── README.md
```

## Licencia

© 2026 ALITOSHI. Todos los derechos reservados.
