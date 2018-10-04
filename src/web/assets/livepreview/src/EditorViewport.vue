<template>
  <div
    :style="style"
    class="breakpoint-viewport" />
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EditorViewport",

  props: {
    iframe: {
      type: Object,
      required: true,
      validate: x => x instanceof HTMLElement
    }
  },

  computed: {
    ...mapGetters(["enabled", "size", "scale"]),

    style() {
      const { x, y } = this.size;
      const transform = "scale(" + this.scale.toFixed(3) + ")";

      return !this.enabled
        ? {}
        : {
            width: x ? `${x}px` : "100%",
            height: y ? `${y}px` : "100%",
            transform
          };
    }
  },

  mounted() {
    // Move outside iframe to component.
    this.$el.appendChild(this.iframe);
  }
};
</script>

<style scoped>
.breakpoint-viewport {
  position: relative;
  z-index: 20;
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
  align-self: center;
  background: #fff;
  transform-origin: 50% 0;
  transform: scale(1);
}
.breakpoint-viewport {
  outline: 1px solid rgba(0, 0, 20, 0.2);
  box-shadow: 0 1px 16px rgba(0, 0, 20, 0.2);
}
</style>
