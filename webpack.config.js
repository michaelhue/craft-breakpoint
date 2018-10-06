const MiniCssExtract = require("mini-css-extract-plugin");
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");
const UglifyJs = require("uglifyjs-webpack-plugin");
const VueLoader = require("vue-loader/lib/plugin");
const resolve = p => require("path").resolve("src/web/assets", p);

module.exports = env => ({
  mode: env.production ? "production" : "development",
  target: "web",
  devtool: "source-map",
  entry: {
    livepreview: resolve("livepreview/src/main.js")
  },
  resolve: {
    extensions: [".vue", ".js", ".css"]
  },
  output: {
    path: resolve("."),
    filename: "[name]/dist/[name].js",
    library: "BreakpointLivePreview",
    libraryExport: "default",
    libraryTarget: "var"
  },
  externals: {
    craft: "Craft",
    garnish: "Garnish",
    vue: "Vue",
    vuex: "Vuex"
  },
  optimization: {
    nodeEnv: env.production ? "production" : "development",
    minimize: env.production,
    minimizer: [
      new UglifyJs({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssets()
    ]
  },
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
      filename: "[name]/dist/[name].css"
    }),
    new VueLoader({
      preserveWhitespace: false
    })
  ]
});
