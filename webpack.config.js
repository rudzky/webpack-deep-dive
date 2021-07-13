const path = require("path");

module.exports = {
  devtool: "eval-source-map",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"), //absolute path
    publicPath: "public",
  },
  //   devServer: {
  //     contentBase: "./public",
  //     // compress: true,
  //     // port: 3000,
  //   },
  devServer: {
    publicPath: "/",
    contentBase: "public",
    hot: true,
  },
};
