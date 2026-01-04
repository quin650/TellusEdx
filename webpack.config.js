const path = require("path");

module.exports = {
	entry: ["./src/index.js"],
	output: {
		path: path.resolve(__dirname, "./static/frontend"),
		filename: "[name].js",
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
	optimization: {
		minimize: true,
	},
	plugins: [],
};
