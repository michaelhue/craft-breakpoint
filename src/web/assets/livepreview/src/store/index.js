import { Store } from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

/**
 * Default state.
 * @type {Object}
 */
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

/**
 * Create new store.
 * @param {Object} initial
 * @return {Store}
 */
export function createStore(initial = {}) {
  return new Store({
    state: { ...state, ...initial },
    actions,
    getters,
    mutations
  });
}
