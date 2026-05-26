<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('nossosDiferenciais', $data) ?? get_field('nossos_diferenciais') ?? [];

$list = acf_repeater($group['list'] ?? [], fn($item) => [
    'icone' => acf_image($item['icone'] ?? null),
    'title' => $item['title'] ?? '',
]);

block_render('home-diferenciais', [
    'background'  => acf_image( $group['background'] ?? null ),
    'eyebrow'     => $group['eyebrow']     ?? '',
    'title'       => $group['title']       ?? '',
    'description' => $group['description'] ?? '',
    'imagem'      => acf_image($group['imagem'] ?? null),
    'list'        => $list,
]);
