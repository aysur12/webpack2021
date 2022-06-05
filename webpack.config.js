const fs = require('fs');
const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const PAGES_DIR = path.resolve(__dirname, 'src/pages');
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .map((item) => item.replace(/\.[^/.]+$/, ''));
const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
};

const filename = (ext) => (isDevelopment ? `${ext}/[name].${ext}` : `${ext}/[name].${ext}`);
const entryPoints = PAGES.map((page) => ({ [page]: `${PAGES_DIR}/${page}/index.js` }));
const entryPointsCorrect = Object.assign({}, ...entryPoints);

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
  entry: entryPointsCorrect,
  output: {
    filename: filename('js'),
    path: PATHS.dist,
    clean: true,
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    static: './dist',
    port: 8080,
    open: '/registration.html',
    hot: false,
  },
  plugins: [
    ...PAGES.map(
      (page) => new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template: `${PAGES_DIR}/${page}/${page}.pug`,
        chunks: [page],
        inject: 'body',
        minify: false,
      }),
    ),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jquery': 'jquery'
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/favicons/favicon-toxin.png',
      prefix: './assets/favicons/',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'resolve-url-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ttf|svg|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
    config.plugins.push(new MiniCssExtractPlugin({ filename: filename('css') }));
  } else {
    config.mode = 'development';
  }
  return config;
};
