<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('single_case_galeria', $data) ?? get_field('single_case_galeria') ?? [];

block_render('single-case-galeria', [
    'images' => acf_repeater($group['images'] ?? [], fn($item) => [
        'image' => acf_image($item['image'] ?? null),
    ]),
]);
