<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('case_hero', $data) ?? get_field('case_hero') ?? [];

block_render('solucoes-hero', [
    'title'       => $group['title']       ?? '',
    'subtitle'    => $group['subtitle']    ?? '',
    'description' => acf_wysiwyg($group['description'] ?? ''),
    'button'      => acf_link($group['button']   ?? null),
    'button2'     => acf_link($group['button_2'] ?? null),
]);
