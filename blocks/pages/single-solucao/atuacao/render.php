<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('single_solucao_capacidade', $data) ?? get_field('single_solucao_capacidade') ?? [];

block_render('single-solucao-atuacao', [
    'title'       => $group['section_title']       ?? '',
    'description' => $group['section_description'] ?? '',
    'photo'       => acf_image($group['photo']      ?? null),
    'items'       => acf_repeater($group['items'] ?? [], fn($item) => [
        'text' => $item['text'] ?? '',
    ]),
]);
