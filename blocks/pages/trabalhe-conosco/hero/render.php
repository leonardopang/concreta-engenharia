<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('trabalhe_hero', $data) ?? get_field('trabalhe_hero') ?? [];

block_render('trabalhe-hero', [
    'background' => acf_image($group['background'] ?? null),
    'title'      => $group['title'] ?? 'Trabalhe conosco',
]);
