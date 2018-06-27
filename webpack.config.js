const path = require("path");
const webpack = require("webpack");;
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";
const paths = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist")
};

let plugins = [
  new CleanWebpackPlugin(paths.dist),
  new HtmlWebpackPlugin({
    template: path.join(paths.src, "html", "app.html"),
    filename: path.join(paths.dist, "index.html"),
    inject: true,
    hash: false,
    minify: {
      removeComments: devMode ? false : true,
      collapseWhitespace: devMode ? false : true,
      minifyJS: devMode ? false : true,
      minifyCSS: devMode ? false : true
    }
  })
];

module.exports = {
  mode: devMode ? "development" : "production",
  entry: {
    main: path.join(paths.src, "index.js")
  },
  devtool: devMode ? "inline-source-map" : "none",
  output: {
    filename: devMode ? "js/[name].js" : "js/[name].[chunkhash:8].js",
    path: paths.dist,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/i,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: plugins
};
