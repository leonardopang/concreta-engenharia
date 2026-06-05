<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('single_solucao_intro', $data) ?? get_field('single_solucao_intro') ?? [];

block_render('single-solucao-intro', [
    'title'       => $group['title']       ?? '',
    'description' => acf_wysiwyg($group['description'] ?? ''),
    'image1'      => acf_image($group['imagem'] ?? null),
]);
