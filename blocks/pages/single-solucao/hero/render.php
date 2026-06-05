<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('single_solucao_hero', $data) ?? get_field('single_solucao_hero') ?? [];

block_render('single-solucao-hero', [
    'title'       => $group['title']       ?? '',
    'subtitle'    => $group['subtitle']    ?? '',
    'bgImage'     => acf_image($group['bg_image'] ?? null),
    'description' => acf_wysiwyg($group['description'] ?? ''),
    'button'   => acf_link($group['button']   ?? null),
    'button2'  => acf_link($group['button_2'] ?? null),
]);
