<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$items = BlockImporter::field('single_case_conteudo', $data) ?? get_field('single_case_conteudo') ?? [];

block_render('single-case-conteudo', [
    'sections' => acf_repeater($items, fn($item) => [
        'eyebrow'     => $item['eyebrow']     ?? '',
        'title'       => $item['title']       ?? '',
        'description' => acf_wysiwyg($item['description'] ?? ''),
        'image'       => acf_image($item['imagem'] ?? null),
        'layout'      => $item['layout']      ?? 'text_right',
    ]),
]);
