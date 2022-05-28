const path = require('path')

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMildCompile = require('webpack-mild-compile').Plugin;

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/app.css'
    }),
    new HtmlWebpackPlugin({
     title: 'Development',
     template: 'index.html'
    }),
    new WebpackMildCompile(),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)(.js)?$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    open: false,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    alias: {
      '@bindings': path.resolve(__dirname, 'src/js/bindings/'),
      '@config': path.resolve(__dirname, 'src/js/config/'),
      '@models': path.resolve(__dirname, 'src/js/models/'),
      '@scss': path.resolve(__dirname, 'src/scss/')
    }
  }
};
