<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('trabalhe_curriculo', $data) ?? get_field('trabalhe_curriculo') ?? [];

$shortcode = $group['formulario'] ?? '';
$form_html = $shortcode ? do_shortcode($shortcode) : '';

block_render('trabalhe-curriculo', [
    'title'       => $group['title']       ?? '',
    'description' => $group['description'] ?? '',
    'formHtml'    => $form_html,
]);
