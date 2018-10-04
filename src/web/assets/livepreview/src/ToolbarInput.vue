<template>
  <input
    :title="label"
    :aria-label="label"
    :value="value"
    :maxlength="maxlength"
    :disabled="disabled"
    type="text"
    pattern="[0-9]+"
    @focus="e => e.target.focus()"
    @change="change()"
    @keydown.up.prevent="change(+1, $event.shiftKey)"
    @keydown.down.prevent="change(-1, $event.shiftKey)">
</template>

<script>
export default {
  name: "ToolbarInput",

  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: Number,
      default: 0
    },
    maxlength: {
      type: Number,
      default: 4
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    change(offset = 0, shift = false) {
      const mod = shift ? 10 : 1;
      this.$emit("change", offset * mod + parseInt(this.$el.value));
    }
  }
};
</script>

<style scoped>
input {
  width: 42px;
  text-align: center;
}

input:not([disabled]):focus,
input:not([disabled]):active {
  background-color: #fff;
}
</style>
