---
title: Iman AI - Guía de Estilos CSS (Neon/Sci-Fi)
description: Guía de referencia sobre la arquitectura CSS, variables, tipografías y efectos para futuros proyectos.
---

# Guía de Estilos CSS y Diseño de IMAN AI

Este documento funciona como una hoja de referencia rápida (Skill Document) para mantener y replicar el estilo visual de la landing page de **IMAN AI** en futuros proyectos. El diseño general es "Dark Sci-Fi" con acentos de neón brillante.

## 1. Sistema de Colores (Theme Variables)

Al utilizar Tailwind CSS, los colores principales están mapeados a variables CSS en formato HSL dentro del archivo `index.css`. Esto permite cambiar toda la paleta modificando solo unas cuantas variables principales.

### Colores Base (Dark Sci-Fi)
- **Background**: `222 47% 8%` (Un azul/gris muy oscuro, casi negro)
- **Foreground**: `210 40% 98%` (Blanco brillante para el texto principal)

### Acentos Neón
- **Primary (Neón Cyan)**: `190 100% 50%` - Usado para elementos principales, brillos, y botones primarios.
- **Secondary (Neón Magenta)**: `300 100% 50%` - Usado para llamadas a la acción secundarias y detalles complementarios.

### Otros
- **Muted**: `217 33% 17%` (Gris azulado oscuro)
- **Muted Foreground**: `215 20% 65%` (Gris claro para textos secundarios)

*Ejemplo de uso en Tailwind:* `text-primary`, `bg-secondary/20`, `bg-background`.

## 2. Tipografía

Se utilizan tres tipos de fuentes de Google Fonts conectadas a través de variables CSS:

1. **Orbitron** (`--font-orbitron`): Usada exclusivamente en **títulos** (`h1`, `h2`, `h3`, etc.). Tiene un diseño muy tecnológico y de ciencia ficción. *Clase de Tailwind: `font-orbitron`*
2. **Exo 2** (`--font-exo`): Usada para **subtítulos, botones e información destacada**. Tiene un balance entre legibilidad y estilo tecnológico. *Clase de Tailwind: `font-exo`*
3. **Poppins** (`--font-poppins`): Usada por defecto en el `body` para todo el **texto regular y párrafos**, mejorando la legibilidad. *Clase de Tailwind: `font-poppins`*

## 3. Efectos Visuales Especiales (Utilities)

En la sección `@layer utilities` de `index.css` existen clases personalizadas listas para usar que le dan el look "futurista" y brillante a los componentes:

### Texto con Brillo (Text Glow)
- `.text-glow-primary`: Añade un aura brillante color cyan al texto. (Ideal para el título Hero).
- `.text-glow-secondary`: Añade un aura brillante magenta al texto.

### Contenedores y Cajas (Box Glow)
- `.box-glow`: Agrega un sutil brillo cian alrededor e interiormente en una caja. (Utilizado en las NeonCards por defecto).
- `.box-glow-hover:hover`: Acentúa fuertemente el brillo cuando el cursor pasa por encima del elemento.

### Bordes Brillantes
- `.border-glow`: Agrega un brillo duro, ideal para líneas de separación o botones con estilo delineado.

### Fondos y Patrones
- `.bg-grid-pattern`: Un patrón de cuadrícula de color tenue, difuminado radialmente hacia los bordes, que da una sensación de holograma o panel tecnológico en el fondo de las secciones.

## 4. Estilos Globales de la Interfaz

- **Transparencia en root**: Tanto el `body` como el div `#root` de React están configurados con `background: transparent !important`. Esto es vital para asegurar que los elementos ubicados mediante z-index (como la simulación de fluidos webgl) logren verse en el fondo total de la aplicación visual, mientras se añaden gradientes radiales sobre ese fondo para mezclar la paleta de colores.
- **Scrollbar Personalizado**: La barra de desplazamiento tiene un diseño oscuro. Su carril (track) asume el color del background, el agarre (thumb) de color `muted`, y al pasar el mouse por encima (`:hover`), se ilumina instantáneamente con el color neón `primary` (cyan).

---
**Recomendación:** Para crear nuevas `NeonCards` o `NeonButtons`, revisa las propiedades prefabricadas dentro de la carpeta `ui`, ya que estas heredan directamente todos los efectos declarados en `@layer utilities` y manejan la interactividad con animaciones nativas.
