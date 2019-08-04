/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import './style.scss';

const Layout = ( props ) => {
	const { children } = props;

	return (
		<div className="wp-admin-page-components">
			{ children }
			Do stuff here...
		</div>
	);
};

export default Layout;
