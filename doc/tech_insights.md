# Technical Insights & Mathematical Foundation

This document breaks down the underlying data structures, memory layouts, and geometry formulas powering the application. It connects this practical project directly to foundational Computer Science concepts.

---

## 1. Linear Memory Layout of Images
An image inside an HTML5 Canvas element is represented as a single-dimensional flat array of 8-bit unsigned integers (`Uint8ClampedArray`). 

Even though we see an image as a 2D matrix layout of columns and rows, the browser flattens this grid structure into a long linear sequence of channels ordered as: `[R, G, B, A, R, G, B, A, ...]`.

### Two-Dimensional Grid Index Calculation
To locate and read a specific $(X, Y)$ coordinate inside this flat list, we convert 2D coordinates into a 1D index array calculation:

$$\text{Index} = (Y \times \text{Width} + X) \times 4$$

* We multiply by **Width** to bypass prior row segments completely.
* We multiply by **4** because each discrete pixel group consumes exactly four data indices: **Red**, **Green**, **Blue**, and **Alpha (Opacity)**.

---

## 2. Color Nearest-Neighbor Space Geometry
When matching pixel colors to the fixed Pop-Art palette, the application models colors as 3D spatial points where the primary channels act as coordinates: $(R, G, B) \rightarrow (X, Y, Z)$.

To determine which palette profile color provides the closest visual match, we calculate the **3D Euclidean Distance** between the target pixel values and our defined color collection:

$$D = \sqrt{(R_2 - R_1)^2 + (G_2 - G_1)^2 + (B_2 - b_1)^2}$$

The color in our palette that produces the minimum distance value ($D$) wins the match and replaces the original pixel value.

---

## 3. Mathematical Quantization (Color Depth Reduction)
Quantization maps a continuous or large range of values down to a smaller, discrete set of uniform steps. This is the logic behind the "Classic 8-Bit" look.

Instead of running a heavy comparison search against a fixed palette array, we can use direct mathematical scaling to divide the standard 255 color range into regular intervals based on the selected `levels` variable (e.g., 2, 4, 6, or 8 levels):

```javascript
function quantize(value, levels) {
  // 1. Calculate the size of each step interval bucket
  const step = 255 / (levels - 1);
  
  // 2. Divide value by step size, round to nearest bucket integer, and scale back up
  return Math.round(Math.round(value / step) * step);
}