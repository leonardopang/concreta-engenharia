<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('contato_hero', $data) ?? get_field('contato_hero') ?? [];

block_render('contato-hero', [
    'title'    => $group['title']    ?? '',
    'subtitle' => $group['subtitle'] ?? '',
]);
