<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('sobre_hero', $data) ?? get_field('sobre_hero') ?? [];

block_render('sobre-hero', [
    'background' => acf_image($group['background'] ?? null),
    'title'      => $group['title'] ?? '',
]);
