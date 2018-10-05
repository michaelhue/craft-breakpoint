<template>
  <select
    v-model.number="model"
    :title="label"
    :disabled="disabled"
    @keydown.left.prevent="step(-1)"
    @keydown.right.prevent="step(+1)"
  >
    <option :value="-1">{{ defaultOption }}</option>
    <option
      v-if="!disabled"
      disabled
    >───</option>
    <option
      v-for="(opt, index) in options"
      :key="opt"
      :value="index"
    >{{ opt }}</option>
  </select>
</template>

<script>
import { clamp } from "./util";

export default {
  name: "ToolbarSelect",

  props: {
    label: {
      type: String,
      required: true
    },
    defaultOption: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: Number,
      required: true
    }
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(x) {
        this.$emit("change", x);
      }
    },

    disabled() {
      return this.options.length === 0;
    }
  },

  methods: {
    step(offset = 0) {
      const range = clamp(-1)(this.options.length - 1);
      const x = range(this.value + offset);
      this.$emit("change", x);
    }
  }
};
</script>
