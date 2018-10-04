<template>
  <div class="breakpoint-stage">
    <slot />
  </div>
</template>

<script>
import Garnish from "garnish";
import { mapActions } from "vuex";

export default {
  name: "EditorStage",

  mounted() {
    Garnish.$win.on("resize", this.update);
    this.update();
  },

  beforeDestroy() {
    Garnish.$win.off("resize", this.update);
  },

  methods: {
    ...mapActions(["updateStageSize"]),

    update() {
      this.updateStageSize({
        x: this.$el.offsetWidth,
        y: this.$el.offsetHeight
      });
    }
  }
};
</script>

<style scoped>
.breakpoint-stage {
  position: absolute;
  z-index: 30;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: column nowrap;
}
</style>
