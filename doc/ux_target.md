# UX Target & User Journey Mapping

This document outlines the mobile-first user experience (UX) flow for the Pixel Art Generator. The application is designed to behave like a native mobile app—fast, interactive, and highly protective against user input errors.

---

## 1. Core UX Goals

- **Zero Latency:** All image transformations must happen instantly in the client’s browser memory (RAM/GPU).
- **Guarded Inputs:** Prevent runtime mathematical distortion by strictly validating aspect ratios at the boundary layer.
- **Frictionless Sharing:** Export assets at high-resolution ($1024 \times 1024$) so the output looks razor-sharp on high-DPI modern smartphone screens.

---

## 2. Step-by-Step User Lifecycle

### Step 1: Landing & First Impressions

- **Visual State:** The user lands on a clean, cyberpunk-themed viewport. The background is a dark charcoal matrix, and the primary action button glows with a neon-mint accent.
- **Information Hierarchy:** A minimal header informs the user of the golden constraints: `Square Photos Only (1:1 Ratio) • Minimum 512x512px`.
- **State Variant:** The preview area displays a subtle placeholder layout with dashed borders, inviting an action.

### Step 2: Guarded Upload Lifecycle

When the user taps **"Upload Photo"**, the mobile native file sheet or camera module triggers.

- **The Normalization Flow:** If a user selects a non-square photo or an image smaller than $512 \times 512px$:
    1.  The application automatically launches a native-style **Crop Overlay**.
    2.  The user drags the image within a fixed $1:1$ viewport to select the desired area.
    3.  Upon confirmation, the application clips the selection and normalizes it to a high-resolution square asset ($1024 \times 1024px$) locally in the browser memory.
- **The Success Flow:** If the photo passes validation (already $1:1$ and $\ge 512px$), it loads immediately. The placeholder vanishes, and the canvas instantly processes the image using the default controls ($64 \times 64$, 1px Gap).

### Step 3: Interactive Modification

The user scrolls down slightly to interact with full-width, thumb-friendly control modules:

- **Resolution Switch:** Instantly flips between "Original" and custom grid sizes ($8 \times 8$ to $128 \times 128$).
- **Gap Mechanic:** Tapping **"Off"** generates a solid, seamless retro sprite, while selecting a value ($1px$ to $5px$) mimics a physical mosaic tile layout.

### Step 4: Asset Export

- At the bottom of the viewport, a prominent button reads **"Download"**.
- Tapping this automatically triggers a download of the processed $1024 \times 1024$ image directly into the device's storage pipeline.
