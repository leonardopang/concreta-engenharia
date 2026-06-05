<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('single_solucao_diferenciais', $data) ?? get_field('single_solucao_diferenciais') ?? [];

block_render('single-solucao-diferenciais', [
    'sectionTitle'       => $group['section_title']       ?? '',
    'sectionDescription' => $group['section_description'] ?? '',
    'photo'              => acf_image($group['photo'] ?? null),
    'cardTitle'          => $group['card_title'] ?? '',
    'items'              => acf_repeater($group['items'] ?? [], fn($item) => [
        'text' => $item['text'] ?? '',
    ]),
]);
