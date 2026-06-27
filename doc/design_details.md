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




## 2. Rendering Logic
The engine samples raw pixel data from the source image, performing direct grid mapping to ensure high-fidelity color reproduction without artificial quantization.
---

## 3. Critical CSS & Anti-Blur Nudges
To ensure high-fidelity retro output, anti-aliasing is disabled globally via CSS:

