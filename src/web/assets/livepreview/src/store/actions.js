import { clamp } from "../util";

/**
 * Toggle enabled state.
 * @param {Object} ctx
 */
export function toggle({ commit, getters }) {
  commit("setEnabled", !getters.enabled);
}

/**
 * Set dragging state.
 * @param {Object} ctx
 * @param {Boolean} value
 */
export function setDragging({ commit }, value) {
  commit("setDragging", value);
}

/**
 * Set selected preset index.
 * @param {Object} ctx
 * @param {Number} index
 */
export function setPreset({ commit, state }, index = -1) {
  const [, x, y] = state.presets[index] || [null, 0, 0];
  commit("setSelectedPreset", index);
  commit("setPresetSize", { x, y });
}

/**
 * Set selected zoom index.
 * @param {Object} ctx
 * @param {Number} index
 */
export function setZoom({ commit }, index = -1) {
  commit("setSelectedZoom", index);
}

/**
 * Set custom size dimensions.
 * @param {Object} ctx
 * @param {Number} payload.x
 * @param {Number} payload.y
 */
export function setCustomSize({ commit, state }, { x = 0, y = 0 }) {
  if (x === state.x && y === state.y) return;
  const range = clamp(100)(9999);
  return commit("setCustomSize", {
    x: x ? range(x) : state.x,
    y: y ? range(y) : state.y
  });
}

/**
 * Modify custom size dimensions with offset.
 * @param {Object} ctx
 * @param {Number} payload.x
 * @param {Number} payload.y
 */
export function modifySize({ dispatch, getters }, { x = 0, y = 0 }) {
  return dispatch("setCustomSize", {
    x: getters.size.x + x,
    y: getters.size.y + y
  });
}

/**
 * Update stage dimensions.
 * @param {Object} ctx
 * @param {Number} payload.x
 * @param {Number} payload.y
 */
export function updateStageSize({ commit, state }, { x, y }) {
  if (x === state.stageX && y === state.stageY) return;
  commit("setStageSize", { x, y });
}

/**
 * Rotate active dimensions.
 * @param {Object} ctx
 */
export function rotate({ commit, getters }) {
  const action = getters.hasPreset ? "setPresetSize" : "setCustomSize";
  commit(action, { x: getters.size.y, y: getters.size.x });
}

/**
 * Expand to stage size.
 * @param {ctx}
 * @param {Number} payload.x
 * @param {Number} payload.y
 */
export function expand({ dispatch, state }, { x = 0, y = 0 }) {
  dispatch("setCustomSize", {
    x: state.stageX * x,
    y: state.stageY * y
  });
}
