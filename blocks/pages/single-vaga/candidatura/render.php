<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('single_vaga_candidatura', $data) ?? get_field('single_vaga_candidatura') ?? [];

$shortcode = $group['formulario'] ?? '';
$form_html = $shortcode ? do_shortcode($shortcode) : '';

block_render('trabalhe-curriculo', [
    'title'       => $group['title']       ?? 'Como se candidatar',
    'description' => $group['description'] ?? '',
    'ctaButton'   => acf_link($group['button_curriculo'] ?? null),
    'bgImage'     => acf_image($group['background'] ?? null),
    'formHtml'    => $form_html,
]);
