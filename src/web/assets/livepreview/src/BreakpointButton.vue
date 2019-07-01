<template>
  <button
    :class="{ active: enabled }"
    :title="label"
    class="bp-button btn"
    type="button"
    @click="toggle"
  >
    <img
      src="./img/devices.svg"
      alt="Devices icon"
    >
  </button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import locale from "./locale";

export default {
  name: "BreakpointButton",

  data() {
    return {
      label: locale.toggle,
      insertAfter: ".lp-editor-container > header > .btn"
    };
  },

  computed: mapGetters(["enabled"]),

  mounted() {
    // Move the element outside.
    const target = document.querySelector(this.insertAfter);
    target.after(this.$el);
  },

  methods: mapActions(["toggle"])
};
</script>

<style scoped>
.bp-button {
  position: relative;
  width: 32px;
  margin: 0 5px;
  padding: 7px;
}

.bp-button.active >>> *,
.bp-button:active >>> * {
  opacity: 0.6;
}
</style>
