<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$raw   = BlockImporter::field('items', $data) ?? get_field('faixa') ?? [];
$items = acf_repeater($raw, fn($row) => is_array($row) ? ($row['item'] ?? '') : (string) $row);
$items = array_values(array_filter($items));

if (empty($items)) {
    $items = ['Estrutura, força e confiança que constroem o futuro.'];
}

block_render('home-faixa', ['items' => $items]);
