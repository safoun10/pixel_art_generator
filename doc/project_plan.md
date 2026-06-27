# Project Plan: Build Milestones

This structured timeline breaks down the construction of the Pixel Art Generator app. It is optimized to align with a first-year Computer Science student's learning progression.

---

## 📅 Phase 1: Environment Setup & Core UI Structure

- **Objective:** Scaffold the application structure and map the state engine layout.
- **Tasks:**
    1. Initialize the project structure.
    2. Implement the static dark-neon UI wrapper layout based on `DESIGN_DETAILS.md`.
    3. Set up the basic state variables: `imageSrc`, `resolution`, `paletteMode`, `showGaps`, and `errorMsg`.
    4. Build the HTML file upload inputs and map them to their corresponding DOM elements.

## 📅 Phase 2: Input Validation Logic & Security Guards

- **Objective:** Intercept uploads at the boundary layer to validate files and normalize inputs.
- **Tasks:**
    1. Build an asynchronous image listener inside the upload handler function.
    2. Write validation conditions checking if the input width matches the height exactly ($1:1$) and meets the minimum resolution threshold ($\ge 512 \times 512px$).
    3. Implement a **Local Cropper Module** (`js/cropper.js`) to handle non-compliant images by allowing users to interactively crop and normalize files to a perfect $1:1$ ratio.
    4. Program error handling banners to dynamically display or clear warning states.

## 📅 Phase 3: The Low-Res Downscale & Processing Engine

- **Objective:** Read raw bytes from the pixel canvas and write the core mapping math loop.
- **Tasks:**
    1. Instantiate an off-screen container canvas sized explicitly to the target resolution grid.
    2. Extract pixel arrays via the `getImageData().data` matrix.
    3. Implement the channel loop logic ($i += 4$) to process Red, Green, and Blue indices.
    4. Write the **Mathematical Quantization Engine** function to map colors to uniform color depth levels.
    5. Write the **Euclidean Distance Engine** function using 3D coordinate distance geometry to map colors to the Pop-Art palette array.

## 📅 Phase 4: High-Res Scaled Drawing & Gap Simulation

- **Objective:** Render the low-res data onto the visible high-res presentation canvas with sharp edges.
- **Tasks:**
    1. Wire up the visible display canvas with an output format layout locked at $1024 \times 1024$ pixels.
    2. Enforce `imageSmoothingEnabled = false` across browser variants.
    3. Implement the dual-nested matrix loop (`x` and `y`) to compute grid tile blocks dynamically.
    4. Apply offset spacing metrics inside `fillRect` calls to simulate the physical sticky-note tile gaps.

## 📅 Phase 5: High-Res Export Pipeline & Edge Testing

- **Objective:** Finalize local image file generations and test mobile compatibility.
- **Tasks:**
    1. Write the download script utility leveraging a temporary anchor tag link combined with canvas `.toDataURL()`.
    2. Wrap rendering loops to ensure the image recalculates instantly whenever control toggles change.
    3. Perform layout testing on mobile viewports to ensure responsive styling rules work seamlessly.
