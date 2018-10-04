<template>
  <div
    v-show="!hasPreset"
    :style="style"
    class="bp-draggable" />
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EditorDraggable",

  computed: {
    ...mapGetters(["screenSize", "hasPreset"]),

    style() {
      return {
        width: this.screenSize.x + 20 + "px",
        height: this.screenSize.y + 20 + "px",
        marginLeft: this.screenSize.x / -2 + "px"
      };
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
