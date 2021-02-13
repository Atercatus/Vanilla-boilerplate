const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: { index: path.resolve(__dirname, "./src/app/ts/app.ts") },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-proposal-class-properties",
              ],
            },
          },
          {
            loader: "ts-loader",
            options: {
              onlyCompileBundledFiles: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "source-map";
  }

  if (argv.mode === "production") {
  }

  return config;
};
