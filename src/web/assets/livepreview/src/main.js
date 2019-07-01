import Vue from "vue";
import { createStore } from "./store";
import BreakpointEditor from "./BreakpointEditor";

if (process.env.NODE_ENV === "development") {
  Vue.config.devtools = true;
}

/**
 * Name of the property for attaching the plugin to Craft.Preview.
 * @type {String}
 */
export const BREAKPOINT_PROP = '__breakpoint';

/**
 * Returns an object with method overloads for the Craft.Preview object.
 * @param {Object} settings
 * @return {Object} An object with overloading functions.
 */
function overloadPreview(settings) {
  return {
    // We use Preview.afterUpdateIframe to create our custom editor since at
    // this point all necessary elements are created and accessible.
    // If an error occurs somewhere we will just bail out and log to console.
    afterUpdateIframe(...args) {
      try {
        if (this[BREAKPOINT_PROP] === undefined) {
          const container = this.$previewContainer.get(0);
          const iframe = this.$iframe.get(0);

          const store = createStore(settings);
          const editor = createEditor(store, { iframe }).$mount();

          container.appendChild(editor.$el);
          this[BREAKPOINT_PROP] = editor;
        }
      } catch (err) {
        console.info('[michaelhue/craft-breakpoint]', err);
      }

      // Resume normal operations
      return this.base(...args);
    }
  };
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
 * Attach editor to Craft.Preview object.
 * @param {Craft.Preview} preview
 * @param {Object} settings
 * @return void
 */
export default function attachTo(preview, settings = {}) {
  preview.implement(overloadPreview(settings));
}
