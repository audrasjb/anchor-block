<?php
/**
 * Plugin Name:    Anchor Block
 * Plugin URI:     https://jeanbaptisteaudras.com/reusable-blocks-extended/
 * Description:    Adds Anchor Block so you could generate internal link to each section of your page
 * Version:		   0.1
 * Author:         audrasjb
 * Author URI:     https://jeanbaptisteaudras.com/
 * License:        GPL-2.0+
 * License URI:    http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:    anchor-block
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

 	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	add_action( 'wp_enqueue_scripts', 'anchor_block_enqueue_scripts_public' );
	function anchor_block_enqueue_scripts_public() {
		wp_enqueue_style( 
			'anchor-block-public-styles', 
			plugin_dir_url( __FILE__ ) . 'public/anchor-block.css', 
			array(), 
			'', 
			'all' 
		);
		wp_register_script(
			'anchor-block-public-scripts',
			plugins_url( 'public/anchor-block.js', __FILE__ ),
			array( 'jquery' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'public/anchor-block.js' ),
			true
		);
		wp_enqueue_script( 'anchor-block-public-scripts' );
	}
	add_action( 'admin_enqueue_scripts', 'anchor_block_enqueue_scripts_admin' );
	function anchor_block_enqueue_scripts_admin() {
		wp_enqueue_style( 
			'anchor-block-admin-styles', 
			plugin_dir_url( __FILE__ ) . 'admin/block.css', 
			array(), 
			'', 
			'all' 
		);
		wp_register_script(
			'anchor-block-admin-scripts',
			plugins_url( 'admin/block.js', __FILE__ ),
			array( 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n', 'wp-editor' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'admin/block.js' ),
			true
		);
		wp_enqueue_script( 'anchor-block-admin-scripts' );
	}
	register_block_type( 'anchor-block/standard', 
		array(
			'editor_script' => 'anchor-block-admin-scripts',
		)
	);

