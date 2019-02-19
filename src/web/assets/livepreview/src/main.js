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

    // Initialize Vuex store.
    const store = createStore(settings);

    // Create a dummy iframe for Craft to replace.
    if (!livePreview.$iframe) {
      livePreview.$iframe = $('<iframe class="lp-iframe">')
        .appendTo(livePreview.$iframeContainer);
    }

    // Get livepreview elements.
    const container = livePreview.$iframeContainer.get(0);
    const iframe = livePreview.$iframe.get(0);

    // Create our custom editor.
    editor = createEditor(store, { iframe }).$mount();

    container.appendChild(editor.$el);
  });

  return editor;
}
