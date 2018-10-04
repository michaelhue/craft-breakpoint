<template>
  <input
    :title="label"
    :aria-label="label"
    :value="value"
    :maxlength="maxlength"
    type="text"
    pattern="[0-9]+"
    @change="onChange"
    @focus="onFocus"
    @mouseup.prevent
    @keydown.shift.up.prevent="modify(+10)"
    @keydown.shift.down.prevent="modify(-10)"
    @keydown.up.prevent="modify(+1)"
    @keydown.down.prevent="modify(-1)">
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
    }
  },

  methods: {
    modify(mod) {
      this.$emit("change", this.value + mod);
    },

    onChange(e) {
      this.$emit("change", parseInt(e.target.value));
    },

    onFocus() {
      this.$el.select();
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
