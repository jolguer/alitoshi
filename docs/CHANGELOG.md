# Changelog — ALITOSHI Landing Page

Todas las versiones notables de este proyecto están documentadas aquí.

---

## [v16.1.1] — 2026-09-25

### Corrección
- Corregido el cierre del bloque de estilos para asegurar una estructura HTML/CSS válida después de las mejoras UX/UI de v16.1.0.


## [v16.1.0] — 2026-09-25

### UX/UI y conversión
- Añadida sección “Cómo funciona” para explicar visualmente el flujo abrir → trabajar → cerrar.
- Reforzada la explicación del sistema de **pistones de gas**.
- Actualizadas las especificaciones visibles a **120 × 60 cm abierto** y **15 cm de profundidad cerrado**.
- Sustituida la afirmación de envío 48–72 h en la barra de confianza por **Garantía de 1 año**.
- Eliminada la promesa de “Envío gratis” del resumen del configurador.
- Convertidas las opciones del configurador y acabados de color en botones semánticos para mejorar accesibilidad y teclado.
- Refinada la experiencia móvil del selector de colores a dos columnas.
- Eliminados estilos residuales del countdown promocional.


## [v16.0.0] — 2026-09-25

### Cambiado
- Replanteado el hero con una propuesta de valor más directa: “Tu escritorio cuando lo necesitas. Tu pared cuando no.”
- CTA principal actualizado a “Configurar mi ALITOSHI” y precio de entrada visible “Desde $199”.
- Eliminada la barra de countdown promocional generado dinámicamente.
- Eliminado el contador de visitantes simulado para evitar señales de urgencia o prueba social no verificadas.
- Retirado “Rastrear Pedido” del menú principal para mantener el foco de navegación en descubrimiento y configuración.
- Añadido CTA fijo en móvil después de abandonar el hero.
- Añadida compatibilidad con prefers-reduced-motion.
- Añadido marcado estructurado Product con marca y rango de precios para SEO.
- Añadidos eventos básicos en dataLayer para CTA, configurador, colores, FAQ y WhatsApp.
- Actualizada la meta description para eliminar la afirmación no verificada de “Envío gratis”.

### Verificado
- Sin referencias a marcas de terceros.
- Precio base mantiene $199.
- Garantía mantiene 1 año.
- Videos embebidos en Base64 se mantienen sin migración de arquitectura.
- No se modificó la lógica de precios existente del configurador.


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

---

## [v5.0.0] — 2026-09-18

### Cambiado
- **Rediseño completo de animaciones Canvas** basadas en el producto real:
  - Hero: escritorio en acabado nogal con panel trasero, 3 compartimentos de repisas, 2 monitores con pantallas de arte abstracto, laptop con cables, borde blanco en la superficie, vetas de madera realistas
  - Solución: vista técnica con el mismo diseño de producto, líneas de dimensión con badges oscuros, timer de progreso
- Paleta de colores del producto actualizada: nogal (#6B5140), madera clara (#8B7060), madera oscura (#4A3628), borde blanco (#F0EDE8)
- Perspectiva pseudo-3D con trapezoide para simular profundidad de la superficie desplegada
- Los monitores muestran gradientes abstractos que coinciden con los wallpapers del producto real
- Logo "ALITOSHI" aparece en la pantalla del monitor izquierdo
- Cable visible conectando laptop a monitores

---

## [v6.0.0] — 2026-09-18

### Cambiado
- **Animación estilo YouTube Short cinematográfico** — Rediseño completo del timing y la narrativa visual:
  - Ciclo hero de 9 segundos con storytelling: cerrado → pulso de "tap" en el latch → apertura suave con easeOutExpo → monitores encienden progresivamente → glow de pantallas → pausa abierto → cierre elegante → pausa cerrado
  - Cables de soporte laterales visibles en ambos lados (izquierdo y derecho) con bisagras metálicas
  - Mecanismo de latch/cerradura visible en la parte superior cuando está cerrado
  - Monitores con efecto glow radial que simula la luz de las pantallas encendiéndose
  - Soportes y pedestales de monitores visibles
  - Puntos de bisagra en la línea de plegado
  - Captions dinámicos que narran cada fase: "Un cuadro en tu pared" → "Se despliega en segundos" → "2 monitores + laptop · listo para trabajar" → "Se pliega con un movimiento"
  - Función `renderALITOSHI()` compartida entre ambos canvas con parámetros configurables
  - Nuevas funciones de easing: `easeOutExpo` para apertura más realista (rápido al inicio, frena al final)
  - Efecto de "tap pulse" (anillo expandiéndose) cuando el escritorio está cerrado, como si alguien tocara el mecanismo

---

## [v7.0.0] — 2026-09-18

### Cambiado
- **Motor de animación cinematográfico completamente nuevo:**
  - Timeline extendido a 10s (hero) y 9s (solución) con storytelling narrativo
  - Fase 1: Cerrado con double-ripple tap pulse (efecto de "alguien toca el mecanismo")
  - Fase 2: Apertura con easeOutExpo (aceleración realista — rápido al soltar, frena suave)
  - Fase 3: Boot de monitores — pantallas pasan de negro → glow tenue → encendido completo con contenido
  - Fase 4: Glow radial de monitores ilumina el panel trasero (azul izquierda, cálido derecha)
  - Fase 5: Ambient light shift — toda la escena se tiñe con la luz de las pantallas
  - Fase 6: Cierre con easeInOutQuint (movimiento ultra-suave tipo premium)
  
- **Brazos de soporte metálicos rediseñados:**
  - Barras gruesas con sombra proyectada
  - Highlight central simulando reflejo metálico
  - Pernos/bolts con detalle 3D (círculo exterior, reflejo, anillo)
  
- **Mecanismo de bisagra detallado:**
  - Barra de hinge con acabado metálico y highlight superior
  - 4 knuckles (nudillos) con reflejo individual
  - Latch/cerradura en la parte superior con placa metálica, keyhole y biseladoo

- **Monitores con secuencia de boot:**
  - Fase negra con glow tenue azul/cálido
  - Transición progresiva a pantalla completa
  - Doble capa de ondas abstractas por monitor
  - Reflejo de luz en esquina superior (efecto cristal)
  - Stands y pedestales con cuello y base

- **Laptop mejorada:**
  - Sombra bajo la base
  - Gradiente en teclado
  - Trackpad detallado
  - Pantalla con reflejo diagonal
  - Cable curvo hacia los monitores

- **Efectos de iluminación ambiental:**
  - Glow radial detrás de cada monitor
  - Ambient shift que tiñe toda la zona del producto
  - Sombras dinámicas que crecen con la apertura
  - Shadow del panel en la pared

- **Captions mejorados:** nuevo caption "Los monitores se encienden..." durante fase de boot

---

## [v8.0.0] — 2026-09-18

### Agregado
- **Persona animada en el hero** con narrativa completa:
  - Personaje estilizado con piel, cabello, ropa casual y zapatos
  - Expresiones faciales: ojos con brillo, sonrisa progresiva, rubor en mejillas
  - Fase 1 (0-0.5s): Persona camina desde la derecha hacia el escritorio
  - Fase 2 (0.5-2.5s): Se detiene junto al escritorio, mira hacia arriba mientras se abre, sonríe más
  - Fase 3 (2.5-3.5s): Se sienta (transición fluida de pie a sentado)
  - Fase 4 (3.5-6.5s): Trabaja feliz — brazos al frente tecleando, cabeza oscila suavemente, sonrisa plena
  - Fase 5 (6.5-8.5s): Se levanta, camina hacia la derecha sonriendo, mira atrás
  - Fase 6 (8.5-10s): De pie a distancia, admira el escritorio cerrado con satisfacción
  - Animación de piernas al caminar (swing con fase)
  - Brazos que se balancean al caminar y se levantan al teclear
  - Escala responsiva que se adapta al viewport
  - Posición sincronizada con la altura del escritorio desplegado

### Cambiado
- Captions actualizados: "Trabaja cómodo · todo al alcance" durante fase de trabajo
- Caption final: "Tu espacio, siempre listo cuando lo necesites"

---

## [v9.0.0] — 2026-09-19

### Eliminado
- Workflow de GitHub Actions para FTP (causaba fallos constantes por puerto/protocolo incompatible)
- El hosting real es GitHub Pages con dominio personalizado `web.bursatil.ec` vía CNAME + DNS

### Agregado
- **Paleta de acento cálida** coherente con la madera nogal del producto:
  - Terracota (#C05A3A), dorado (#D4A054), salvia (#7A9A6D), crema (#F5EDE4)
- Gradiente radial sutil de fondo en el hero (terracota + dorado)
- Palabra "Transformado" del título con gradiente de texto terracota→dorado
- Iconos del Trust Bar con círculos de color de fondo (terracota, dorado, salvia, azul)
- Iconos de las tarjetas de diseño con fondos degradados a color
- Avatares con iniciales y gradiente de color en tarjetas de testimonios
- Barra de countdown promocional con gradiente terracota→dorado (antes negro sólido)
- Precio final del configurador en terracota oscuro (antes negro)
- Borde superior de acento terracota en la tarjeta de resumen del configurador
- Estados "seleccionado" del configurador (tamaño, color) ahora con borde y sombra terracota en vez de negro/gris
- Hover en tarjetas de diseño con elevación (translateY) además de sombra
- Fondo del configurador con gradiente sutil surface→crema

### Verificado
- Animaciones Canvas del hero y solución revisadas — funcionando correctamente sin regresiones tras cambios de CSS

---

## [v13.0.0] — 2026-09-19

### Corregido — Diseño fiel a fotos de referencia del producto real
- **Mecanismo de pistones de gas** (no barra rígida): cilindro + vástago, con punto superior cerca de la parte alta trasera del gabinete y punto inferior cerca del borde frontal del tablero (antes conectaba a un punto intermedio, no correspondía a un pistón de gas real)
- **Interior del gabinete rediseñado** para coincidir con referencias:
  - Soporte VESA (cruz negra) + accesorio circular visibles antes de que aparezcan los monitores
  - Rejillas de ventilación en la parte superior
  - Repisa dividida en 2 compartimentos con muesca circular central (paso de cables)
- **Tablero**: canto frontal oscuro (antes blanco), perforación circular para cables cerca del borde frontal
- **Secuencia de cortes profesional**: reemplazadas las disolvencias confusas entre ángulos de cámara distintos por cortes duros (estándar de edición real: solo se funde el punto de loop, nunca un cambio de ángulo)
- **Video de la sección "Solución"** regenerado con el mismo mecanismo corregido y líneas de dimensión recalculadas correctamente para la vista de perfil (antes la cota de 120cm aparecía mal posicionada)
- Texto de la tarjeta "Ingeniería silenciosa" actualizado: "Pistones de gas" en vez de "Bisagras"
- Verificado: cero referencias a marcas de terceros en todo el archivo

---

## [v14.0.0] — 2026-09-19

### Cambiado — Video 3D fotorrealista (Blender/Eevee)
- **Reemplazado el render 2D tipo "canvas" por un video 3D real** generado con Blender 4.0 (motor Eevee), con materiales físicos, madera con veta procedural, iluminación de 3 puntos y post-procesado AgX
- **Construcción corregida según fotos de referencia:**
  - Marco exterior tipo "caja sombra" (shadow box) construido con corte booleano — garantiza una pieza cohesiva sin costuras
  - La tapa/tablero está **embutida bajo el marco**: en la posición cerrada se ve como un cuadro liso en la pared; al abrir, la tapa emerge desde detrás del listón inferior del marco (articulación oculta), exactamente como en las fotos de referencia
  - Bisagra recesada, no visible desde el frente cuando está cerrado
  - Pistones de gas simplificados pero correctamente anclados: parte superior trasera del marco → borde frontal del tablero
  - Interior con soporte VESA, accesorio circular, rejillas de ventilación, repisa dividida en 2 compartimentos con muesca de cables
  - Tablero con canto frontal y perforación para cables
- Cámara con leve movimiento tipo "Ken Burns" a lo largo de la animación para sensación de video real
- Secuencia: cerrado (como cuadro) → apertura con la tapa emergiendo del marco → monitores encienden → laptop aparece → pausa → cierre
- 85 frames renderizados a 10fps base, interpolados a 30fps para movimiento fluido
- Mismo video aplicado en las secciones Hero y Solución
- Verificado: cero referencias a marcas de terceros

---

## [v15.0.0] — 2026-09-19

### Agregado
- **Personaje humano 3D** integrado a la animación: camina hacia el escritorio, lo abre, trabaja junto a él, y se aleja al finalizar
- Corregido bug de sincronización de jerarquías padre-hijo en Blender (depsgraph) reescribiendo el rig del personaje con cinemática directa en Python (sin parent/child de Blender), eliminando problemas de posicionamiento
- Tono de piel, cabello oscuro y vestimenta ajustados
- **Textos en español superpuestos** siguiendo la estructura narrativa de un video de referencia tipo testimonio:
  - "Mi escritorio no ocupa espacio... porque no está a la vista"
  - "Se despliega en segundos"
  - "Dos monitores + laptop, listo para trabajar"
  - "Y al cerrar... vuelve a ser parte de la pared"
- Composición de cámara ajustada para mostrar persona y mueble sin que se tapen entre sí

### Nota
- No se generó una persona fotorrealista de video real (fuera del alcance de las herramientas disponibles); se optó por un personaje 3D estilizado renderizado en Blender/Eevee, manteniendo el enfoque fotorrealista en el mueble y el entorno
