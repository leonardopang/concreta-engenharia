<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('solucao_hero', $data) ?? get_field('solucao_hero') ?? [];

block_render('single-solucao-hero', [
    'title'       => acf_html($group['title']       ?? ''),
    'subtitle'    => acf_html($group['subtitle']    ?? ''),
    'bgImage'     => acf_image($group['bg_image'] ?? null),
    'description' => acf_wysiwyg($group['description'] ?? ''),
    'button'      => acf_link($group['button']   ?? null),
    'button2'     => acf_link($group['button_2'] ?? null),
]);
