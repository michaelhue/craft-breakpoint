import Vue from "vue";
import { createStore } from "./store";
import BreakpointEditor from "./BreakpointEditor";

if (process.env.NODE_ENV === "development") {
  Vue.config.devtools = true;
}

/**
 * Create editor vnode.
 * @param {Vuex.Store} store
 * @param {Object} props
 * @return {Vue}
 */
function createEditor(store, props) {
  return new Vue({
    store,
    render: h => h(BreakpointEditor, { props })
  });
}

/**
 * Attach editor to Live Preview instance.
 * @param {Craft.LivePreview}
 * @param {Object} settings
 * @return {Vue}
 */
export default function attachTo(livePreview, settings = {}) {
  let editor;

  // Live preview enter handler.
  livePreview.on("enter", () => {
    if (editor) return;

    const store = createStore(settings);
    const container = livePreview.$iframeContainer.get(0);
    const iframe = livePreview.$iframe.get(0);

    editor = createEditor(store, { iframe }).$mount();
    console.log(editor);
    container.appendChild(editor.$el);
  });

  return editor;
}
