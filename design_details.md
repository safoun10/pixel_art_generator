# Design System & CSS Architecture

This document covers the UI design tokens, the dark-neon color palette, and the critical CSS rendering rules required to avoid blurry canvas outputs.

---

## 1. Color System (Cyberpunk Dark Mode)

| Token Name | Hex Code | Role |
| :--- | :--- | :--- |
| `Background` | `#0d0e12` | Main body app background |
| `Surface` | `#15171e` | Control card panels and viewports |
| `Border` | `#2d3748` | Muted card outlines and structural lines |
| `Neon Accent` | `#00ffcc` | Interactive triggers, active button text, glowing indicators |
| `Muted Text` | `#a0aec0` | Labels, secondary technical data, and instructions |
| `Error Crimson` | `#f56565` | Validation failures and warnings |

---

## 2. Fixed Pop-Art Palette Matrix
When the user selects the **Pop-Art Blueprint Mode**, the color conversion engine snaps pixels onto this explicit 6-color palette:

* **Bold Orange:** `#ff6b00` (Default background fallback)
* **Light Blue:** `#4fc3f7` (Pop highlights)
* **Deep Black:** `#000000` (High contrast shadows)
* **Pure White:** `#ffffff` (Bright tones)
* **Vivid Red:** `#e53935` (Mid-tone accents)
* **Bright Yellow:** `#ffeb3b` (Warm elements)

---

## 3. Critical CSS & Anti-Blur Nudges

To make sure images look like sharp retro game assets rather than blurry low-res web thumbnails, we must override the browser's native downscale smoothing engine.

### The JavaScript Canvas Toggle
Inside the rendering cycle, anti-aliasing must be disabled explicitly before copying pixel buffers:
```javascript
ctx.imageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;


Double-Nested Matrix Loop Rendering (The Gap System)
When rendering the mosaic tile layout with visible grid gaps, we process the small, downscaled image grid sequentially using a double-nested matrix loop:

┌──────────────────────────────────────────────────────────┐
│ Outer Loop: Y Row Iterations (0 to Grid Size)            │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Inner Loop: X Column Iterations (0 to Grid Size)   │  │
│  │  1. Compute the linear array index.                │  │
│  │  2. Sample the RGB color byte variables.           │  │
│  │  3. Calculate high-res display coordinates.        │  │
│  │  4. Draw filled block rectangles with gap offsets. │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘