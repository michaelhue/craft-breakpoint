import { Store } from "vuex";

const state = {
  enabled: true,
  presets: [],
  zoomLevels: [],
  currentPreset: -1,
  zoom: -1,
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

      zoomOptions: state => state.zoomLevels.map(x => Math.round(x * 100) + "%")
    },

    actions: {
      toggle({ commit, getters }) {
        commit("setEnabled", !getters.enabled);
      }
    },

    mutations: {
      setEnabled(state, value) {
        state.enabled = !!value;
      }
    }
  });
}
