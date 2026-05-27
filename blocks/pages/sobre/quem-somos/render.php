<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('sobre_quem_somos', $data) ?? get_field('sobre_quem_somos') ?? [];

block_render('sobre-quem-somos', [
    'background' => acf_image($group['background'] ?? null),
    'imagens'    => acf_repeater($group['imagens'] ?? [], fn($item) => [
        'imagem' => acf_image($item['imagem'] ?? null),
    ]),
    'title'      => $group['title'] ?? '',
    'text'       => acf_wysiwyg($group['text'] ?? ''),
]);
