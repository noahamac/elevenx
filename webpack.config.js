var path = require("path");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

var webpackConfig = {
  mode: 'development',
  entry: {
    elevenup: "./src/elevenup/viz-eleven.js"
  },
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "/dist"),
    library: "[name]",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".js"],
    modules: [path.join(__dirname, "../src"), "node_modules"]
  },
  plugins: [new UglifyJSPlugin()],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader"},
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ]
  },
  stats: {}
};

module.exports = webpackConfig;
