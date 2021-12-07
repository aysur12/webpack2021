// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
	? MiniCssExtractPlugin.loader
	: "style-loader";

const config = {
	entry: {
		main: './src/index.js',
	},
	devtool: 'source-map',
	output: {
	  path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/[hash][ext][query]",
		clean: true,
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	devServer: {
		open: true,
		host: "localhost",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/main.pug',
			filename: './index.html',
			chunks: ['main'],
			inject: 'body',
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/colors-and-type/colors-and-type.pug',
			filename: './pages/colors-and-type/colors-and-type.html',
			chunks: ['colorAndType'],
			inject: 'body',
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/form-elements/form-elements.pug',
			filename: './pages/form-elements/form-elements.html',
			chunks: ['formElements'],
			inject: 'body',
		}),
		new CopyPlugin({
      patterns: [
        { from: "./src/assets/images", to: "./assets/images" },
				{ from: "./src/assets/fonts", to: "./assets/fonts" },
      ],
    }),
		new FaviconsWebpackPlugin({
			logo: './src/assets/favicons/favicon-toxin.png',
			prefix: './assets/favicons',
		}),
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				loader: "babel-loader",
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				exclude: /(node_modules|bower_components)/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, "css-loader", "postcss-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
				},
			},
			{
				test: /fonts.*\.(ttf|svg|woff)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext]',
					},
			},		
			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";

		config.plugins.push(new MiniCssExtractPlugin());
	} else {
		config.mode = "development";
	}
	return config;
};
