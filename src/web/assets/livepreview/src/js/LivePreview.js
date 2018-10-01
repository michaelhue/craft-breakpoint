import $ from "jquery";
import Craft from "craft";
import Garnish from "garnish";
import {
  toArray,
  t,
  percent,
  option,
  optionDivider,
  store,
  retrieve
} from "./util";

/**
 * BreakpointLivePreview plugin
 */
const BreakpointLivePreview = Garnish.Base.extend(
  {
    x: 0,
    y: 0,
    zoom: -1,
    currentPreset: -1,

    $root: null,
    $trigger: null,
    $viewport: null,

    _enabled: false,
    _livePreview: null,

    init(settings) {
      this.setSettings(settings, BreakpointLivePreview.defaults);

      Garnish.on(Craft.LivePreview, "enter", e => this.attach(e.target));
    },

    /**
     * Attach plugin to live preview instance.
     * @param {Craft.LivePreview} livePreview
     * @return {Boolean}
     */
    attach(livePreview) {
      // Make sure we attach only once per instance.
      if (this._livePreview) return false;
      this._livePreview = livePreview;

      // Render UI once.
      if (!this.$root) this._render();

      // Insert root container and move lp iframe into our viewport.
      livePreview.$iframeContainer.append(this.$root);
      livePreview.$iframe.appendTo(this.$viewport);

      // Append trigger button to editor.
      this.$trigger = $('<button class="btn bp-lp-trigger"/>')
        .attr("title", t("Toggle screen sizes"))
        .on("click", () => this.toggle())
        .insertAfter(livePreview.$editor.find(".header .btn").first());

      this.retrieve();
      this.update();

      // Make sure dimensions stay up-to-date.
      $(window).on("resize", e => this.update());

      return true;
    },

    /**
     * Toggle the preview.
     */
    toggle() {
      return this._enabled ? this.disable() : this.enable();
    },

    /**
     * Enable the preview.
     */
    enable() {
      this.$trigger.addClass("active");
      this.$root.addClass("bp-lp-active");
      this._enabled = true;
      this.update();
    },

    /**
     * Disable the preview.
     */
    disable() {
      this.$trigger.removeClass("active");
      this.$root.removeClass("bp-lp-active");
      this._enabled = false;
      this.update();
    },

    /**
     * Set viewport dimensions.
     * @param {Number} x
     * @param {Number} y
     */
    setSize(x, y) {
      this.x = parseInt(x);
      this.y = parseInt(y);
      this.update();
    },

    /**
     * Set a zoom level.
     * @param {Number} level
     */
    setZoom(level) {
      this.zoom = parseFloat(level);
      this.update();
    },

    /**
     * Set a preset by index.
     * @param {Number} index
     */
    setPreset(index) {
      const p = this.presets[index] || [null, 0, 0];
      this.currentPreset = index;
      this.setSize(p[1], p[2]);
      this.store();
    },

    /**
     * Rotate viewport.
     * @return {void}
     */
    rotate() {
      this.setSize(this.viewportSize.y, this.viewportSize.x);
    },

    /**
     * Update state.
     * @return {void}
     */
    update() {
      this.$viewport.css({
        width: this.isEnabled ? this.x || "100%" : "",
        height: this.isEnabled ? this.y || "100%" : "",
        transform:
          this.isEnabled && this.scale !== 1 ? `scale(${this.scale})` : ""
      });

      this.updateSizeInput("x");
      this.updateSizeInput("y");

      this.$zoom
        .find("option")
        .first()
        .text(t("Fit") + " (" + percent(this.fitScale) + ")");

      this.$presets
        .find("option")
        .attr("selected", false)
        .filter(`[value="${this.currentPreset}"]`)
        .attr("selected", true);
    },

    store() {
      store("Breakpoint.LivePreview.state", {
        currentPreset: this.currentPreset
      });
    },

    retrieve() {
      const state = retrieve("Breakpoint.LivePreview.state", {
        currentPreset: -1
      });

      this.setPreset(state.currentPreset);
    },

    /**
     * Update state of a size input.
     * @param {String} param
     * @return {$}
     */
    updateSizeInput(param) {
      $(this["$" + param])
        .val(this[param] || this.viewportSize[param])
        .attr("disabled", this.hasPreset);
    },

    /**
     * Check if plugin is enabled.
     * @return {Boolean}
     */
    get isEnabled() {
      return !!this._enabled;
    },

    /**
     * Get list of presets.
     * @return {Array}
     */
    get presets() {
      return toArray(this.settings.presets);
    },

    /**
     * Get list of zoom levels.
     * @return {Array}
     */
    get zoomLevels() {
      return toArray(this.settings.zoomLevels);
    },

    /**
     * Get viewport size.
     * @return {Object}
     */
    get viewportSize() {
      return { x: this.$viewport.width(), y: this.$viewport.height() };
    },

    /**
     * Get actual viewport scale.
     * @return {Number}
     */
    get scale() {
      return this.zoom > 0 ? this.zoom : this.fitScale;
    },

    /**
     * Get calculated scale fitting the viewport.
     * @return {Number}
     */
    get fitScale() {
      return Math.min(
        1.0,
        this.$stage.width() / this.x,
        this.$stage.height() / this.y
      );
    },

    /**
     * Check if current screen size is square.
     * @return {Boolean}
     */
    get isSquare() {
      return this.x === this.y;
    },

    /**
     * Check if a valid preset is selected.
     * @return {Boolean}
     */
    get hasPreset() {
      return this.currentPreset !== -1;
    },

    /**
     * Preset option elements.
     * @return {Array}
     */
    get presetOptions() {
      return this.presets.map(
        (p, i) => (p[0] === "---" ? optionDivider() : option(p[0], i))
      );
    },

    /**
     * Zoom level option elements.
     * @return {Array}
     */
    get zoomLevelOptions() {
      return this.zoomLevels.map(val => option(percent(val), val));
    },

    /**
     * Render the plugin's dom.
     */
    _render() {
      // Scaffolding
      const $root = $('<div class="bp-lp-root"/>');
      const $toolbar = $('<div class="bp-lp-toolbar"/>').appendTo($root);
      const $stage = $('<div class="bp-lp-stage"/>').appendTo($root);
      const $viewport = $('<div class="bp-lp-viewport"/>').appendTo($stage);

      const $presets = $('<select class="bp-lp-presets"/>')
        .attr("title", t("Presets"))
        .on("change", e => this.setPreset(parseInt(e.target.value)))
        .appendTo($toolbar)
        .append(option(t("Responsive"), -1))
        .append(optionDivider())
        .append(this.presetOptions);

      const $x = this._makeSizeInput("x", t("Width")).appendTo($toolbar);

      const $divider = $("<small>")
        .text("×")
        .appendTo($toolbar);

      const $y = this._makeSizeInput("y", t("Height")).appendTo($toolbar);

      const $zoom = $('<select class="bp-lp-zoom"/>')
        .attr("title", t("Zoom"))
        .on("change", e => this.setZoom(parseFloat(e.target.value)))
        .appendTo($toolbar)
        .append(option(t("Zoom"), -1))
        .append(optionDivider())
        .append(this.zoomLevelOptions);

      const $rotate = $('<button class="bp-lp-rotate"/>')
        .attr("title", t("Rotate"))
        //.attr("disabled", true)
        .on("click", e => this.rotate())
        .appendTo($toolbar);

      this.$root = $root;
      this.$viewport = $viewport;
      this.$stage = $stage;
      this.$zoom = $zoom;
      this.$presets = $presets;
      this.$rotate = $rotate;
      this.$x = $x;
      this.$y = $y;
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
          disabled: true,
          maxlength: 4
        })
        .val(0)
        .on("focus", e => e.target.select())
        .on("mouseup", e => e.preventDefault())
        .on("change", e => {
          this[param] = Math.abs(parseInt(e.target.value));
          this.update();
        })
        .on("keydown", e => {
          if (e.keyCode !== Garnish.UP_KEY && e.keyCode !== Garnish.DOWN_KEY)
            return;
          const step = e.shiftKey ? 10 : 1;
          const mod = e.keyCode === Garnish.UP_KEY ? 1 : -1;
          this[param] = this.viewportSize[param] + step * mod;
          this.update();
          e.preventDefault();
        });
    }
  },
  {
    defaults: {
      presets: [],
      zoomLevels: []
    }
  }
);

export default BreakpointLivePreview;
