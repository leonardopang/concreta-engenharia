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

// ACF Local JSON — define pasta de leitura e escrita dos field groups
if (function_exists('acf_add_local_json_folder')) {
    // Load: ACF lê os JSONs desta pasta ao inicializar
    add_filter('acf/settings/load_json', function (array $paths): array {
        $paths[] = THEME_DIR . '/acf-json';
        return $paths;
    });

    // Save: ao salvar/exportar um grupo no painel, o arquivo vai para esta pasta
    add_filter('acf/settings/save_json', function (): string {
        return THEME_DIR . '/acf-json';
    });
}
