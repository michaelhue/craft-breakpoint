<template>
  <div 
    :class="{ enabled }" 
    class="breakpoint-editor">
    <EditorToolbar v-if="enabled" />
    <EditorStage>
      <EditorViewport :iframe="iframe" />
    </EditorStage>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EditorToolbar from "./EditorToolbar";
import EditorStage from "./EditorStage";
import EditorViewport from "./EditorViewport";

export default {
  name: "LivePreviewEditor",

  components: {
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

  computed: {
    ...mapGetters(["enabled"])
  }
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
</style>
