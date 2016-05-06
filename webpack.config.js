var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		filename: "index_bundle.js",
		path: __dirname + '/dist'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.css$/, loader: "style-loader!css-loader"},
			{test: /\.scss$/, loaders: ["style", "css", "sass"]}
		]
	},
	externals: {
		'cheerio': 'window',
		'react/addons': true,
		'react/lib/executionEnvironment': true,
		'react/lib/ReactContext': true
	},
	plugins: [HTMLWebpackPluginConfig]
};
