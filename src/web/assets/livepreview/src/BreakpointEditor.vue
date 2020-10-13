<template>
  <div :class="{ enabled, dragging }" class="bp-editor">
    <BreakpointButton />

    <EditorToolbar v-if="enabled" />

    <EditorStage>
      <EditorDraggable v-if="enabled" />
      <EditorViewport :iframe="iframe" />
    </EditorStage>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BreakpointButton from "./BreakpointButton";
import EditorDraggable from "./EditorDraggable";
import EditorToolbar from "./EditorToolbar";
import EditorStage from "./EditorStage";
import EditorViewport from "./EditorViewport";

export default {
  name: "BreakpointEditor",

  components: {
    BreakpointButton,
    EditorDraggable,
    EditorStage,
    EditorToolbar,
    EditorViewport,
  },

  props: {
    iframe: {
      type: Object,
      required: true,
    },
  },

  computed: mapGetters(["enabled", "dragging"]),
};
</script>

<style scoped>
.bp-editor {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f7f7f7;
  overflow: hidden;
}

.lp-preview-container .lp-preview-header + .bp-editor {
  top: 51px;
}

.dragging .bp-editor {
  pointer-events: none;
}

.bp-editor.enabled >>> .bp-stage {
  top: 38px;
  left: 20px;
  right: 20px;
  bottom: 20px;
}

.bp-editor.dragging >>> .bp-viewport {
  pointer-events: none;
}
</style>
