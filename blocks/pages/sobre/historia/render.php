<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('sobre_historia', $data) ?? get_field('sobre_historia') ?? [];

block_render('sobre-historia', [
    'background'  => acf_image($group['background'] ?? null),
    'eyebrow'     => $group['eyebrow']     ?? '',
    'title'       => $group['title']       ?? '',
    'description' => $group['description'] ?? '',
    'logos'       => acf_repeater($group['logos'] ?? [], fn($item) => [
        'logo' => acf_image($item['logo'] ?? null),
    ]),
    'cardText'    => $group['card_text']   ?? '',
    'cardButton'  => acf_link($group['card_button'] ?? null),
]);
