import $ from "jquery";
import Craft from "craft";
import Garnish from "garnish";
import State from "./State";
import Toolbar from "./Toolbar";
import { t } from "./util";

/**
 * BreakpointLivePreview plugin
 */
const BreakpointLivePreview = Garnish.Base.extend(
  {
    dragStartX: 0,
    dragStartY: 0,
    dragDirection: null,

    $root: null,
    $trigger: null,
    $viewport: null,
    $drag: null,
    _livePreview: null,

    init(settings) {
      this.setSettings(settings, BreakpointLivePreview.defaults);
      this.state = new State(this.settings);
      this.toolbar = new Toolbar(this.state);

      // Handle state updates.
      this.state.on("update", () => {
        this.update();
        this.state.save();
      });

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
      if (!this.$root) this.render();

      // Insert root container and move lp iframe into our viewport.
      livePreview.$iframeContainer.append(this.$root);
      livePreview.$iframe.appendTo(this.$viewport);

      // Append trigger button to editor.
      this.$trigger = $('<button class="btn bp-lp-trigger"/>')
        .attr("title", t("Toggle screen sizes"))
        .on("click", () => this.toggle())
        .insertAfter(livePreview.$editor.find(".header .btn").first());

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
      this._enabled = true;
      this.$trigger.addClass("active");
      this.$root.addClass("bp-lp-active");

      this.addListener(Garnish.$win, "resize", this.onResize);
      this.onResize();

      this.state.load();
      this.state.scheduleUpdate();
    },

    /**
     * Disable the preview.
     */
    disable() {
      this._enabled = false;
      this.$trigger.removeClass("active");
      this.$viewport.removeAttr("style");
      this.$root.removeClass("bp-lp-active");

      this.removeListener(Garnish.$win, "resize", this.onResize);
    },

    /**
     * Render elements.
     */
    render() {
      this.$root = $('<div class="bp-lp-root"/>');
      this.$toolbar = this.toolbar.render().appendTo(this.$root);
      this.$stage = $('<div class="bp-lp-stage"/>').appendTo(this.$root);

      this.$drag = $('<div class="bp-lp-dragger">').appendTo(this.$stage);
      this.$viewport = $('<div class="bp-lp-viewport"/>').appendTo(this.$stage);

      this.dragger = new Garnish.BaseDrag(this.$drag, {
        onDragStart: () => this.onDragStart(),
        onDrag: () => this.onDrag(),
        onDragStop: () => this.onDragEnd()
      });
    },

    /**
     * Update elements, triggered by state changes.
     */
    update() {
      this.$viewport.css(this.state.viewportCss);

      this.$root.toggleClass("dragging", this.state.dragging);

      const screenX = this.state.x * this.state.scale;
      const screenY = this.state.y * this.state.scale;

      this.$drag
        .css({
          width: screenX + 20,
          height: screenY + 20,
          marginLeft: screenX / -2
        })
        .toggle(!this.state.hasPreset);
    },

    /**
     * Handle browser resizes.
     */
    onResize() {
      this.state.updateStage(this.$stage);
    },

    /**
     * Drag start handler.
     * @todo refactor
     */
    onDragStart() {
      this.dragStartX = this.dragger.mouseX;
      this.dragStartY = this.dragger.mouseY;
      this.state.setDragging(true);

      const dragRect = this.$drag.get(0).getBoundingClientRect();
      const { realMouseX, realMouseY } = this.dragger;

      const isOnX = dragRect.x + dragRect.width - 20 <= realMouseX;
      const isOnY = dragRect.y + dragRect.height - 20 <= realMouseY;

      if (isOnX && !isOnY) {
        this.dragDirection = "x";
      } else if (isOnY && !isOnX) {
        this.dragDirection = "y";
      } else {
        this.dragDirection = null;
      }

      this.$drag.attr("data-axis", this.dragDirection || "both");
    },

    /**
     * Drag update handler.
     * @todo refactor
     */
    onDrag() {
      const deltaX = this.dragger.mouseX - this.dragStartX;
      const deltaY = this.dragger.mouseY - this.dragStartY;

      if (this.dragDirection === null || this.dragDirection === "x") {
        this.state.adjustSize("x", deltaX * 2);
      }
      if (this.dragDirection === null || this.dragDirection === "y") {
        this.state.adjustSize("y", deltaY);
      }

      this.dragStartX = this.dragger.mouseX;
      this.dragStartY = this.dragger.mouseY;
    },

    /**
     * Drag end handler.
     * @todo refactor
     */
    onDragEnd() {
      this.state.setDragging(false);
      this.$drag.removeAttr("data-axis");
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
