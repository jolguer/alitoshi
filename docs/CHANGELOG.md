# Changelog — ALITOSHI Landing Page

Todas las versiones notables de este proyecto están documentadas aquí.

---

## [v3.0.0] — 2026-09-18

### Agregado
- **Animaciones Canvas de producto** — Dos videos animados reemplazan los placeholders estáticos
  - Hero: escena de habitación con escritorio desplegándose, silla, laptop y taza de café
  - Solución: animación técnica con líneas de dimensión y badge descriptivo por fase
- Polyfill para `roundRect` (compatibilidad con navegadores antiguos)
- Anillo de progreso en el video de solución mostrando el ciclo de animación

### Cambiado
- Los dos placeholders de video ahora son animaciones Canvas en loop continuo

---

## [v2.1.0] — 2026-09-18

### Eliminado
- Frase "Todos en pintura mate anti-huellas." del FAQ sobre colores del tablero

---

## [v2.0.0] — 2026-09-18

### Agregado
- **Configurador dinámico de 3 pasos** reemplaza la sección de precio estática
  - Paso 1: Selección de número de monitores (1 o 2)
  - Paso 2: Selección de tamaño por monitor (22", 24", 27", 32")
  - Paso 3: Selección de color del tablero (5 opciones)
- **5 colores de tablero** con swatches visuales y ajustes de precio:
  - Negro Mate (incluido)
  - Blanco Nieve (incluido)
  - Roble Natural (+$15)
  - Nogal Oscuro (+$15)
  - Gris Cemento (+$10)
- Selectores independientes para monitor izquierdo/derecho en configuración dual
- Resumen en tiempo real con desglose de precio y medidas calculadas
- Vista previa visual del color seleccionado en el resumen
- Animación de pulso en el precio al actualizarse
- Scroll automático suave entre pasos del configurador
- Checkout modal muestra la configuración completa elegida
- Confirmación de pedido muestra el detalle exacto de lo comprado
- Nueva pregunta en FAQ: "¿Puedo elegir el color del tablero?"

### Cambiado
- **Garantía corregida de 2 años a 1 año** en todo el sitio (hero, configurador, checkout)
- Botón del navbar cambiado de "Comprar — $249" a "Configurar y Comprar"
- Botón del hero cambiado de "Comprar Ahora — $249" a "Configura el Tuyo"
- Especificaciones actualizadas para reflejar configuración dinámica
- Acabado en specs cambiado a "5 colores mate anti-huellas"
- Peso en specs cambiado a "14–22 kg" (rango según configuración)
- Accesibilidad: `role="button"`, `aria-pressed`, navegación con teclado y focus visible

### Eliminado
- Sección de precio estática con precio fijo de $249

---

## [v1.0.0] — 2026-09-18

### Lanzamiento Inicial
- **Navbar** fija con backdrop blur, links de navegación y botón CTA
- **Hero** a pantalla completa con título animado y placeholder de video
- **Trust Bar** con 4 indicadores (Ecuador, plegado, 50kg, envío)
- **Sección Problema** con copy emotivo centrado
- **Sección Solución** con placeholder de video grande
- **Sección Diseño** con grid de 3 tarjetas (ingeniería, estética, mecanismo)
- **Tabla de Especificaciones** con 7 filas de datos técnicos
- **3 Testimonios** (Quito, Guayaquil, Cuenca) con estrellas
- **Sección de Precio** estática a $249 con lista de incluidos
- **Rastreo de Pedidos** funcional con 3 pedidos de ejemplo y barra de progreso
- **FAQ** con 5 preguntas en acordeón
- **Footer** con links y créditos
- **Botón flotante de WhatsApp** (FAB)
- **Checkout modal** tipo Stripe en modo test
- **Modal de confirmación** con número de orden generado
- Animaciones fade-up al cargar y scroll-reveal con IntersectionObserver
- Menú hamburguesa para móvil
- Diseño responsive completo
- Paleta: #FAFAF7, #0A0A0A, #6B6B6B, #1A1A1A, #E5E5E0
- Tipografía: Inter (Google Fonts)

---

## Convenciones

- **Agregado** para funcionalidades nuevas
- **Cambiado** para cambios en funcionalidades existentes
- **Eliminado** para funcionalidades removidas
- **Corregido** para corrección de errores

---

## [v4.0.0] — 2026-09-18

### Agregado
- **Pantalla de carga** con logo ALITOSHI y barra de progreso animada
- **Barra de countdown promocional** fija arriba del navbar con timer regresivo de 7 días ("Precio de lanzamiento termina en...")
- **Botón scroll-to-top** (flecha arriba) aparece al bajar 600px, con animación suave
- **Contador de viewers en vivo** (simulado) debajo del CTA del hero con indicador verde pulsante
- **SEO completo**: meta description, keywords, canonical, Open Graph, Twitter Card
- **Favicon SVG inline** (icono de escritorio en negro)
- **Meta theme-color** para barras de navegador móvil
- Navbar se ajusta dinámicamente al alto de la barra promocional
- Menú móvil y hero padding adaptados al promo bar

### Cambiado
- Title mejorado: "ALITOSHI — Escritorios Plegables de Pared | Hecho en Ecuador"
- Responsive: la barra promo reduce tipografía en móvil
