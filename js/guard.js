const fileInput = document.getElementById('file-input');
const errorBanner = document.getElementById('error-banner');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    img.onload = () => {
        // Validate 1:1 and resolution >= 512
        if (img.width !== img.height || img.width < 512) {
            // Trigger cropper instead of error for non-square or small images
            cropper.show(file);
            return;
        }

        hideError();
        updateState({ image: img });
    };
    img.src = URL.createObjectURL(file);
});

// Listen for cropped image from cropper
window.addEventListener('image-cropped', (e) => {
    const croppedImg = new Image();
    croppedImg.onload = () => {
        hideError();
        updateState({ image: croppedImg });
    };
    croppedImg.src = e.detail;
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

