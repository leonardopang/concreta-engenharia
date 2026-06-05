<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('single_case_hero', $data) ?? get_field('single_case_hero') ?? [];

// ACF background field has priority; fall back to featured image
$bg_acf = acf_image($group['background'] ?? null);

$bg_image = $bg_acf;
if ( ! $bg_image ) {
    $thumbnail_id = get_post_thumbnail_id();
    $thumbnail    = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full') : null;
    if ( $thumbnail ) {
        $bg_image = [
            'url'    => $thumbnail[0],
            'alt'    => '',
            'width'  => $thumbnail[1],
            'height' => $thumbnail[2],
        ];
    }
}

block_render('single-case-hero', [
    'title'    => get_the_title(),
    'bgImage'  => $bg_image,
    'empresa'  => $group['empresa'] ?? '',
    'ano'      => $group['ano']     ?? '',
    'servico'  => $group['servico'] ?? '',
    'local'    => $group['local']   ?? '',
]);
