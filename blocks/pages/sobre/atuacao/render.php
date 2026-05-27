<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('sobre_atuacao', $data) ?? get_field('sobre_atuacao') ?? [];

block_render('sobre-atuacao', [
    'eyebrow' => $group['eyebrow'] ?? '',
    'title'   => $group['title']   ?? '',
    'text'    => acf_wysiwyg($group['text'] ?? ''),
    'faixa'   => acf_repeater($group['faixa'] ?? [], fn($item) => [
        'item' => $item['item'] ?? '',
    ]),
]);
