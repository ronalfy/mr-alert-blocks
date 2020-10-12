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
namespace MediaRon\AlertBlocks;

require __DIR__ . '/vendor/autoload.php';

defined( 'ABSPATH' ) || exit;

define( 'MR_ALERT_BLOCKS_VERSION', '1.0.0' );

use enshrined\svgSanitize\Sanitizer;

/**
 * Get default attributes.
 */
function get_block_attributes() {
	return array(
		'uniqueId'                   => array(
			'type'    => 'string',
			'default' => '',
		),
		'mainDefaultSvgName'         => array(
			'type'    => 'string',
			'default' => '',
		),
		'useMainDefaultSvgName'      => array(
			'type'    => 'boolean',
			'default' => false,
		),
		'buttonDefaultSvgName'       => array(
			'type'    => 'string',
			'default' => '',
		),
		'useButtonDefaultSvgName'    => array(
			'type'    => 'boolean',
			'default' => false,
		),
		'alertType'                  => array(
			'type'    => 'string',
			'default' => 'primary',
		),
		'backgroundColor'            => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'dismiss'                    => array(
			'type'    => 'boolean',
			'default' => false,
		),
		'containerWidth'             => array(
			'type'    => 'string',
			'default' => 'contained-width',
		),
		'containedWidth'             => array(
			'type'    => 'string',
			'default' => '1200',
		),
		'innerContainerMaxWidth'     => array(
			'type'    => 'string',
			'default' => '800',
		),
		'paddingTop'                 => array(
			'type'    => 'string',
			'default' => '20',
		),
		'paddingBottom'              => array(
			'type'    => 'string',
			'default' => '20',
		),
		'paddingLeft'                => array(
			'type'    => 'string',
			'default' => '20',
		),
		'paddingRight'               => array(
			'type'    => 'string',
			'default' => '20',
		),
		'paddingUnit'                => array(
			'type'    => 'string',
			'default' => 'px',
		),
		'containerWidth'             => array(
			'type'    => 'string',
			'default' => 'full-width',
		),
		'containedWidth'             => array(
			'type'    => 'string',
			'default' => '800',
		),
		'marginTop'                  => array(
			'type'    => 'string',
			'default' => '15',
		),
		'marginBottom'               => array(
			'type'    => 'string',
			'default' => '15',
		),
		'marginLeft'                 => array(
			'type'    => 'string',
			'default' => '0',
		),
		'marginRight'                => array(
			'type'    => 'string',
			'default' => '0',
		),
		'marginUnit'                 => array(
			'type'    => 'string',
			'default' => 'px',
		),
		'borderTop'                  => array(
			'type'    => 'string',
			'default' => '0',
		),
		'borderBottom'               => array(
			'type'    => 'string',
			'default' => '0',
		),
		'borderLeft'                 => array(
			'type'    => 'string',
			'default' => '0',
		),
		'borderRight'                => array(
			'type'    => 'string',
			'default' => '0',
		),
		'borderUnit'                 => array(
			'type'    => 'string',
			'default' => 'px',
		),
		'borderRadiusTop'            => array(
			'type'    => 'string',
			'default' => '10',
		),
		'borderRadiusBottom'         => array(
			'type'    => 'string',
			'default' => '10',
		),
		'borderRadiusLeft'           => array(
			'type'    => 'string',
			'default' => '10',
		),
		'borderRadiusRight'          => array(
			'type'    => 'string',
			'default' => '10',
		),
		'borderRadiusUnit'           => array(
			'type'    => 'string',
			'default' => 'px',
		),
		'borderColor'                => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'iconShow'                   => array(
			'type'    => 'boolean',
			'default' => false,
		),
		'hasIcon'                    => array(
			'type'    => 'boolean',
			'default' => false,
		),
		'svgIcon'                    => array(
			'type'     => 'string',
			'default'  => '',
			'sanitize' => 'svg',
		),
		'icon'                       => array(
			'type'    => 'string',
			'default' => '',
		),
		'iconColor'                  => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'iconSize'                   => array(
			'type'    => 'number',
			'default' => 30,
		),
		'iconUnit'                   => array(
			'type'    => 'string',
			'default' => 'px',
		),
		'displayTitle'               => array(
			'type'    => 'boolean',
			'default' => true,
		),
		'title'                      => array(
			'type'     => 'string',
			'default'  => '',
			'sanitize' => 'html',
		),
		'titleTag'                   => array(
			'type'    => 'string',
			'default' => 'h2',
		),
		'titleColor'                 => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'titleUnit'                  => array(
			'type'    => 'string',
			'default' => 'px',
		),
		'titleFont'                  => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'titleTransform'             => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'titlePaddingTop'            => array(
			'type'    => 'string',
			'default' => '0',
		),
		'titleSize'                  => array(
			'type'    => 'number',
			'default' => 32,
		),
		'titlePaddingBottom'         => array(
			'type'    => 'string',
			'default' => '0',
		),
		'titlePaddingLeft'           => array(
			'type'    => 'string',
			'default' => '0',
		),
		'titlePaddingRight'          => array(
			'type'    => 'string',
			'default' => '0',
		),
		'titlePaddingUnit'           => array(
			'type'    => 'string',
			'default' => 'px',
		),
		'titleMarginTop'             => array(
			'type'    => 'string',
			'default' => '0',
		),
		'titleMarginBottom'          => array(
			'type'    => 'string',
			'default' => '15',
		),
		'titleMarginLeft'            => array(
			'type'    => 'string',
			'default' => '0',
		),
		'titleMarginRight'           => array(
			'type'    => 'string',
			'default' => '0',
		),
		'titleMarginUnit'            => array(
			'type'    => 'string',
			'default' => 'px',
		),
		'titleLineHeight'            => array(
			'type'    => 'string',
			'default' => '1.4',
		),
		'titleFontWeight'            => array(
			'type'    => 'string',
			'default' => '700',
		),
		'displayButton'              => array(
			'type'    => 'boolean',
			'default' => false,
		),
		'displayStyles'              => array(
			'type'    => 'boolean',
			'default' => false,
		),
		'enableBackgroundGradient'   => array(
			'type'    => 'boolean',
			'default' => false,
		),
		'backgroundGradient'         => array(
			'type'    => 'string',
			'default' => '',
		),
		'content'                    => array(
			'type'     => 'string',
			'default'  => '',
			'sanitize' => 'html',
		),
		'displayContent'             => array(
			'type'    => 'boolean',
			'default' => true,
		),
		'contentColor'               => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'contentSize'                => array(
			'type'    => 'number',
			'default' => 18,
		),
		'contentUnit'                => array(
			'type'    => 'string',
			'default' => 'px',
		),
		'contentFont'                => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'contentFontWeight'          => array(
			'type'    => 'string',
			'default' => '400',
		),
		'contentTransform'           => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'contentPaddingTop'          => array(
			'type'    => 'string',
			'default' => '0',
		),
		'contentPaddingBottom'       => array(
			'type'    => 'string',
			'default' => '0',
		),
		'contentPaddingLeft'         => array(
			'type'    => 'string',
			'default' => '0',
		),
		'contentPaddingRight'        => array(
			'type'    => 'string',
			'default' => '0',
		),
		'contentPaddingUnit'         => array(
			'type'    => 'string',
			'default' => 'px',
		),
		'contentMarginTop'           => array(
			'type'    => 'string',
			'default' => '0',
		),
		'contentMarginBottom'        => array(
			'type'    => 'string',
			'default' => '0',
		),
		'contentMarginLeft'          => array(
			'type'    => 'string',
			'default' => '0',
		),
		'contentMarginRight'         => array(
			'type'    => 'string',
			'default' => '0',
		),
		'contentMarginUnit'          => array(
			'type'    => 'string',
			'default' => 'px',
		),
		'contentLineHeight'          => array(
			'type'    => 'string',
			'default' => '1.1',
		),
		'url'                        => array(
			'type'     => 'string',
			'default'  => '',
			'sanitize' => 'url',
		),
		'target'                     => array(
			'type'    => 'string',
			'default' => '',
		),
		'buttonText'                 => array(
			'type'     => 'string',
			'default'  => '',
			'sanitize' => 'html',
		),
		'buttonWidth'                => array(
			'type'    => 'string',
			'default' => __( 'Default', 'mr-alert-blocks' ),
		),
		'buttonWidthFixed'           => array(
			'type'    => 'number',
			'default' => 350,
		),
		'buttonPaddingTop'           => array(
			'type'    => 'string',
			'default' => '15',
		),
		'buttonPaddingBottom'        => array(
			'type'    => 'string',
			'default' => '15',
		),
		'buttonPaddingLeft'          => array(
			'type'    => 'string',
			'default' => '20',
		),
		'buttonPaddingRight'         => array(
			'type'    => 'string',
			'default' => '20',
		),
		'buttonMarginTop'            => array(
			'type'    => 'string',
			'default' => '15',
		),
		'buttonMarginBottom'         => array(
			'type'    => 'string',
			'default' => '15',
		),
		'buttonMarginLeft'           => array(
			'type'    => 'string',
			'default' => '0',
		),
		'buttonMarginRight'          => array(
			'type'    => 'string',
			'default' => '0',
		),
		'buttonBorderColor'          => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'buttonBorderColorHover'     => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'buttonBorderWidth'          => array(
			'type'    => 'string',
			'default' => '2',
		),
		'buttonBorderRadiusTop'      => array(
			'type'    => 'string',
			'default' => '10',
		),
		'buttonBorderRadiusBottom'   => array(
			'type'    => 'string',
			'default' => '10',
		),
		'buttonBorderRadiusLeft'     => array(
			'type'    => 'string',
			'default' => '10',
		),
		'buttonBorderRadiusRight'    => array(
			'type'    => 'string',
			'default' => '10',
		),
		'buttonTextColor'            => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'buttonTextColorHover'       => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'buttonBackgroundColor'      => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'buttonBackgroundColorHover' => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'buttonIconSize'             => array(
			'type'    => 'number',
			'default' => 18,
		),
		'buttonIconLocation'         => array(
			'type'    => 'string',
			'default' => 'left',
		),
		'buttonIconEnabled'          => array(
			'type'    => 'boolean',
			'default' => false,
		),
		'buttonIcon'                 => array(
			'type'     => 'string',
			'default'  => '',
			'sanitize' => 'svg',
		),
		'buttonIconHover'            => array(
			'type'    => 'string',
			'default' => '',
		),
		'buttonIconColor'            => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'buttonIconColorHover'       => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'buttonIconAnimationHover'   => array(
			'type'    => 'string',
			'default' => 'pulse',
		),
		'buttonTextTransform'        => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'buttonFont'                 => array(
			'type'    => 'string',
			'default' => 'inherit',
		),
		'buttonFontSize'             => array(
			'type'    => 'number',
			'default' => 18,
		),
		'buttonLineHeight'           => array(
			'type'    => 'string',
			'default' => '1.3',
		),
		'buttonFontWeight'           => array(
			'type'    => 'string',
			'default' => '700',
		),
		'buttonIconSeparation'       => array(
			'type'    => 'number',
			'default' => '20',
		),
		'align'                      => array(
			'type'    => 'string',
			'default' => 'full',
		),
	);
}

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
			'attributes'      => get_block_attributes(),
			'render_callback' => 'MediaRon\AlertBlocks\mrabg_block_notice_output',
			'editor_script'   => 'mrabg-gutenberg-js',
			'editor_style'    => 'mrabg-gutenberg-css',
		)
	);
}
add_action( 'init', 'MediaRon\AlertBlocks\mrabg_register_files_for_gutenberg' );

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
	ob_start();
	$attributes    = marry_defaults_with_attributes( $attributes );
	$default_attrs = get_block_attributes();
	foreach ( $attributes as $key => &$value ) {
		if ( isset( $default_attrs[ $key ] ) ) {
			$sanitize_type = isset( $default_attrs[ $key ]['sanitize'] ) ? $default_attrs[ $key ]['sanitize'] : ( isset( $default_attrs[ $key ]['type'] ) ? $default_attrs[ $key ]['type'] : 'text' );
			$sanitize_for  = '';
			switch ( $sanitize_type ) {
				case 'string':
					$sanitize_for = 'text';
					break;
				case 'html':
					$sanitize_for = 'html';
					break;
				case 'svg':
					$sanitize_for = 'svg';
					break;
				case 'boolean':
					$sanitize_for = 'bool';
					break;
				case 'number':
					$sanitize_for = 'number';
					break;
				default:
					$sanitize_for = $sanitize_type;
					break;
			}
			$value = sanitize_attribute( $attributes, $key, $sanitize_for );
		}
	}
	$alert_type = $attributes['alertType'];
	$unique_id  = $attributes['uniqueId'];
	?>
	<div class="mr-alert-boxes">
		<style class="mr-alert-styles">
			.mr-alert-<?php echo esc_html( $unique_id ); ?> {
				<?php echo esc_html( dimension_shorthand( $attributes['paddingTop'], $attributes['paddingRight'], $attributes['paddingBottom'], $attributes['paddingLeft'], $attributes['paddingUnit'], 'padding' ) ); ?>
				<?php echo esc_html( dimension_shorthand( $attributes['marginTop'], $attributes['marginRight'], $attributes['marginBottom'], $attributes['marginLeft'], $attributes['marginUnit'], 'margin' ) ); ?>
				border-style: solid;
				<?php echo esc_html( dimension_shorthand( $attributes['borderTop'], $attributes['borderRight'], $attributes['borderBottom'], $attributes['borderLeft'], 'px', 'border-width' ) ); ?>
				<?php echo esc_html( dimension_shorthand( $attributes['borderRadiusTop'], $attributes['borderRadiusRight'], $attributes['borderRadiusBottom'], $attributes['borderRadiusLeft'], 'px', 'border-radius' ) ); ?>
				<?php
				if ( 'inherit' !== $attributes['borderColor'] ) {
					echo 'border-color: ' . hex2rgba( $attributes['borderColor'] ) . ';';
				}
				?>
				<?php
				if ( 'inherit' !== $attributes['backgroundColor'] ) {
					echo 'background-color: ' . hex2rgba( $attributes['backgroundColor'] ) . ';';
				}
				if ( $attributes['enableBackgroundGradient'] ) {
					echo 'background-image: ' . esc_html( $attributes['backgroundGradient'] ) . ';';
				}
				?>
			}
		</style>
	<section class="mr-alert 
	<?php
	echo esc_html( sprintf( 'mr-alert-%1$s mr-alert-type-%2$s alert-%2$s', $unique_id, $alert_type ) );
	echo ' ';
	?>
	<?php echo esc_html( sprintf( 'align%1$s align-%1$s', $attributes['align'] ) ); ?>" role="alert">
		<div class="mr-alert-wrapper">
		<?php
		if ( $attributes['iconShow'] && $attributes['hasIcon'] ) {
			?>
			<style class="mr-alert-styles">
				.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-icon-wrapper {
					text-align: center;
				}
				.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-icon-wrapper .mr-alert-icon svg{
					color: <?php echo esc_html( hex2rgba( $attributes['iconColor'] ) ); ?>;
					width: <?php echo esc_html( value_with_unit( absint( $attributes['iconSize'] ), 'px' ) ); ?>;
					height: <?php echo esc_html( value_with_unit( absint( $attributes['iconSize'] ), 'px' ) ); ?>;
				}
			</style>
			<div class="mr-alert-icon-wrapper" aria-hidden="true">
				<span class="mr-alert-icon">
					<?php echo $attributes['svgIcon']; // phpcs:ignore ?> 
				</span>
			</div>
			<?php
		}
		if ( $attributes['displayTitle'] ) {
			?>
			<style class="mr-alert-styles">
				.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-title-wrapper <?php echo esc_html( $attributes['titleTag'] ); ?> {
				<?php echo esc_html( dimension_shorthand( $attributes['titlePaddingTop'], $attributes['titlePaddingRight'], $attributes['titlePaddingBottom'], $attributes['titlePaddingLeft'], 'px', 'padding' ) ); ?>
				<?php echo esc_html( dimension_shorthand( $attributes['titleMarginTop'], $attributes['titleMarginRight'], $attributes['titleMarginBottom'], $attributes['titleMarginLeft'], 'px', 'margin' ) ); ?>
				text-transform: <?php echo esc_html( $attributes['titleTransform'] ); ?>;
				color: <?php echo esc_html( hex2rgba( $attributes['titleColor'] ) ); ?>;
				font-size: <?php echo esc_html( value_with_unit( $attributes['titleSize'], 'px' ) ); ?>;
				font-family:  <?php echo esc_html( $attributes['titleFont'] ); ?>;
				line-height: <?php echo esc_html( value_with_unit( $attributes['titleLineHeight'], 'em' ) ); ?>;
				font-weight: <?php echo absint( $attributes['titleFontWeight'] ); ?>;
				text-align: center;
				}
			</style>
			<div class="mr-alert-title-wrapper">
				<<?php echo esc_html( $attributes['titleTag'] ); ?>><?php echo wp_kses_post( $attributes['title'] ); ?></<?php echo esc_html( $attributes['titleTag'] ); ?>>
			</div><!-- .mr-alert-title-wrapper -->
			<?php
		}
		?>
		<style class="mr-alert-styles">
			.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-content-wrapper {
				<?php echo esc_html( dimension_shorthand( $attributes['contentPaddingTop'], $attributes['contentPaddingRight'], $attributes['contentPaddingBottom'], $attributes['contentPaddingLeft'], 'px', 'padding' ) ); ?>
				<?php echo esc_html( dimension_shorthand( $attributes['contentMarginTop'], $attributes['contentMarginRight'], $attributes['contentMarginBottom'], $attributes['contentMarginLeft'], 'px', 'margin' ) ); ?>
				text-transform: <?php echo esc_html( $attributes['contentTransform'] ); ?>;
				color: <?php echo esc_html( hex2rgba( $attributes['contentColor'] ) ); ?>;
				font-size: <?php echo esc_html( value_with_unit( $attributes['contentSize'], 'px' ) ); ?>;
				font-family: <?php echo esc_html( $attributes['contentFont'] ); ?>;
				line-height: <?php echo esc_html( value_with_unit( $attributes['contentLineHeight'], 'em' ) ); ?>;
				font-weight: <?php echo absint( $attributes['contentFontWeight'] ); ?>;
				text-align: center;
			}
		</style>

		<?php
		if ( $attributes['displayContent'] ) {
			?>
			<div class="mr-alert-content-wrapper">
				<?php echo wp_kses_post( $attributes['content'] ); ?>
			</div><!-- .mr-alert-content-wrapper -->
			<?php
		}
		?>
		<?php
		if ( $attributes['displayButton'] ) {
			?>
			<style class="mr-alert-styles">
				.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-button-wrapper {
					text-align: center;
				}
				<?php
				if ( 'full' === $attributes['buttonWidth'] ) {
					?>
					.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-button-wrapper {
						display: block;

					}
					.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-button-wrapper a {
						display: block;
						width: 100%;
						box-sizing: border-box;
					}
					<?php
				}
				?>
				<?php
				if ( 'fixed' === $attributes['buttonWidth'] ) {
					?>
					.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-button-wrapper a {
						display: inline-block;
						width: 100%;
						max-width: <?php echo esc_html( value_with_unit( $attributes['buttonWidthFixed'], 'px' ) ); ?>;
						box-sizing: border-box;
					}
					<?php
				}
				?>
				.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-button-wrapper a {
					display: inline-block;
					<?php echo esc_html( dimension_shorthand( $attributes['buttonPaddingTop'], $attributes['buttonPaddingRight'], $attributes['buttonPaddingBottom'], $attributes['buttonPaddingLeft'], 'px', 'padding' ) ); ?>
					<?php echo esc_html( dimension_shorthand( $attributes['buttonMarginTop'], $attributes['buttonMarginRight'], $attributes['buttonMarginBottom'], $attributes['buttonMarginLeft'], 'px', 'margin' ) ); ?>
					border-style: solid;
					border-width: <?php echo esc_html( value_with_unit( $attributes['buttonBorderWidth'], 'px' ) ); ?>;
					<?php echo esc_html( dimension_shorthand( $attributes['buttonBorderRadiusTop'], $attributes['buttonBorderRadiusRight'], $attributes['buttonBorderRadiusBottom'], $attributes['buttonBorderRadiusLeft'], 'px', 'border-radius' ) ); ?> 
					text-transform: <?php echo esc_html( $attributes['buttonTextTransform'] ); ?>;
					<?php
					if ( 'inherit' !== $attributes['buttonBorderColor'] ) {
						?>
						border-color: <?php echo esc_html( hex2rgba( $attributes['buttonBorderColor'] ) ); ?>;
						transition: all 0.4s ease;
						<?php
					}
					if ( 'inherit' !== $attributes['buttonTextColor'] ) {
						?>
						color: <?php echo esc_html( hex2rgba( $attributes['buttonTextColor'] ) ); ?>;
						<?php
					}
					if ( 'inherit' !== $attributes['buttonBackgroundColor'] ) {
						?>
						background-color: <?php echo esc_html( hex2rgba( $attributes['buttonBackgroundColor'] ) ); ?>;
						<?php
					}
					?>
					font-size: <?php echo esc_html( value_with_unit( $attributes['buttonFontSize'], 'px' ) ); ?>;
					font-family: <?php echo esc_html( $attributes['buttonFont'] ); ?>;
					line-height: <?php echo esc_html( value_with_unit( $attributes['buttonLineHeight'], 'em' ) ); ?>;
					font-weight: <?php echo absint( $attributes['buttonFontWeight'] ); ?>;
					text-align: center;
				}
				.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-button-wrapper a:hover {
					display: inline-block;
					<?php
					if ( 'inherit' !== $attributes['buttonBorderColorHover'] ) {
						?>
						border-color: <?php echo esc_html( hex2rgba( $attributes['buttonBorderColorHover'] ) ); ?>;
						<?php
					}
					if ( 'inherit' !== $attributes['buttonTextColorHover'] ) {
						?>
						color: <?php echo esc_html( hex2rgba( $attributes['buttonTextColorHover'] ) ); ?>;
						<?php
					}
					if ( 'inherit' !== $attributes['buttonBackgroundColorHover'] ) {
						?>
						background-color: <?php echo esc_html( hex2rgba( $attributes['buttonBackgroundColorHover'] ) ); ?>;
						<?php
					}
					?>
					text-decoration: none;
				}
				</style>
				<?php
				// SVG Icon Styling.
				if ( $attributes['buttonIconEnabled'] && 'left' === $attributes['buttonIconLocation'] ) {
					?>
					<style class="mr-alert-styles">
					.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-button-wrapper a .mr-alert-icon {
						margin-right: <?php echo esc_html( value_with_unit( $attributes['buttonIconSeparation'], 'px' ) ); ?>;
					}
					</style>
					<?php
				}
				if ( $attributes['buttonIconEnabled'] && 'right' === $attributes['buttonIconLocation'] ) {
					?>
					<style class="mr-alert-styles">
					.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-button-wrapper a .mr-alert-icon {
						margin-left: <?php echo esc_html( value_with_unit( $attributes['buttonIconSeparation'], 'px' ) ); ?>;
					}
					</style>
					<?php
				}
				if ( $attributes['buttonIconEnabled'] && 'above' === $attributes['buttonIconLocation'] ) {
					?>
					<style class="mr-alert-styles">
					.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-button-wrapper a .mr-alert-icon {
						display: block;
						textt-align: center;
						margin-bottom: <?php echo esc_html( value_with_unit( $attributes['buttonIconSeparation'], 'px' ) ); ?>;
					}
					</style>
					<?php
				}
				if ( $attributes['buttonIconEnabled'] && ! empty( $attributes['buttonIcon'] ) ) {
					?>
					<style class="mr-alert-styles">
					.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-button-wrapper a .mr-alert-icon svg {
						width: <?php echo esc_html( value_with_unit( $attributes['buttonIconSize'], 'px' ) ); ?>;
						height: <?php echo esc_html( value_with_unit( $attributes['buttonIconSize'], 'px' ) ); ?>;
						color: <?php echo esc_html( hex2rgba( $attributes['buttonIconColor'] ) ); ?>;
					}
					.mr-alert-<?php echo esc_html( $unique_id ); ?> .mr-alert-button-wrapper a:hover .mr-alert-icon svg {
						color: <?php echo esc_html( hex2rgba( $attributes['buttonIconColorHover'] ) ); ?>;
					}
					</style>
					<?php
				}
				?>
			<div class="mr-alert-button-wrapper">
				<a class="<?php echo esc_html( sprintf( 'mr-button mr-alert-button mr-button-%1$s mr-alert-type-%2$s', $unique_id, $alert_type ) ); ?>" href="<?php echo esc_url( $attributes['url'] ); ?>" target="<?php echo esc_attr( $attributes['target'] ); ?>">
					<?php
					if ( $attributes['buttonIconEnabled'] && ! empty( $attributes['buttonIcon'] ) && ( 'left' === $attributes['buttonIconLocation'] || 'above' === $attributes['buttonIconLocation'] ) ) {
						?>
						<span class="mr-alert-icon">
							<?php echo $attributes['buttonIcon']; // phpcs:ignore ?> 
						</span>
						<?php
					}
					?>
					<span><?php echo wp_kses_post( $attributes['buttonText'] ); ?></span>
					<?php
					if ( $attributes['buttonIconEnabled'] && ! empty( $attributes['buttonIcon'] ) && 'right' === $attributes['buttonIconLocation'] ) {
						?>
						<span class="mr-alert-icon">
							<?php echo $attributes['buttonIcon']; // phpcs:ignore ?> 
						</span>
						<?php
					}
					?>
				</a>
			</div><!-- .mr-alert-button-wrapper -->
			<?php
		}
		?>
		</div><!-- .mr-alert-wrapper -->
	</section>
	</div>
	<?php
	return ob_get_clean();
}
/** Enqueue Script and Style if the post has a block only. */
function mrabg_enqueue_styles_scripts() {
	if ( has_block( 'mediaron/alert-boxes' ) ) {
		wp_enqueue_style( 'mrabg-gutenberg-css' );
		wp_enqueue_script( 'mrabg-hide-alert-js' );
	}
}
add_action( 'wp_enqueue_scripts', 'MediaRon\AlertBlocks\mrabg_enqueue_styles_scripts' );

/**
 * Sanitize an attribute based on type.
 *
 * @param array  $attributes Array of attributes.
 * @param string $attribute  The attribute to sanitize.
 * @param string $type       The type of sanitization you need (values can be int, text, string, bool, url).
 *
 * @return mixed Sanitized attribute. wp_error on failure.
 */
function sanitize_attribute( $attributes, $attribute, $type = 'text' ) {
	if ( isset( $attributes[ $attribute ] ) ) {
		switch ( $type ) {
			case 'text':
				if ( is_int( $attributes[ $attribute ] ) ) {
					return absint( $attributes[ $attribute ] );
				}
				if ( is_string( $attributes[ $attribute ] ) ) {
					return $attributes[ $attribute ];
				}
				return sanitize_text_field( $attributes[ $attribute ] );
			case 'bool':
				return filter_var( $attributes[ $attribute ], FILTER_VALIDATE_BOOLEAN );
			case 'string':
				if ( is_int( $attributes[ $attribute ] ) ) {
					return absint( $attributes[ $attribute ] );
				}
				if ( is_string( $attributes[ $attribute ] ) ) {
					return $attributes[ $attribute ];
				}
				return sanitize_text_field( $attributes[ $attribute ] );
			case 'number':
				if ( is_int( $attributes[ $attribute ] ) ) {
					return $attributes[ $attribute ];
				}
				return 0;
			case 'url':
				return esc_url( $attributes[ $attribute ] );
			case 'svg':
				$sanitizer = new Sanitizer();
				return $sanitizer->sanitize( $attributes[ $attribute ] );
			case 'html':
				return wp_kses_post( $attributes[ $attribute ] );
			case 'default':
				return new \WP_Error( 'ptam_unknown_type', __( 'Unknown type.', 'post-type-archive-mapping' ) );
		}
	}
	return new \WP_Error( 'ptam_attribute_not_found', __( 'Attribute not found.', 'post-type-archive-mapping' ) );
}

/**
 * Populate attributes with keys that do not exist in defaults.
 *
 * @param array $attributes Array of attributes.
 *
 * @return array updated attributes.
 */
function marry_defaults_with_attributes( $attributes ) {
	$defaults = get_block_attributes();
	foreach ( $defaults as $key => $data ) {
		if ( ! isset( $attributes[ $key ] ) ) {
			$attributes[ $key ] = $data[ $key ]['default'];
		}
	}
	return $attributes;
}

/**
 * Get CSS Shorthand Dimensions.
 *
 * @param int    $top    Top value.
 * @param int    $right  Right value.
 * @param int    $bottom Bottom value.
 * @param int    $left   Left value.
 * @param string $unit   Can be 'px', 'em', 'rem', '%'.
 * @param string $type   Type of shorthand property (padding, margin, border-radius, etc).
 *
 * @return string CSS shorthand property.
 */
function dimension_shorthand( $top = 0, $right = 0, $bottom = 0, $left = 0, $unit = 'px', $type = 'padding' ) {
	return sprintf(
		'%1$s: %2$s%6$s %3$s%6$s %4$s%6$s %5$s%6$s;',
		esc_html( $type ),
		absint( $top ),
		absint( $right ),
		absint( $bottom ),
		absint( $left ),
		$unit
	);
}

/**
 * Convert Hex to RGBA
 *
 * @param string $color   The color to convert.
 * @param int    $opacity The opacity.
 *
 * @return string rgba attribute.
 */
function hex2rgba( $color, $opacity = false ) {

	$default = 'rgb(0,0,0)';

	// Return default if no color provided.
	if ( empty( $color ) ) {
		return $default;
	}

	// Sanitize $color if "#" is provided.
	if ( '#' === $color[0] ) {
		$color = substr( $color, 1 );
	}

	// Check if color has 6 or 3 characters and get values.
	if ( strlen( $color ) === 6 ) {
			$hex = array( $color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5] );
	} elseif ( strlen( $color ) === 3 ) {
			$hex = array( $color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2] );
	} else {
			return $default;
	}

	// Convert hexadec to rgb.
	$rgb = array_map( 'hexdec', $hex );

	// Check if opacity is set(rgba or rgb).
	if ( $opacity ) {
		if ( abs( $opacity ) > 1 ) {
			$opacity = 1.0;
		}
		$output = 'rgba(' . implode( ',', $rgb ) . ',' . $opacity . ')';
	} else {
		$output = 'rgb(' . implode( ',', $rgb ) . ')';
	}

	// Return rgb(a) color string.
	return $output;
}

/**
 * Return a value with a unit attached.
 *
 * @param int    $value The value to output with unit.
 * @param string $unit  The unit to append to the value.
 *
 * @return string value + unit,
 */
function value_with_unit( $value = 0, $unit = 'px' ) {
	$value = absint( $value );
	if ( 0 === $value ) {
		return 0;
	}
	return $value . $unit;
}
