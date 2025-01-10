const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel to all JS files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // Use the env preset to transpile JS
          },
        },
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
  },
  mode: "development",
};
