<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('sobre_fale_conosco', $data) ?? get_field('sobre_fale_conosco') ?? [];

block_render('sobre-fale-conosco', [
    'background'  => acf_image($group['background']  ?? null),
    'eyebrow'     => $group['eyebrow']                ?? '',
    'title'       => $group['title']                  ?? '',
    'description' => $group['description']            ?? '',
    'button'      => acf_link($group['button']        ?? null),
    'button2'     => acf_link($group['button_2']      ?? null),
]);
