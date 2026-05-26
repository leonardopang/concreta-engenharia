<?php
defined('ABSPATH') || exit;

/**
 * Enfileira os assets gerados pelo @wordpress/scripts na pasta /build.
 *
 * O arquivo index.asset.php é gerado automaticamente pelo build e contém
 * o hash de versão e as dependências exatas do bundle (ex: wp-element).
 */
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'theme-fonts',
        'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap',
        [],
        null
    );

    $asset_file = THEME_DIR . '/build/index.asset.php';

    if (! file_exists($asset_file)) {
        return;
    }

    $asset = require $asset_file;

    wp_enqueue_script(
        'theme-main',
        THEME_URI . '/build/index.js',
        $asset['dependencies'],
        $asset['version'],
        true
    );

    if (file_exists(THEME_DIR . '/build/index.css')) {
        wp_enqueue_style(
            'theme-main',
            THEME_URI . '/build/index.css',
            [],
            $asset['version']
        );
    }
});

/**
 * Enfileira assets no editor de blocos (Gutenberg).
 * Garante que os blocos React também funcionem no contexto do editor.
 */
add_action('enqueue_block_editor_assets', function () {
    $asset_file = THEME_DIR . '/build/index.asset.php';

    if (! file_exists($asset_file)) {
        return;
    }

    $asset = require $asset_file;

    wp_enqueue_script(
        'theme-main-editor',
        THEME_URI . '/build/index.js',
        $asset['dependencies'],
        $asset['version'],
        true
    );
});
