import { Store } from "vuex";
import { clamp, percent } from "../util";

const state = {
  enabled: true,
  presets: [],
  zoomLevels: [],
  selectedPreset: -1,
  selectedZoom: -1,
  x: 0,
  y: 0,
  presetX: 0,
  presetY: 0,
  stageX: 0,
  stageY: 0,
  dragging: false
};

export function createStore(initial = {}) {
  return new Store({
    state: { ...state, ...initial },

    getters: {
      enabled: state => state.enabled,

      presetOptions: state => state.presets.map(([name]) => name),

      zoomOptions: state =>
        state.zoomLevels.map(x => Math.round(x * 100) + "%"),

      hasPreset: state => state.selectedPreset > -1,

      presetSize: state => ({ x: state.presetX, y: state.presetY }),

      customSize: state => ({ x: state.x, y: state.y }),

      size: (_, getters) =>
        getters.hasPreset
          ? { ...getters.presetSize }
          : { ...getters.customSize },

      screenSize: (_, getters) => ({
        x: getters.size.x * getters.scale,
        y: getters.size.y * getters.scale
      }),

      zoom: state => state.zoomLevels[state.selectedZoom] || 0,

      fitScale: (state, getters) =>
        Math.min(
          1.0,
          state.stageX / getters.size.x,
          state.stageY / getters.size.y
        ) || 1.0,

      fitZoom: (_, getters) => percent(getters.fitScale),

      scale: (_, getters) => getters.zoom || getters.fitScale,

      dragging: state => state.dragging
    },

    actions: {
      toggle({ commit, getters }) {
        commit("setEnabled", !getters.enabled);
      },

      setPreset({ commit, state }, index = -1) {
        const [, x, y] = state.presets[index] || [null, 0, 0];
        commit("setSelectedPreset", index);
        commit("setPresetSize", { x, y });
      },

      setZoom({ commit }, index = -1) {
        commit("setSelectedZoom", index);
      },

      setCustomSize({ commit, state }, { x, y }) {
        const range = clamp(100)(9999);
        return commit("setCustomSize", {
          x: range(x) || state.x,
          y: range(y) || state.y
        });
      },

      modifySize({ dispatch, state }, { x, y }) {
        return dispatch("setCustomSize", {
          x: state.x + x,
          y: state.y + y
        });
      },

      updateStageSize({ commit, state }, size) {
        commit("setStageSize", size);

        if (state.x === 0 && state.y === 0) {
          commit("setCustomSize", size);
        }
      },

      rotate({ commit, getters }) {
        const action = getters.hasPreset ? "setPresetSize" : "setCustomSize";
        commit(action, { x: getters.size.y, y: getters.size.x });
      },

      setDragging({ commit }, value) {
        commit("setDragging", value);
      }
    },

    mutations: {
      setEnabled(state, value) {
        state.enabled = !!value;
      },

      setSelectedPreset(state, index) {
        state.selectedPreset = index;
      },

      setSelectedZoom(state, index) {
        state.selectedZoom = index;
      },

      setCustomSize(state, { x, y }) {
        state.x = x;
        state.y = y;
      },

      setPresetSize(state, { x, y }) {
        state.presetX = x;
        state.presetY = y;
      },

      setStageSize(state, { x, y }) {
        state.stageX = x;
        state.stageY = y;
      },

      setDragging(state, value) {
        state.dragging = !!value;
      }
    }
  });
}
