<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('sobre_capacidade', $data) ?? get_field('sobre_capacidade') ?? [];

block_render('sobre-capacidade', [
    'background'  => acf_image($group['background'] ?? null),
    'eyebrow'     => $group['eyebrow']     ?? '',
    'title'       => $group['title']       ?? '',
    'description' => $group['description'] ?? '',
    'imagem'      => acf_image($group['imagem'] ?? null),
    'items'       => acf_repeater($group['items'] ?? [], fn($item) => [
        'icone' => acf_image($item['icone'] ?? null),
        'title' => $item['title'] ?? '',
    ]),
]);
