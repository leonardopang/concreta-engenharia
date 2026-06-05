<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('single_solucao_rental_equipamentos', $data) ?? get_field('single_solucao_rental_equipamentos') ?? [];

block_render('single-solucao-rental-equipamentos', [
    'sectionTitle'       => $group['section_title']       ?? '',
    'sectionDescription' => $group['section_description'] ?? '',
    'items'              => acf_repeater($group['items'] ?? [], fn($item) => [
        'text' => $item['text'] ?? '',
    ]),
    'cardQuote'  => $group['card_quote']  ?? '',
    'cardButton' => acf_link($group['card_button'] ?? null),
]);
