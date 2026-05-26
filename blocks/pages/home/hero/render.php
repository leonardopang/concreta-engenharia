<?php
defined('ABSPATH') || exit;

$data = BlockImporter::data();
$hero = get_field('hero') ?: [];

block_render('home-hero', [
    'title'       => acf_html($hero['title'] ?? ''),
    'description' => BlockImporter::field('description', $data) ?? $hero['description'] ?? '',
    'bgImage'     => acf_image($hero['background'] ?? null),
    'image'       => acf_image($hero['imagem']     ?? null),
    'cta'         => acf_link($hero['button']   ?? null),
    'cta2'        => acf_link($hero['button_2'] ?? null),
]);
