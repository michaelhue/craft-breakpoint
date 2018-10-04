<template>
  <input
    :title="label"
    :aria-label="label"
    :value="value"
    :maxlength="maxlength"
    :disabled="disabled"
    type="text"
    pattern="[0-9]+"
    @change="onChange"
    @focus="onFocus"
    @keydown.up.prevent="modify($event, +1)"
    @keydown.down.prevent="modify($event, -1)">
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
    min: {
      type: Number,
      default: 100
    },
    max: {
      type: Number,
      default: 9999
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    modify(e, delta) {
      const mod = e.shiftKey ? 10 : 1;
      this.$emit("change", this.sanizitedValue() + delta * mod);
    },

    onChange() {
      this.$emit("change", this.sanizitedValue());
    },

    onFocus() {
      this.$el.select();
    },

    sanizitedValue() {
      return parseInt(this.$el.value);
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
