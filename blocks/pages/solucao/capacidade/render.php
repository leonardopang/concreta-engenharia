<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('solucao_capacidade', $data) ?? get_field('solucao_capacidade') ?? [];

block_render('solucao-capacidade', [
    'background'  => acf_image($group['background'] ?? null),
    'title'       => $group['title']       ?? '',
    'description' => acf_wysiwyg($group['description'] ?? ''),
    'image'       => acf_image($group['image'] ?? null),
    'items'       => acf_repeater($group['items'] ?? [], fn($item) => [
        'text' => $item['text'] ?? '',
    ]),
]);
