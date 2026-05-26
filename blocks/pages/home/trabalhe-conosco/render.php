<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('trabalhe_conosco', $data) ?? get_field('trabalhe_conosco') ?? [];
$card  = acf_group( $group['card'] ?? [] );

block_render('home-trabalhe-conosco', [
    'background'  => acf_image( $group['background'] ?? null ),
    'eyebrow'     => $group['eyebrow']     ?? '',
    'title'       => $group['title']       ?? '',
    'description' => acf_wysiwyg( $group['description'] ?? '' ),
    'button'      => acf_link( $group['button'] ?? null ),
    'cardIcone'   => acf_image( $card['icone'] ?? null ),
    'cardDesc'    => $card['description'] ?? '',
    'imagem'      => acf_image( $group['imagem'] ?? null ),
]);
