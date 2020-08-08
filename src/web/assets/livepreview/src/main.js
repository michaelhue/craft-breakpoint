import Vue from "vue";
import { createStore } from "./store";
import BreakpointEditor from "./BreakpointEditor";

if (process.env.NODE_ENV === "development") {
  // Enable vue debugging in dev build.
  // Disabled for now since it triggers errors in vue-devtools@5.*
  // https://github.com/vuejs/vue-devtools/issues/874
  // Vue.config.devtools = true;
}

/**
 * Name of the property for attaching the plugin to Craft.Preview.
 * @type {String}
 */
export const BREAKPOINT_PROP = "__breakpoint";

/**
 * Initialize the editor on a preview instance.
 * @param {Craft.Preview} target
 * @param {Object} settings
 * @return {void}
 */
function initEditor(target, settings) {
  if (target[BREAKPOINT_PROP] !== undefined) {
    return;
  }

  const container = target.$previewContainer.get(0);

  const iframe = target.$iframeContainer
    ? target.$iframeContainer.get(0)
    : target.$iframe.get(0);

  const store = createStore(settings);
  const editor = createEditor(store, { iframe }).$mount();

  container.appendChild(editor.$el);
  target[BREAKPOINT_PROP] = editor;
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
 * Returns an object with method overloads for the Craft.Preview object.
 * @param {Object} settings
 * @return {Object} An object with overloading functions.
 */
function overloadPreview(settings) {
  return {
    // Hook into the init function to attach an event listener.
    init(...args) {
      // Let preview initalize normally.
      this.base(...args);

      // Wait for iframe updates for initializing the editor.
      this.on("afterUpdateIframe", () => {
        try {
          initEditor(this, settings);
        } catch (err) {
          console.info("[michaelhue/craft-breakpoint]", err);
        }
      });
    }
  };
}

/**
 * Attach editor to Craft.Preview object.
 * @param {Craft.Preview} preview
 * @param {Object} settings
 * @return void
 */
export default function attachTo(preview, settings = {}) {
  preview.implement(overloadPreview(settings));
}
