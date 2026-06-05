<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('case_aplicacoes', $data) ?? get_field('case_aplicacoes') ?? [];

block_render('solucoes-aplicacoes', [
    'title'        => $group['title']        ?? '',
    'description'  => $group['description']  ?? '',
    'image'        => acf_image($group['image'] ?? null),
    'items'        => acf_repeater($group['items'] ?? [], fn($item) => [
        'text' => $item['text'] ?? '',
    ]),
    'bannerText'   => $group['banner_text']  ?? '',
    'bannerButton' => acf_link($group['banner_button'] ?? null),
]);
