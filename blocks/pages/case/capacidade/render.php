<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('case_capacidade', $data) ?? get_field('case_capacidade') ?? [];

block_render('solucoes-capacidade', [
    'title'       => $group['title']       ?? '',
    'description' => $group['description'] ?? '',
    'image'       => acf_image($group['image'] ?? null),
    'items'       => acf_repeater($group['items'] ?? [], fn($item) => [
        'text' => $item['text'] ?? '',
    ]),
]);
