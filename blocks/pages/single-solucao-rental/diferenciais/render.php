<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('single_solucao_rental_diferenciais', $data) ?? get_field('single_solucao_rental_diferenciais') ?? [];

block_render('single-solucao-rental-diferenciais', [
    'sectionTitle'       => $group['section_title']       ?? '',
    'sectionDescription' => $group['section_description'] ?? '',
    'cardBgImage'        => acf_image($group['card_bg_image'] ?? null),
    'cardQuote'          => $group['card_quote']  ?? '',
    'cardButton'         => acf_link($group['card_button'] ?? null),
    'cardTitle'          => $group['card_title']  ?? '',
    'items'              => acf_repeater($group['items'] ?? [], fn($item) => [
        'text' => $item['text'] ?? '',
    ]),
]);
