/**
 * External dependencies
 */
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

/**
 * WordPress dependencies
 */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

module.exports = {
	...defaultConfig,
	resolve: {
		...defaultConfig.resolve,
		modules: [
			`${ __dirname }/client`,
			'node_modules',
		],
	},
	entry: {
		app: './client/index.js',
	},
	module: {
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: 'postcss.config.js',
							},
						},
					},
					{
						loader: 'sass-loader',
						query: {
							includePaths: [ 'client/stylesheets/abstracts' ],
							data:
							'@import "colors"; ' +
							'@import "breakpoints"; ' +
							'@import "variables"; ' +
							'@import "mixins"; '
						},
					},
				],
			},
		],
	},
	plugins: [
		...defaultConfig.plugins,
		new MiniCssExtractPlugin( {
			filename: './style.css',
		} ),
	],
};
