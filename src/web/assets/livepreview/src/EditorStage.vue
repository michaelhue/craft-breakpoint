<template>
  <div class="breakpoint-stage">
    <slot />
  </div>
</template>

<script>
export default {
  name: "EditorStage"
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
