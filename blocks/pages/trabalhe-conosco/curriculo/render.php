<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('trabalhe_curriculo', $data) ?? get_field('trabalhe_curriculo') ?? [];

$shortcode = $group['formulario'] ?? '';
$form_html = $shortcode ? do_shortcode($shortcode) : '';

$bg_url = $data['_bg_url'] ?? null;
$bg_image = $bg_url ? ['url' => $bg_url, 'alt' => '', 'width' => 0, 'height' => 0] : null;

block_render('trabalhe-curriculo', [
    'title'       => $group['title']       ?? '',
    'description' => $group['description'] ?? '',
    'formHtml'    => $form_html,
    'bgImage'     => $bg_image,
]);
