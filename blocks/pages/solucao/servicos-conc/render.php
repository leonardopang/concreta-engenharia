<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('solucao_servicos_conc', $data) ?? get_field('solucao_servicos_conc') ?? [];

block_render('single-solucao-servicos', [
    'sectionTitle'       => $group['section_title']       ?? '',
    'sectionDescription' => $group['section_description'] ?? '',
    'cardListTitle'      => $group['card_list_title']     ?? '',
    'items'              => acf_repeater($group['items'] ?? [], fn($item) => [
        'text' => $item['text'] ?? '',
    ]),
    'cardBgImage' => acf_image($group['card_bg_image'] ?? null),
    'cardQuote'   => $group['card_quote']  ?? '',
    'cardButton'  => acf_link($group['card_button'] ?? null),
    'reversed'    => true,
]);
