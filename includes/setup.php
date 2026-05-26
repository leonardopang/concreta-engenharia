<?php
defined('ABSPATH') || exit;

add_action('after_setup_theme', function () {
    add_theme_support('custom-logo');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['script', 'style', 'gallery', 'caption']);
    add_theme_support('editor-styles');
    load_theme_textdomain('theme', THEME_DIR . '/languages');

    register_nav_menus(array(
        'header' => 'Header',
        'footer' => 'Footer',
        'mobile' => 'Mobile',
    ));
});
