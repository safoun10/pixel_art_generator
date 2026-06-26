# Design System & CSS Architecture

This document covers the UI design tokens, the monochromatic industrial palette, and the critical CSS rendering rules required to ensure a professional, high-end user interface.

---

## 1. Color System (Professional Minimalist)

| Token Name | Hex Code | Role |
| :--- | :--- | :--- |
| Background | #050505 | Main body app background |
| Surface | #0d0d0d | Control card panels and viewports |
| Border | #1a1a1a | Muted card outlines |
| Accent | #ffffff | Interactive triggers, active states |
| Muted Text | #666666 | Labels and secondary information |

---

## 2. Pop-Art & Quantization Logic
The engine supports real-time pixel quantization and mapping to a fixed 6-color palette. The rendering loop uses precise integer math to ensure sharp, blocky retro visuals.

---

## 3. Critical CSS & Anti-Blur Nudges
To ensure high-fidelity retro output, anti-aliasing is disabled globally via CSS:

`css
#display-canvas {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
}
`
