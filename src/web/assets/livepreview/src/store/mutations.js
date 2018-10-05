/**
 * Mutate enabled state.
 * @param {Object} state
 * @param {Boolean} value
 */
export function setEnabled(state, value) {
  state.enabled = !!value;
}

/**
 * Mutate dragging state.
 * @param {Object} state
 * @param {Boolean} value
 */
export function setDragging(state, value) {
  state.dragging = !!value;
}

/**
 * Mutate selected preset index.
 * @param {Object} state
 * @param {Number} index
 */
export function setSelectedPreset(state, index) {
  state.selectedPreset = index;
}

/**
 * Mutate selected zoom index.
 * @param {Object} state
 * @param {Number} index
 */
export function setSelectedZoom(state, index) {
  state.selectedZoom = index;
}

/**
 * Mutate custom dimensions.
 * @param {Object} state
 * @param {Number} payload.x
 * @param {Number} payload.y
 */
export function setCustomSize(state, { x, y }) {
  state.x = x;
  state.y = y;
}

/**
 * Mutate preset dimensions.
 * @param {Object} state
 * @param {Number} payload.x
 * @param {Number} payload.y
 */
export function setPresetSize(state, { x, y }) {
  state.presetX = x;
  state.presetY = y;
}

/**
 * Mutate stage dimensions.
 * @param {Object} state
 * @param {Number} payload.x
 * @param {Number} payload.y
 */
export function setStageSize(state, { x, y }) {
  state.stageX = x;
  state.stageY = y;
}
