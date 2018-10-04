import Vue from "vue";
import { createStore } from "./store";
import LivePreviewButton from "./LivePreviewButton";
import LivePreviewEditor from "./LivePreviewEditor";

/**
 * Create button vnode.
 * @param {Object} store
 * @return {Vue}
 */
function createButton(store, props = {}) {
  return new Vue({
    store,
    render: h => h(LivePreviewButton, { props })
  });
}

/**
 * Create editor vnode.
 * @param {Vuex.Store} store
 * @param {Object} props
 * @return {Vue}
 */
function createEditor(store, props = {}) {
  return new Vue({
    store,
    render: h => h(LivePreviewEditor, { props })
  });
}

/**
 * Attach editor to Live Preview instance.
 * @param {Craft.LivePreview}
 * @param {Object} settings
 * @return {Vuex.Store}
 */
export default function attachTo(livePreview, settings = {}) {
  let button;
  let editor;

  const store = createStore(settings);

  // Live preview enter handler.
  livePreview.on("enter", () => {
    const { $editor, $iframe, $iframeContainer } = livePreview;
    const editorProps = { iframe: $iframe.get(0) };

    // Mount our components.
    editor = createEditor(store, editorProps).$mount();
    button = createButton(store).$mount();

    // Append button to target header.
    $editor.find("header > .btn:first-child").after(button.$el);

    // Insert editor into iframe container.
    $iframeContainer.append(editor.$el);
  });

  return store;
}
