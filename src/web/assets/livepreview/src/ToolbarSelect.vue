<template>
  <select
    v-model.number="model"
    :title="label"
    :disabled="disabled"
    @keydown.left.prevent="step(-1)"
    @keydown.right.prevent="step(+1)"
  >
    <option :value="-1">{{ defaultOption }}</option>
    <option disabled>───</option>

    <template v-for="(opt, index) in options">
      <option v-if="isDivider(opt)" :key="index" disabled>───</option>
      <option v-else :key="opt" :value="index">{{ opt }}</option>
    </template>
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
    },
    min: {
      type: Number,
      default: -1
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
    },

    max() {
      return this.options.length - 1;
    }
  },

  methods: {
    step(offset = 0) {
      const range = clamp(this.min)(this.max);
      const x = range(this.value + offset);

      // Skip by one offset if the requested option is a divider.
      if (this.isDivider(this.options[x]) && x !== this.min && x !== this.max) {
        return this.step(offset + offset);
      }

      this.$emit("change", x);
    },

    isDivider(label) {
      return label === "---";
    }
  }
};
</script>
