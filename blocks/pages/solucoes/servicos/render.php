<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('case_servicos', $data) ?? get_field('case_servicos') ?? [];

$items = acf_repeater($group['items'] ?? [], fn($item) => [
    'title'       => $item['title']      ?? '',
    'description' => $item['description'] ?? '',
    'cardTitle'   => $item['card_title']  ?? '',
    'checkItems'  => acf_repeater($item['check_items'] ?? [], fn($ci) => [
        'text' => $ci['text'] ?? '',
    ]),
    'cardImage'   => acf_image($item['card_image'] ?? null),
    'cardQuote'   => $item['card_quote']  ?? '',
    'cardButton'  => acf_link($item['card_button'] ?? null),
    'layout'      => $item['layout']     ?? 'items_left',
]);

block_render('solucoes-servicos', [
    'items' => $items,
]);
