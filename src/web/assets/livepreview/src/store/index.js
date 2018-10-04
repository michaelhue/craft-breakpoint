import { Store } from "vuex";

const state = {
  enabled: false,
  presets: [],
  zoomLevels: [],
  currentPreset: -1,
  zoom: -1,
  userSize: { x: 0, y: 0 },
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
      enabled: state => state.enabled
    },

    actions: {
      toggle({ commit, getters }) {
        commit("setEnabled", !getters.enabled);
      }
    },

    mutations: {
      setEnabled(state, toggle) {
        state.enabled = !!toggle;
      }
    }
  });
}
