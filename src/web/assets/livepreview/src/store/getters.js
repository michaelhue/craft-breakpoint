import { percent } from "../util";

export const enabled = state => state.enabled;

export const dragging = state => state.dragging;

export const presetOptions = state => state.presets.map(([name]) => name);

export const zoomOptions = state =>
  state.zoomLevels.map(x => Math.round(x * 100) + "%");

export const hasPreset = state => state.selectedPreset > -1;

export const presetSize = state => ({ x: state.presetX, y: state.presetY });

export const customSize = state => ({ x: state.x, y: state.y });

export const screenSize = (_, getters) => ({
  x: getters.size.x * getters.scale,
  y: getters.size.y * getters.scale
});

export const size = (_, getters) =>
  getters.hasPreset ? { ...getters.presetSize } : { ...getters.customSize };

export const zoom = state => state.zoomLevels[state.selectedZoom] || 0;

export const fitZoom = (_, getters) => percent(getters.fitScale);

export const fitScale = (state, getters) =>
  Math.min(1.0, state.stageX / getters.size.x, state.stageY / getters.size.y) ||
  1.0;

export const scale = (_, getters) => getters.zoom || getters.fitScale;
