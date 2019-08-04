<?php
/**
 * Plugin Name: WP Admin Page - 5.0+ Components
 * Description: Creates an admin page page to use new modern WordPress components.
 */

namespace BigBox\WPAdminMenuPageComponents;

// Add menu page.
add_action( 'admin_menu', function() {
	add_menu_page(
		'Components',
		'Components',
		'manage_options',
		'wp-admin-page-components',
		__NAMESPACE__ . '\\menu_page'
	);
} );

function menu_page() {
	wp_enqueue_script(
		'wp-admin-page-components',
		plugin_dir_url( __FILE__ ) . '/build/app.js',
		array(
			'wp-element',
		)
	);

	wp_enqueue_style(
		'wp-admin-page-components',
		plugin_dir_url( __FILE__ ) . '/build/style.css'
	);

	echo '<div id="wp-admin-page-components"></div>';
}
