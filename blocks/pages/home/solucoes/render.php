<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('nossas_solucoes', $data) ?? get_field('nossas_solucoes') ?? [];

$cards = acf_repeater($group['cards'] ?? [], fn($card) => [
    'icone'       => acf_image($card['icone']  ?? null),
    'title'       => $card['title']       ?? '',
    'description' => $card['description'] ?? '',
    'button'      => acf_link($card['button'] ?? null),
]);

block_render('home-solucoes', [
    'background'  => acf_image( $group['background'] ?? null ),
    'title'       => $group['title']       ?? '',
    'description' => $group['description'] ?? '',
    'cards'       => $cards,
]);
