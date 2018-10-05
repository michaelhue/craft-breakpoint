<template>
  <div
    :class="{ enabled, dragging }"
    class="breakpoint-editor"
    @dragstart.native="e => console.log('DRAGSTART', e)"
  >
    <EditorToolbar v-if="enabled" />
    <EditorStage>
      <EditorDraggable v-if="enabled" />
      <EditorViewport :iframe="iframe" />
    </EditorStage>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EditorDraggable from "./EditorDraggable";
import EditorToolbar from "./EditorToolbar";
import EditorStage from "./EditorStage";
import EditorViewport from "./EditorViewport";

export default {
  name: "BreakpointEditor",

  components: {
    EditorDraggable,
    EditorStage,
    EditorToolbar,
    EditorViewport
  },

  props: {
    iframe: {
      type: Object,
      required: true
    }
  },

  computed: mapGetters(["enabled", "dragging"])
};
</script>

<style scoped>
.breakpoint-editor {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
  overflow: hidden;
}

.dragging .breakpoint-editor {
  pointer-events: none;
}

.breakpoint-editor.enabled >>> .breakpoint-stage {
  top: 38px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  transition-property: top, left, right, bottom;
  transition-duration: 0.1s;
}

.breakpoint-editor.dragging >>> .bp-viewport {
  pointer-events: none;
}
</style>
