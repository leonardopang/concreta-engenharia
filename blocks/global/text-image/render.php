<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('textImage', $data) ?? get_field('text_image') ?? [];

block_render('text-image', [
    'background' => acf_image($group['background'] ?? null),
    'imagem'     => acf_image($group['imagem']     ?? null),
    'title'      => $group['title'] ?? '',
    'text'       => acf_wysiwyg($group['text'] ?? ''),
    'button'     => acf_link($group['button'] ?? null),
]);
