<?php

/**
 * Plugin Name: Guty Proto
 * Description: Our first Gutenberg Blocks!
 * Version: 1.0.0
 * Author: Nerds Farm
 *
 * @package nerdsfarm
 */
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

// Include php-block
include_once dirname( __FILE__ ) . '/proto-block/init.php';
$proto = new Proto_Block();