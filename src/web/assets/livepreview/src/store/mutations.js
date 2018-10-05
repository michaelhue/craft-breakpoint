export function setEnabled(state, value) {
  state.enabled = !!value;
}

export function setDragging(state, value) {
  state.dragging = !!value;
}

export function setSelectedPreset(state, index) {
  state.selectedPreset = index;
}

export function setSelectedZoom(state, index) {
  state.selectedZoom = index;
}

export function setCustomSize(state, { x, y }) {
  state.x = x;
  state.y = y;
}

export function setPresetSize(state, { x, y }) {
  state.presetX = x;
  state.presetY = y;
}

export function setStageSize(state, { x, y }) {
  state.stageX = x;
  state.stageY = y;
}
