const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
	const isProd = argv.mode === "production";

	return {
		mode: isProd ? "production" : "development",

		entry: ["./src/index.js"],

		output: {
			path: path.resolve(__dirname, "../backend/static/frontend"),
			filename: "[name].js",
			// optional but good practice for long-term caching if you ever change filename strategy
			clean: false,
		},

		stats: {
			colors: true,
			modules: true,
			reasons: true,
			errorDetails: true,
		},

		module: {
			rules: [
				{
					test: /\.jsx?$/, // This will only match .js and .jsx files
					exclude: /node_modules/,
					use: "babel-loader",
				},
				{
					test: /\.json$/, // This will handle JSON files explicitly (though Webpack handles JSON natively)
					type: "json",
					exclude: /node_modules/,
				},
				{
					test: /\.css$/,
					exclude: /node_modules/,
					use: [
						"style-loader",
						{
							loader: "css-loader",
							options: {
								importLoaders: 1,
								modules: true,
							},
						},
					],
					include: /\.module\.css$/,
				},
				{
					test: /\.css$/,
					exclude: /node_modules/,
					use: ["style-loader", "css-loader"],
					exclude: /\.module\.css$/,
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					exclude: /node_modules/,
					use: [
						{
							loader: "file-loader",
						},
					],
				},
			],
		},

		// IMPORTANT: avoid shipping source maps / dev tooling in production builds
		devtool: isProd ? false : "source-map",

		optimization: {
			minimize: isProd,
			minimizer: isProd
				? [
						new TerserPlugin({
							extractComments: false,
							terserOptions: { format: { comments: false } },
						}),
					]
				: [],
			splitChunks: false,
		},

		plugins: [
			new webpack.DefinePlugin({
				"process.env.NODE_ENV": JSON.stringify(isProd ? "production" : "development"),
				"process.env.REACT_APP_LOCAL": JSON.stringify(!isProd),
			}),
		],
	};
};
