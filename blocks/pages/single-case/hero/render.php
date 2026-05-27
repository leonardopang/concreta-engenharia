<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('single_case_hero', $data) ?? get_field('single_case_hero') ?? [];

$thumbnail_id = get_post_thumbnail_id();
$thumbnail    = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full') : null;
$bg_image     = $thumbnail ? [
    'url'    => $thumbnail[0],
    'alt'    => get_the_title(),
    'width'  => $thumbnail[1],
    'height' => $thumbnail[2],
] : null;

block_render('single-case-hero', [
    'title'    => get_the_title(),
    'bgImage'  => $bg_image,
    'empresa'  => $group['empresa'] ?? '',
    'ano'      => $group['ano']     ?? '',
    'servico'  => $group['servico'] ?? '',
    'local'    => $group['local']   ?? '',
]);
