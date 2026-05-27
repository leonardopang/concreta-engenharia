<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('sobre_compromisso', $data) ?? get_field('sobre_compromisso') ?? [];

block_render('sobre-compromisso', [
    'background' => acf_image($group['background'] ?? null),
    'title'      => $group['title'] ?? '',
    'text'       => acf_wysiwyg($group['text'] ?? ''),
]);
