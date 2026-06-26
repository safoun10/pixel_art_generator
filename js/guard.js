const fileInput = document.getElementById('file-input');
const errorBanner = document.getElementById('error-banner');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    img.onload = () => {
        // Validate 1:1 and resolution >= 512
        if (img.width !== img.height || img.width < 512) {
            showError("Invalid dimensions: Must be a square (1:1) and at least 512x512px.");
            return;
        }
        
        hideError();
        updateState({ image: img });
    };
    img.src = URL.createObjectURL(file);
});

function showError(msg) {
    errorBanner.textContent = msg;
    errorBanner.className = 'error-visible';
    errorBanner.style.color = 'var(--error-crimson)';
    errorBanner.style.marginTop = '10px';
}

function hideError() {
    errorBanner.className = 'hidden';
}

