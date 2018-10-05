<template>
  <button
    :title="label"
    type="button"
    @click="$emit('click')">
    <img
      :src="icon"
      role="presentation"
      class="icon">
  </button>
</template>

<script>
export default {
  name: "ToolbarButton",

  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
button {
  padding: 3px;
}

.icon {
  display: block;
  width: 16px;
  height: 16px;
}
</style>
