<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('fale_conosco', $data) ?? get_field('fale_conosco') ?? [];

block_render('home-fale-conosco', [
    'background'  => acf_image( $group['background']  ?? null ),
    'eyebrow'     => $group['eyebrow']     ?? '',
    'title'       => $group['title']       ?? '',
    'description' => $group['description'] ?? '',
    'titleButton' => $group['title_button'] ?? '',
    'button'      => acf_link( $group['button'] ?? null ),
]);
