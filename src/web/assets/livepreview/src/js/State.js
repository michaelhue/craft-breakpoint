import BaseState from "./BaseState";
import { percent, optionDivider, option } from "./util";

/**
 * Breakpoint state.
 */
const State = BaseState.extend({
  storeKey: "BreakpointState",
  storeProps: ["currentPreset", "x", "y", "presetX", "presetY"],

  _state: {
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
  },

  /**
   * GETTERS
   */
  get x() {
    return this._state.x;
  },

  get y() {
    return this._state.y;
  },

  get presets() {
    return this._state.presets;
  },

  get size() {
    return this.hasPreset ? this.presetSize : { x: this.x, y: this.y };
  },

  get presetSize() {
    return { x: this._state.presetX, y: this._state.presetY };
  },

  get zoomLevels() {
    return this._state.zoomLevels;
  },

  get currentPreset() {
    return this._state.currentPreset;
  },

  get zoom() {
    return this._state.zoom;
  },

  get hasPreset() {
    return this.currentPreset >= 0;
  },

  get presetOptions() {
    return this.presets.map(
      (p, i) => (p[0] === "---" ? optionDivider() : option(p[0], i))
    );
  },

  get zoomLevelOptions() {
    return this.zoomLevels.map(val => option(percent(val), val));
  },

  get fitScale() {
    return Math.min(
      1.0,
      this._state.stageX / this.size.x,
      this._state.stageY / this.size.y
    );
  },

  get scale() {
    return this.zoom > 0 ? this.zoom : this.fitScale;
  },

  get viewportCss() {
    return {
      width: this.size.x || "100%",
      height: this.size.y || "100%",
      transform: `scale(${this.scale})`
    };
  },

  get dragging() {
    return this._state.dragging;
  },

  /**
   * ACTIONS
   */
  setSize(param, size) {
    this.mutate({ [param]: Math.max(100, parseInt(size)) });
  },

  adjustSize(param, size) {
    this.setSize(param, this.size[param] + size);
  },

  setPreset(index) {
    const p = this.presets[index] || [null, 0, 0];

    this.mutate({
      presetX: p[1],
      presetY: p[2],
      currentPreset: parseInt(index)
    });
  },

  setZoom(level) {
    this.mutate({ zoom: parseFloat(level) || 1.0 });
  },

  rotate() {
    if (this.hasPreset) {
      this.mutate({ presetX: this.presetSize.y, presetY: this.presetSize.x });
    } else {
      this.mutate({ x: this.y, y: this.x });
    }
  },

  updateStage(el) {
    const stageX = $(el).innerWidth();
    const stageY = $(el).innerHeight();

    const x =
      !this.hasPreset && this._state.stageX === this.x ? stageX : this.x;
    const y =
      !this.hasPreset && this._state.stageY === this.y ? stageY : this.y;

    this.mutate({ stageX, stageY, x, y });
  },

  setDragging(state) {
    this.mutate({ dragging: !!state });
  }
});

export default State;
