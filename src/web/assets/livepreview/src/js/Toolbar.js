import $ from "jquery";
import Garnish from "garnish";
import { t, percent } from "./util";

const BreakpointToolbar = Garnish.Base.extend({
  state: null,

  $root: null,
  $presets: null,
  $x: null,
  $y: null,
  $divider: null,
  $fitZoomOption: null,
  $zoom: null,
  $rotate: null,

  /**
   * Initialize with state.
   * @param {State} state
   */
  init(state) {
    this.state = state;
    this.state.on("update", () => this.update());
  },

  /**
   * Render interface elements.
   */
  render() {
    this.$root = $('<div class="bp-lp-toolbar"/>');

    this.$presets = $('<select class="bp-lp-presets"/>')
      .attr("title", t("Presets"))
      .on("change", e => this.state.setPreset(e.target.value))
      .append(this._makeOption(t("Responsive"), -1))
      .append(this._makeDividerOption())
      .append(this.state.presetOptions)
      .appendTo(this.$root);

    this.$x = this._makeSizeInput("x", t("Width")).appendTo(this.$root);

    this.$divider = $("<small>")
      .text("×")
      .appendTo(this.$root);

    this.$y = this._makeSizeInput("y", t("Height")).appendTo(this.$root);

    this.$fitZoomOption = this._makeOption(t("Zoom"), -1);

    this.$zoom = $('<select class="bp-lp-zoom"/>')
      .attr("title", t("Zoom"))
      .on("change", e => this.state.setZoom(e.target.value))
      .append(this.$fitZoomOption)
      .append(this._makeDividerOption())
      .append(this.state.zoomLevelOptions)
      .appendTo(this.$root);

    this.$rotate = $('<button class="bp-lp-rotate"/>')
      .attr("title", t("Rotate"))
      .on("click", e => this.state.rotate())
      .appendTo(this.$root);

    return this.$root;
  },

  /**
   * Update elements.
   */
  update() {
    if (!this.$root) return;

    const { size, hasPreset, currentPreset, zoom, fitScale } = this.state;

    this._updateSizeInput(this.$x, size.x, hasPreset);
    this._updateSizeInput(this.$y, size.y, hasPreset);

    this._updateSelected(this.$zoom, zoom);
    this._updateSelected(this.$presets, currentPreset);

    this.$fitZoomOption.text(t("Fit") + " (" + percent(fitScale) + ")");

    this.$rotate.attr("disabled", size.x === size.y);
  },

  /**
   * Create a screen size input.
   * @param {String} param Screen dimension, 'x' or 'y'..
   * @param {String} title Input title attribute.
   * @return {$}
   */
  _makeSizeInput(param, title) {
    return $("<input/>")
      .addClass("bp-lp-size-" + param)
      .attr({
        title,
        maxlength: 4
      })
      .on("focus", e => e.target.select())
      .on("mouseup", e => e.preventDefault())
      .on("change", e => this.state.setSize(param, e.target.value))
      .on("keydown", e => {
        if (e.keyCode !== Garnish.UP_KEY && e.keyCode !== Garnish.DOWN_KEY)
          return;
        const step = e.shiftKey ? 10 : 1;
        const mod = e.keyCode === Garnish.UP_KEY ? 1 : -1;
        this.state.adjustSize(param, step * mod);
        e.preventDefault();
      });
  },

  /**
   * Make option element.
   * @param {String} label
   * @param {*} val
   * @return {$}
   */
  _makeOption(label, val = null) {
    return $("<option>")
      .text(label)
      .attr("value", val);
  },

  /**
   * Make a disabled divider option element.
   * @return {$}
   */
  _makeDividerOption() {
    return this._makeOption("───").attr("disabled", true);
  },

  /**
   * Update state of a size input.
   * @param {String} param
   * @return {$}
   */
  _updateSizeInput(el, val, disabled) {
    el.val(val).attr("disabled", disabled);
  },

  /**
   * Update the selected option of a select element.
   * @param {$} el
   * @param {*} val
   * @return {$}
   */
  _updateSelected(el, val) {
    return el
      .find("option")
      .prop("selected", false)
      .filter(`[value="${val}"]`)
      .prop("selected", true);
  }
});

export default BreakpointToolbar;
