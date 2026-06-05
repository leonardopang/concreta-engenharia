<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('case_intro', $data) ?? get_field('case_intro') ?? [];

block_render('solucoes-intro', [
    'title'       => $group['title']       ?? '',
    'description' => acf_wysiwyg($group['description'] ?? ''),
    'image1'      => acf_image($group['image1'] ?? null),
    'image2'      => acf_image($group['image2'] ?? null),
]);
