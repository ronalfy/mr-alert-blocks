<?php
/**
 * Plugin Name: MR Alert Blocks
 * Description: Create an alert notice in the new Block Editor.
 * Author: Ronald Huereca
 * Author URI: https://mediaron.com
 * Version: 1.0.0
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: mr-alert-blocks
 * Network: false
 *
 * MR Alert Blocks For Gutenberg is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * MR Alert Blocks For Gutenberg is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with MR Alert Blocks For Gutenberg. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
 *
 * Forked from Andrew Lima: https://github.com/andrewlimaza/simple-alert-blocks
 */

defined( 'ABSPATH' ) || exit;

define( 'MR_ALERT_BLOCKS_VERSION', '1.0.0' );

/**
 * Register scripts/styles for Gutenberg.
 */
function mrabg_register_files_for_gutenberg() {

	load_plugin_textdomain( 'mr-alert-blocks', false, basename( dirname( __FILE__ ) ) . '/languages' );

	wp_register_script(
		'mrabg-gutenberg-js',
		plugins_url( 'dist/alert_block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		MR_ALERT_BLOCKS_VERSION,
		true
	);
	wp_localize_script(
		'mrabg-gutenberg-js',
		'mrabg',
		array(
			'fonts' => mrabg_get_fonts(),
		)
	);

	wp_set_script_translations( 'mrabg-gutenberg-js', 'mr-alert-blocks' );

	wp_register_script(
		'mrabg-hide-alert-js',
		plugins_url( 'dist/hide-alert.js', __FILE__ ),
		array( 'jquery' ),
		MR_ALERT_BLOCKS_VERSION,
		true
	);

	wp_register_style(
		'mrabg-gutenberg-css',
		plugins_url( 'dist/alert_block.css', __FILE__ ),
		array(),
		MR_ALERT_BLOCKS_VERSION,
		'all'
	);

	register_block_type(
		'mediaron/alert-boxes',
		array(
			'attributes'      => array(
				'uniqueId'           => array(
					'type'    => 'string',
					'default' => '',
				),
				'alertType'          => array(
					'type'    => 'string',
					'default' => 'primary',
				),
				'backgroundColor'    => array(
					'type'    => 'string',
					'default' => 'inherit',
				),
				'dismiss'            => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'containerWidth'     => array(
					'type'    => 'string',
					'default' => 'contained-width',
				),
				'containedWidth'     => array(
					'type'    => 'int',
					'default' => 1200,
				),
				'paddingTop'         => array(
					'type'    => 'int',
					'default' => 20,
				),
				'paddingBottom'      => array(
					'type'    => 'int',
					'default' => 20,
				),
				'paddingLeft'        => array(
					'type'    => 'int',
					'default' => 20,
				),
				'paddingRight'       => array(
					'type'    => 'int',
					'default' => 20,
				),
				'paddingUnit'        => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'containerWidth'     => array(
					'type'    => 'string',
					'default' => 'full-width',
				),
				'containedWidth'     => array(
					'type'    => 'int',
					'default' => 800,
				),
				'marginTop'          => array(
					'type'    => 'int',
					'default' => 15,
				),
				'marginBottom'       => array(
					'type'    => 'int',
					'default' => 15,
				),
				'marginleft'         => array(
					'type'    => 'int',
					'default' => 0,
				),
				'marginRight'        => array(
					'type'    => 'int',
					'default' => 0,
				),
				'marginUnit'         => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'borderTop'          => array(
					'type'    => 'int',
					'default' => 0,
				),
				'borderBottom'       => array(
					'type'    => 'int',
					'default' => 0,
				),
				'borderLeft'         => array(
					'type'    => 'int',
					'default' => 0,
				),
				'borderRight'        => array(
					'type'    => 'int',
					'default' => 0,
				),
				'borderUnit'         => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'borderRadiusTop'    => array(
					'type'    => 'int',
					'default' => 10,
				),
				'borderRadiusBottom' => array(
					'type'    => 'int',
					'default' => 10,
				),
				'borderRadiusLeft'   => array(
					'type'    => 'int',
					'default' => 10,
				),
				'borderRadiusRight'  => array(
					'type'    => 'int',
					'default' => 10,
				),
				'borderRadiusUnit'   => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'borderColor'        => array(
					'type'    => 'string',
					'default' => 'inherit',
				),
				'iconShow'           => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'hasIcon'            => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'svgIcon'            => array(
					'type'    => 'string',
					'default' => '',
				),
				'icon'               => array(
					'type'    => 'string',
					'default' => '',
				),
				'iconColor'          => array(
					'type'    => 'string',
					'default' => 'inherit',
				),
				'iconSize'           => array(
					'type'    => 'int',
					'default' => 30,
				),
				'iconUnit'           => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'title'              => array(
					'type'    => 'string',
					'default' => '',
				),
				'titleColor'         => array(
					'type'    => 'string',
					'default' => 'inherit',
				),
				'titleSize'          => array(
					'type'    => 'int',
					'default' => 32,
				),
				'titleFont'          => array(
					'type'    => 'int',
					'default' => 32,
				),
				'titleTransform'     => array(
					'type'    => 'string',
					'default' => 'inherit',
				),
				'content'            => array(
					'type'    => 'string',
					'default' => '',
				),
				'contentColor'       => array(
					'type'    => 'string',
					'default' => 'inherit',
				),
				'contentSize'        => array(
					'type'    => 'int',
					'default' => 18,
				),
				'contentUnit'        => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'contentFont'        => array(
					'type'    => 'string',
					'default' => 'inherit',
				),
				'contentTransform'   => array(
					'type'    => 'string',
					'default' => 'inherit',
				),
			),
			'render_callback' => 'mrabg_block_notice_output',
			'editor_script'   => 'mrabg-gutenberg-js',
			'editor_style'    => 'mrabg-gutenberg-css',
		)
	);
}
add_action( 'init', 'mrabg_register_files_for_gutenberg' );

/**
 * Get web safe fonts
 *
 * @return array $fonts Fonts to Use
 */
function mrabg_get_fonts() {
	/**
	 * Filter the fonts that are available.
	 *
	 * @since 1.0.0
	 *
	 * @param array  associative array of key/value pairs of fonts.
	 */
	$fonts     = apply_filters(
		'mrab_fonts',
		array(
			'inherit'         => 'Default',
			'arial'           => 'Arial',
			'helvetica'       => 'Helvetica',
			'times new roman' => 'Times New Roman',
			'times'           => 'Times',
			'courier new'     => 'Courier New',
			'courier'         => 'Courier',
			'verdana'         => 'Verdana',
			'georgia'         => 'Georgia',
			'palatino'        => 'Palatino',
			'garamond'        => 'Garamond',
			'bookman'         => 'Bookman',
			'trebuchet ms'    => 'Trebuchet MS',
			'arial black'     => 'Arial Black',
			'impact'          => 'Impact',
		)
	);
	$pro_fonts = array();
	// Add Typekit Fonts.
	if ( defined( 'CUSTOM_TYPEKIT_FONTS_FILE' ) ) {
		$adobe_fonts = get_option( 'custom-typekit-fonts', array() );
		if ( isset( $adobe_fonts['custom-typekit-font-details'] ) ) {
			foreach ( $adobe_fonts['custom-typekit-font-details'] as $font_name => $font_details ) {
				$pro_fonts[ $font_details['slug'] ] = $font_details['family'];
			}
		}
	}
	$fonts = array_merge( $fonts, $pro_fonts );
	return $fonts;
}
/**
 * Block output.
 *
 * @param array $attributes Block attributes.
 *
 * @return string block output.
 */
function mrabg_block_notice_output( $attributes ) {
	return 'hi';
}
/** Enqueue Script and Style if the post has a block only. */
function mrabg_enqueue_styles_scripts() {
	if ( has_block( 'mediaron/alert-boxes' ) ) {
		wp_enqueue_style( 'mrabg-gutenberg-css' );
		wp_enqueue_script( 'mrabg-hide-alert-js' );
	}
}
add_action( 'wp_enqueue_scripts', 'mrabg_enqueue_styles_scripts' );
