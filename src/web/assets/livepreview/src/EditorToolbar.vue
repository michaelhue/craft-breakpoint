<template>
  <div
    class="breakpoint-toolbar"
    role="toolbar"
  >
    <ToolbarSelect
      :label="locale.presets"
      :options="presetOptions"
      :default-option="locale.responsive"
      @change="setPreset"
    />

    <ToolbarInput
      :label="locale.width"
      :value="size.x"
      :disabled="hasPreset"
      @change="x => setCustomSize({ x })"
    />

    <small role="presentation">×</small>

    <ToolbarInput
      :label="locale.height"
      :value="size.y"
      :disabled="hasPreset"
      @change="y => setCustomSize({ y })"
    />

    <ToolbarSelect
      :label="locale.zoom"
      :options="zoomOptions"
      :default-option="`${locale.fit} (${fitZoom})`"
      @change="setZoom"
    />

    <ToolbarButton
      :label="locale.rotate"
      :icon="iconRotate"
      @click="rotate()"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import locale from "./locale";
import ToolbarButton from "./ToolbarButton";
import ToolbarInput from "./ToolbarInput";
import ToolbarSelect from "./ToolbarSelect";
import iconRotate from "./img/rotate.svg";

export default {
  name: "EditorToolbar",

  components: {
    ToolbarButton,
    ToolbarInput,
    ToolbarSelect
  },

  data() {
    return {
      locale,
      iconRotate
    };
  },

  computed: mapGetters([
    "presetOptions",
    "zoomOptions",
    "size",
    "hasPreset",
    "fitScale",
    "fitZoom"
  ]),

  methods: mapActions(["setPreset", "setZoom", "setCustomSize", "rotate"])
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
  font-size: 12px;
  color: #576575;
  height: 38px;
  z-index: 20;

  & > * {
    margin: 0 7px;
  }

  & > small {
    display: block;
    margin: 0 -4px;
    opacity: 0.6;
    pointer-events: none;
    font-size: 14px;
  }

  & input,
  & select,
  & button {
    display: block;
    padding: 3px;
    border: 1px solid transparent;
    border-radius: 3px;
    font: inherit;
    line-height: 1;
    height: 24px;
    min-width: 24px;
    background-color: transparent;
    box-sizing: border-box;
    color: inherit;

    &[disabled] {
      opacity: 0.6;
    }
    &:not([disabled]) {
      background-color: rgba(0, 0, 0, 0.03);
    }
    &:not([disabled]):active {
      background-color: rgba(0, 0, 0, 0.08);
    }
    &:not([disabled]):hover {
      border-color: color-mod(#576575 alpha(25%));
    }
    &:not([disabled]):focus {
      border-color: #0d99f2;
      outline: none;
    }
  }
  & select {
    appearance: none;
    padding-left: 4px;
    padding-right: 14px;
    background-image: url("./img/chevron.svg");
    background-repeat: no-repeat;
    background-position: calc(100% - 4px) center;
  }
  /* ie fix */
  & select::-ms-expand {
    display: none;
  }
}
</style>
