const cropper = {
    modal: document.getElementById('crop-modal'),
    canvas: document.getElementById('crop-canvas'),
    ctx: document.getElementById('crop-canvas').getContext('2d'),
    img: new Image(),
    offset: { x: 0, y: 0 },
    scale: 1,
    isDragging: false,
    lastPos: { x: 0, y: 0 },

    init() {
        this.canvas.width = 1024;
        this.canvas.height = 1024;
        
        this.canvas.addEventListener('pointerdown', e => this.startDrag(e));
        window.addEventListener('pointermove', e => this.drag(e));
        window.addEventListener('pointerup', () => this.endDrag());
        
        document.getElementById('crop-confirm').addEventListener('click', () => this.confirm());
        document.getElementById('crop-cancel').addEventListener('click', () => this.hide());
    },

    show(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.img.onload = () => {
                this.modal.classList.remove('hidden');
                this.fitImage();
            };
            this.img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    },

    hide() {
        this.modal.classList.add('hidden');
    },

    fitImage() {
        // Calculate scale to fit shortest side to 1024px
        this.scale = Math.max(1024 / this.img.width, 1024 / this.img.height);
        this.offset = { x: 0, y: 0 };
        this.draw();
    },

    draw() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, 1024, 1024);
        
        const w = this.img.width * this.scale;
        const h = this.img.height * this.scale;
        
        this.ctx.drawImage(this.img, this.offset.x, this.offset.y, w, h);
    },

    startDrag(e) {
        this.isDragging = true;
        this.lastPos = { x: e.clientX, y: e.clientY };
    },

    drag(e) {
        if (!this.isDragging) return;
        const dx = e.clientX - this.lastPos.x;
        const dy = e.clientY - this.lastPos.y;
        this.offset.x += dx;
        this.offset.y += dy;
        this.lastPos = { x: e.clientX, y: e.clientY };
        this.draw();
    },

    endDrag() {
        this.isDragging = false;
    },

    confirm() {
        // Extract the 1024x1024 area from the canvas
        const dataUrl = this.canvas.toDataURL('image/png');
        // Trigger custom event or callback to engine
        window.dispatchEvent(new CustomEvent('image-cropped', { detail: dataUrl }));
        this.hide();
    }
};

cropper.init();
