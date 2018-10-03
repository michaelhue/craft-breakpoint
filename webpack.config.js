const MiniCssExtract = require("mini-css-extract-plugin");
const VueLoader = require("vue-loader/lib/plugin");
const resolve = p => require("path").resolve("src/web/assets", p);

module.exports = {
  entry: {
    "live-preview": resolve("livepreview/src/main.js")
  },
  output: {
    path: resolve("livepreview/dist"),
    filename: "[name].js",
    library: "BreakpointLivePreview"
  },
  externals: {
    craft: "Craft",
    garnish: "Garnish",
    jquery: "jQuery",
    vue: "Vue",
    vuex: "Vuex"
  },
  resolve: {
    extensions: [".vue", ".js", ".css"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: [MiniCssExtract.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.(svg|png)$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [
    new MiniCssExtract({
      filename: "[name].css"
    }),
    new VueLoader()
  ]
};
