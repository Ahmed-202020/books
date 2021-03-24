const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'app.js',
        publicPath: '/',
      },
      module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.(css|scss|sass)$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader"
            ],
          },
          {
            test: /\.(ttf|woff|woff2|svg|eot)$/i,
            exclude:/images/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/fonts',
                },
              },
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            exclude:/fonts/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/images',
                },
              },
            ],
          },
          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
          filename: "book1.html",
          template: "./src/book1.html"
      }),
      new HtmlWebpackPlugin({
        filename: "book2.html",
        template: "./src/book2.html"
    }),
        new MiniCssExtractPlugin({
            filename: "assets/css/style.css"
        }),
        new CleanWebpackPlugin({
          cleanStaleWebpackAssets: false,
        }),
        new OptimizeCssAssetsPlugin({}),
    ],
    devServer: {
        compress: true,
        port: 9000,
        open: true,
        writeToDisk: true,
        stats: 'errors-only',
    },
  };
  