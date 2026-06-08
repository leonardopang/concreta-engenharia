<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('sobre_fale_conosco', $data) ?? get_field('sobre_fale_conosco') ?? [];

block_render('sobre-fale-conosco', [
    'patternUrl'  => get_template_directory_uri() . '/images/pattern-fale-conosco.webp',
    'eyebrow'     => $group['eyebrow']                ?? '',
    'title'       => $group['title']                  ?? '',
    'description' => $group['description']            ?? '',
    'button'      => acf_link($group['button']        ?? null),
    'button2'     => acf_link($group['button_2']      ?? null),
]);
