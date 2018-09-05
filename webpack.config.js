const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";
const paths = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist")
};
const htmlOptions = {
  template: path.join(paths.src, "html", "app.html"),
  minify: {
    removeComments: devMode ? false : true,
    collapseWhitespace: devMode ? false : true,
    minifyJS: devMode ? false : true,
    minifyCSS: devMode ? false : true
  }
}

module.exports = {
  mode: devMode ? "development" : "production",
  entry: {
    main: path.join(paths.src, "index.js"),
    detail: path.join(paths.src, "detail.js"),
    favorites: path.join(paths.src, "favorites.js")
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/i,
          chunks: "all"
        },
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    },
    runtimeChunk: {
      name: "runtime"
    }
  },
  devtool: "source-map",
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
  plugins: [
    new CleanWebpackPlugin(paths.dist),
    new HtmlWebpackPlugin(Object.assign({
      filename: path.join(paths.dist, "index.html"),
      excludeChunks: ["detail", "favorites"]
    }, htmlOptions)),
    new HtmlWebpackPlugin(Object.assign({
      filename: path.join(paths.dist, "detail.html"),
      excludeChunks: ["main", "favorites"]
    }, htmlOptions)),
    new HtmlWebpackPlugin(Object.assign({
      filename: path.join(paths.dist, "favorites.html"),
      excludeChunks: ["main", "detail"]
    }, htmlOptions))
  ]
};
