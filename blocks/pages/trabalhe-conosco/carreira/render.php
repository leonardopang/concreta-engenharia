<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('trabalhe_carreira', $data) ?? get_field('trabalhe_carreira') ?? [];

block_render('trabalhe-carreira', [
    'imagem'      => acf_image($group['imagem'] ?? null),
    'title'       => $group['title']       ?? '',
    'description' => acf_wysiwyg($group['description'] ?? ''),
    'button'      => acf_link($group['button'] ?? null),
]);
