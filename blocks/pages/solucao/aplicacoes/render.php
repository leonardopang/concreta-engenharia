<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('solucao_aplicacoes', $data) ?? get_field('solucao_aplicacoes') ?? [];

block_render('solucao-aplicacoes', [
    'background'   => acf_image($group['background'] ?? null),
    'title'        => $group['title']        ?? '',
    'description'  => acf_wysiwyg($group['description'] ?? ''),
    'image'        => acf_image($group['image'] ?? null),
    'cards'        => acf_repeater($group['cards'] ?? [], fn($item) => [
        'text' => $item['text'] ?? '',
    ]),
    'bannerText'   => $group['banner_text']   ?? '',
    'bannerButton' => acf_link($group['banner_button'] ?? null),
]);
