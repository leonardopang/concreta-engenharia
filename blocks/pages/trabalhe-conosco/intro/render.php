<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('trabalhe_intro', $data) ?? get_field('trabalhe_intro') ?? [];

block_render('trabalhe-intro', [
    'title'       => $group['title']       ?? '',
    'description' => acf_wysiwyg($group['description'] ?? ''),
]);
