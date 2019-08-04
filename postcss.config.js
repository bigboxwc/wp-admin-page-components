module.exports = {
	plugins: [
		require( '@wordpress/postcss-themes' )(),
		require( 'autoprefixer' )( { grid: true } ),
		require( 'postcss-color-function' ),
	],
};
