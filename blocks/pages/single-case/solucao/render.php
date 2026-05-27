<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('single_case_solucao', $data) ?? get_field('single_case_solucao') ?? [];

block_render('single-case-solucao', [
    'title' => $group['title'] ?? 'Solução aplicada',
    'items' => acf_repeater($group['items'] ?? [], fn($item) => [
        'text' => $item['text'] ?? '',
    ]),
]);
