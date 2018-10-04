<template>
  <button
    :class="{ active: enabled }"
    :title="title"
    class="breakpoint-button btn"
    type="button"
    @click="toggle">
    <img 
      src="./img/devices.svg" 
      alt="Devices icon">
  </button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import locale from "./locale";

export default {
  name: "LivePreviewButton",

  data() {
    return {
      title: locale.toggle
    };
  },

  computed: mapGetters(["enabled"]),

  methods: mapActions(["toggle"])
};
</script>

<style scoped>
button {
  position: relative;
  width: 32px;
  margin: 0 5px;
  padding: 7px;
}

button.active > *,
button:active > * {
  opacity: 0.6;
}
</style>
