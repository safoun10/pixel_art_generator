const state = {
    image: null,
    resolution: 64,
    paletteMode: '8-bit',
    gapSize: 1,
    errorMsg: null
};

// Simple observer pattern to trigger render
function updateState(newState) {
    Object.assign(state, newState);
    // Ensure we trigger render only if we have an image
    if (state.image) {
        render();
    }
}
