<?php
defined('ABSPATH') || exit;

$data = BlockImporter::data();

block_render('single-solucao-servicos', [
    'sectionTitle'       => $data['section_title']       ?? '',
    'sectionDescription' => $data['section_description'] ?? '',
    'cardListTitle'      => $data['card_title']          ?? '',
    'items'              => acf_repeater($data['items'] ?? [], fn($item) => [
        'text' => $item['text'] ?? '',
    ]),
    'cardBgImage' => acf_image($data['card_bg_image'] ?? null),
    'cardQuote'   => $data['card_quote']   ?? '',
    'cardButton'  => acf_link($data['card_button'] ?? null),
    'reversed'    => $data['reversed']     ?? false,
]);
