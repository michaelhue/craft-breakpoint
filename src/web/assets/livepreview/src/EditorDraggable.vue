<template>
  <div
    v-show="!hasPreset"
    :style="style"
    :data-axis="axis"
    class="bp-draggable"
    @dragstart.native="e => console.log('DRAGSTART', e)" />
</template>

<script>
import { BaseDrag } from "garnish";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EditorDraggable",

  data() {
    return {
      dragStartX: 0,
      dragStartY: 0,
      dragDirection: null
    };
  },

  computed: {
    ...mapGetters(["screenSize", "size", "hasPreset", "dragging"]),

    style() {
      return {
        width: this.screenSize.x + 20 + "px",
        height: this.screenSize.y + 20 + "px",
        marginLeft: this.screenSize.x / -2 + "px"
      };
    },

    axis() {
      if (!this.dragging) return null;
      return this.dragDirection || 'both';
    }
  },

  mounted() {
    this._dragger = new BaseDrag(this.$el, {
      onDragStart: () => this.onDragStart(),
      onDrag: () => this.onDrag(),
      onDragStop: () => this.onDragEnd()
    });
  },

  beforeDestroy() {
    this._dragger.destroy();
    delete this._dragger;
  },

  methods: {
    ...mapActions(["setCustomSize", "setDragging"]),

    onDragStart() {
      this.dragStartX = this._dragger.mouseX;
      this.dragStartY = this._dragger.mouseY;

      const dragRect = this.$el.getBoundingClientRect();
      const { realMouseX, realMouseY } = this._dragger;

      const isOnX = dragRect.x + dragRect.width - 20 <= realMouseX;
      const isOnY = dragRect.y + dragRect.height - 20 <= realMouseY;

      if (isOnX && !isOnY) {
        this.dragDirection = "x";
      } else if (isOnY && !isOnX) {
        this.dragDirection = "y";
      } else {
        this.dragDirection = null;
      }

      this.setDragging(true);
    },

    onDrag() {
      const deltaX = this._dragger.mouseX - this.dragStartX;
      const deltaY = this._dragger.mouseY - this.dragStartY;
      let newSize = {};

      if (this.dragDirection === null || this.dragDirection === "x") {
        newSize.x = deltaX * 2 + this.size.x;
      }
      if (this.dragDirection === null || this.dragDirection === "y") {
        newSize.y = deltaY + this.size.y;
      }

      this.setCustomSize(newSize);
      this.dragStartX = this._dragger.mouseX;
      this.dragStartY = this._dragger.mouseY;
    },

    onDragEnd() {
      this.dragDirection = null;
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

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
  }
  &::before {
    top: 0;
    right: 0;
    bottom: 20px;
    width: 20px;
    cursor: ew-resize;
    background-image: url(./img/resize-x.svg);
    border-radius: 0 2px 2px 0;
  }
  &::after {
    bottom: 0;
    left: 0;
    right: 20px;
    height: 20px;
    cursor: ns-resize;
    background-image: url(./img/resize-y.svg);
    border-radius: 0 0 2px 2px;
  }

  &[data-axis="both"],
  &[data-axis="x"]::before,
  &[data-axis="y"]::after {
    background-color: rgba(0, 0, 20, 0.06);
  }
}
</style>
