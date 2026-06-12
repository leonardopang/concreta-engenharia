<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('contato_form', $data) ?? get_field('contato_form') ?? [];

$shortcode = $group['formulario'] ?? '';
$form_html = $shortcode ? do_shortcode($shortcode) : '';

block_render('contato-form', [
    'title'       => $group['title']       ?? '',
    'titleForm'   => $group['title_form']  ?? '',
    'description' => $group['description'] ?? '',
    'phone'       => $group['phone']       ?? '',
    'email'       => $group['email']       ?? '',
    'address'     => $group['address']     ?? '',
    'hours'       => $group['hours']       ?? '',
    'mapImage'    => acf_image($group['map_image'] ?? null),
    'mapUrl'      => $group['map_url']     ?? '',
    'formHtml'    => $form_html,
]);
