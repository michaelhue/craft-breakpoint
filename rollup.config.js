import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/web/assets/livepreview/src/js/LivePreview.js",
  output: {
    format: "iife",
    file: "src/web/assets/livepreview/dist/LivePreview.min.js",
    name: "BreakpointLivePreview",
    sourcemap: true,
    globals: {
      craft: "Craft",
      garnish: "Garnish",
      jquery: "jQuery"
    }
  },
  external: ["craft", "garnish", "jquery"],
  plugins: [
    babel(),
    uglify({
      sourcemap: { root: "src/web/assets/livepreview/src" }
    })
  ]
};
