<template>
  <select
    :title="label"
    :disabled="disabled"
    @change="onChange"
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
    disabled() {
      return this.options.length === 0;
    }
  },

  methods: {
    onChange(e) {
      this.$emit("change", parseInt(e.target.value));
    }
  }
};
</script>
