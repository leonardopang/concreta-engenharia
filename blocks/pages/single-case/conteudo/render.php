<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$items = BlockImporter::field('single_case_conteudo', $data) ?? get_field('single_case_conteudo') ?? [];

block_render('single-case-conteudo', [
    'sections' => acf_repeater($items, fn($item) => [
        'eyebrow'     => $item['eyebrow']     ?? '',
        'title'       => $item['title']       ?? '',
        'description' => acf_wysiwyg($item['description'] ?? ''),
        'image1'      => acf_image($item['image1'] ?? null),
        'image2'      => acf_image($item['image2'] ?? null),
        'layout'      => $item['layout']      ?? 'text_right',
    ]),
]);
