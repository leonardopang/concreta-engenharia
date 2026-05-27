<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('cases_hero', $data) ?? get_field('cases_hero') ?? [];

block_render('cases-hero', [
    'title'    => $group['title']    ?? '',
    'subtitle' => $group['subtitle'] ?? '',
    'bgImage'  => acf_image($group['bg_image'] ?? null),
]);
