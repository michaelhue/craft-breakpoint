import { clamp } from "../util";

export function toggle({ commit, getters }) {
  commit("setEnabled", !getters.enabled);
}

export function setPreset({ commit, state }, index = -1) {
  const [, x, y] = state.presets[index] || [null, 0, 0];
  commit("setSelectedPreset", index);
  commit("setPresetSize", { x, y });
}

export function setZoom({ commit }, index = -1) {
  commit("setSelectedZoom", index);
}

export function setCustomSize({ commit, state }, { x, y }) {
  const range = clamp(100)(9999);
  return commit("setCustomSize", {
    x: range(x) || state.x,
    y: range(y) || state.y
  });
}

export function modifySize({ dispatch, state }, { x, y }) {
  return dispatch("setCustomSize", {
    x: state.x + x,
    y: state.y + y
  });
}

export function updateStageSize({ commit, state }, size) {
  commit("setStageSize", size);

  if (state.x === 0 && state.y === 0) {
    commit("setCustomSize", size);
  }
}

export function rotate({ commit, getters }) {
  const action = getters.hasPreset ? "setPresetSize" : "setCustomSize";
  commit(action, { x: getters.size.y, y: getters.size.x });
}

export function setDragging({ commit }, value) {
  commit("setDragging", value);
}
