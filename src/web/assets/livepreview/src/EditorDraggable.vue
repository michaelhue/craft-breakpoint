<template>
  <div
    v-show="!hasPreset"
    :style="style"
    :data-axis="axisName"
    role="presentation"
    class="bp-draggable"
    @dblclick.prevent="expand({ x: 1, y: 1 })"
  >
    <div class="handle-x" @dblclick.stop="expand({ x: 1 })" />
    <div class="handle-y" @dblclick.stop="expand({ y: 1 })" />
  </div>
</template>

<script>
import Garnish from "garnish";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EditorDraggable",

  props: {
    handle: {
      type: Number,
      default: 20
    }
  },

  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      axis: { x: false, y: false }
    };
  },

  computed: {
    ...mapGetters(["screenSize", "size", "hasPreset", "dragging"]),

    style() {
      return {
        width: this.screenSize.x + this.handle + "px",
        height: this.screenSize.y + this.handle + "px",
        marginLeft: this.screenSize.x / -2 + "px"
      };
    },

    axisName() {
      const { x, y } = this.axis;
      if (!x && !y) return "none";
      else if (x && y) return "both";
      else return x ? "x" : "y";
    }
  },

  mounted() {
    this.$drag = new Garnish.BaseDrag(this.$el, {
      onDragStart: () => this.startDrag(this.$drag),
      onDrag: () => this.updateDrag(this.$drag),
      onDragStop: () => this.endDrag(this.$drag)
    });
  },

  beforeDestroy() {
    this.$drag.destroy();
    delete this.$drag;
  },

  methods: {
    ...mapActions(["modifySize", "setDragging", "expand"]),

    updateMouse(drag) {
      const { mouseX, mouseY } = drag;
      const deltaX = mouseX - this.mouseX;
      const deltaY = mouseY - this.mouseY;
      this.mouseX = mouseX;
      this.mouseY = mouseY;

      return { mouseX, mouseY, deltaX, deltaY };
    },

    updateAxis(mouseX, mouseY) {
      const { top, left, width, height } = this.$el.getBoundingClientRect();
      this.axis.x = left + width - this.handle <= mouseX;
      this.axis.y = top + height - this.handle <= mouseY;
    },

    startDrag(drag) {
      const { mouseX, mouseY } = this.updateMouse(drag);
      this.updateAxis(mouseX, mouseY);
      this.setDragging(true);
    },

    updateDrag(drag) {
      const { deltaX, deltaY } = this.updateMouse(drag);

      if (deltaX === 0 && deltaY === 0) return;
      this.modifySize({
        x: this.axis.x ? deltaX * 2 : 0,
        y: this.axis.y ? deltaY : 0
      });
    },

    endDrag() {
      this.axis.x = this.axis.y = false;
      this.setDragging(false);
    }
  }
};
</script>

<style scoped>
.bp-draggable {
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 0;
  z-index: 10;
  cursor: nwse-resize;
  background: rgba(0, 0, 0, 0.03) url(./img/resize.svg) no-repeat bottom right;
  border-radius: 0 2px 2px 2px;

  & >>> .handle-x,
  & >>> .handle-y {
    content: "";
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
  }
  & >>> .handle-x {
    top: 0;
    right: 0;
    bottom: 20px;
    width: 20px;
    cursor: ew-resize;
    background-image: url(./img/resize-x.svg);
    border-radius: 0 2px 2px 0;
  }
  & >>> .handle-y {
    bottom: 0;
    left: 0;
    right: 20px;
    height: 20px;
    cursor: ns-resize;
    background-image: url(./img/resize-y.svg);
    border-radius: 0 0 2px 2px;
  }

  &[data-axis="both"],
  &[data-axis="x"] >>> .handle-x,
  &[data-axis="y"] >>> .handle-y {
    background-color: rgba(0, 0, 20, 0.06);
  }
}
</style>
