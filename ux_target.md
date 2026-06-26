# UX Target & User Journey Mapping

This document outlines the mobile-first user experience (UX) flow for the Pixel Art Converter. The application is designed to behave like a native mobile app—fast, interactive, and highly protective against user input errors.

---

## 1. Core UX Goals
* **Zero Latency:** All image transformations must happen instantly in the client’s browser memory (RAM/GPU).
* **Guarded Inputs:** Prevent runtime mathematical distortion by strictly validating aspect ratios at the boundary layer.
* **Frictionless Sharing:** Export assets at high-resolution ($1024 \times 1024$) so the output looks razor-sharp on high-DPI modern smartphone screens.

---

## 2. Step-by-Step User Lifecycle

### Step 1: Landing & First Impressions
* **Visual State:** The user lands on a clean, cyberpunk-themed viewport. The background is a dark charcoal matrix, and the primary action button glows with a neon-mint accent.
* **Information Hierarchy:** A minimal header informs the user of the golden constraints: `Square Photos Only (1:1 Ratio) • Minimum 512x512px`.
* **State Variant:** The preview area displays a subtle placeholder layout with dashed borders, inviting an action.

### Step 2: Guarded Upload Lifecycle
When the user taps **"Upload Photo"**, the mobile native file sheet or camera module triggers.
* **The Error Flow:** If a user selects a non-square photo (e.g., a $16:9$ landscape snapshot) or a low-resolution thumbnail ($300 \times 300$):
  1. The engine rejects the file before allocating memory.
  2. A red warning banner flashes directly under the upload button.
  3. The interface resets clean without crashing the React state tree.
* **The Success Flow:** If the photo passes validation, it loads into memory immediately. The placeholder vanishes, and the canvas instantly processes the image using the default controls ($64 \times 64$, Classic 8-Bit, Grid Gaps Enabled).

### Step 3: Interactive Modification
The user scrolls down slightly to interact with full-width, thumb-friendly control modules:
* **Resolution Switch:** Instantly flips between $32 \times 32$ (abstract/retro icon) and $64 \times 64$ (detailed sprite).
* **Style Engine Toggle:** Switching from **8-Bit** to **Pop-Art** seamlessly replaces the quantization depth slider with a beautiful, fixed 6-color palette preview.
* **Gap Mechanic:** Tapping **"Gaps (Sticky-Note style)"** mimics a physical mosaic tile layout, while **"No Gaps"** generates a solid, seamless retro sprite.

### Step 4: Asset Export
* At the bottom of the viewport, a prominent sticky button reads **"💾 Download High-Res PNG"**.
* Tapping this bypasses typical low-res screenshotting limitations, automatically pushing a sharp $1024 \times 1024$ image directly into the device's native download/camera roll storage pipeline.