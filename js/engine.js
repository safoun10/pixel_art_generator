function quantize(value, levels) {
    const step = 255 / (levels - 1);
    return Math.round(Math.round(value / step) * step);
}

function euclideanDistance(c1, c2) {
    return Math.sqrt(
        Math.pow(c1.r - c2.r, 2) +
        Math.pow(c1.g - c2.g, 2) +
        Math.pow(c1.b - c2.b, 2)
    );
}

const popArtPalette = [
    { r: 255, g: 107, b: 0 },   // Bold Orange
    { r: 79, g: 195, b: 247 },  // Light Blue
    { r: 0, g: 0, b: 0 },       // Deep Black
    { r: 255, g: 255, b: 255 }, // Pure White
    { r: 229, g: 57, b: 53 },   // Vivid Red
    { r: 255, g: 235, b: 59 }   // Bright Yellow
];
