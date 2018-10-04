<template>
  <div
    class="breakpoint-toolbar"
    role="toolbar">
    Toolbar
  </div>
</template>

<script>
export default {
  name: "EditorToolbar"
};
</script>

<style scoped>
.breakpoint-toolbar {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  flex: 0 0 auto;
  font-size: var(--input-size);
  color: var(--text);
  height: 38px;
  z-index: 20;
}
</style>
