import { percent } from "../util";

/**
 * Get enabled/disabled state.
 * @return {Boolean}
 */
export const enabled = state => state.enabled;

/**
 * Get dragging state.
 * @return {Boolean}
 */
export const dragging = state => state.dragging;

/**
 * Get preset option names.
 * @return {Array}
 */
export const presetOptions = state => state.presets.map(([name]) => name);

/**
 * Get zoom option percentages.
 * @return {Array}
 */
export const zoomOptions = state =>
  state.zoomLevels.map(x => Math.round(x * 100) + "%");

/**
 * Check if a preset is selected.
 * @return {Boolean}
 */
export const hasPreset = state => state.selectedPreset > -1;

/**
 * Get selected preset index.
 * @return {Number}
 */
export const selectedPreset = state => state.selectedPreset;

/**
 * Get selected zoom index.
 * @return {Number}
 */
export const selectedZoom = state => state.selectedZoom;

/**
 * Get preset dimensions.
 * @return {Object}
 */
export const presetSize = state => ({ x: state.presetX, y: state.presetY });

/**
 * Get custom dimensions.
 * @return {Object}
 */
export const customSize = state => ({ x: state.x, y: state.y });

/**
 * Get actual screen-size dimensions.
 * @return {Object}
 */
export const screenSize = (_, getters) => ({
  x: getters.size.x * getters.scale,
  y: getters.size.y * getters.scale
});

/**
 * Get active dimensions.
 * @return {Object}
 */
export const size = (_, getters) =>
  getters.hasPreset ? getters.presetSize : getters.customSize;

/**
 * Get selected zoom level.
 * @return {Number}
 */
export const zoom = state => state.zoomLevels[state.selectedZoom] || 0;

/**
 * Get fit zoom level in percent.
 * @return {String}
 */
export const fitZoom = (_, getters) => percent(getters.fitScale);

/**
 * Get scale for fitting current size into stage.
 * @return {Number}
 */
export const fitScale = (state, getters) =>
  Math.min(1.0, state.stageX / getters.size.x, state.stageY / getters.size.y) ||
  1.0;

/**
 * Get active scale.
 * @return {Number}
 */
export const scale = (_, getters) => getters.zoom || getters.fitScale;
