<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('single_case_resultados', $data) ?? get_field('single_case_resultados') ?? [];

block_render('single-case-resultados', [
    'title'       => $group['title']       ?? '',
    'description' => acf_wysiwyg($group['description'] ?? ''),
    'fichaTitle'  => $group['ficha_title'] ?? 'Ficha Técnica',
    'fichaItems'  => acf_repeater($group['ficha_items'] ?? [], fn($item) => [
        'label' => $item['label'] ?? '',
        'value' => $item['value'] ?? '',
    ]),
]);
