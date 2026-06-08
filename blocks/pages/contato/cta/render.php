<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('contato_cta', $data) ?? get_field('contato_cta') ?? [];

block_render('contato-cta', [
    'patternUrl'  => get_template_directory_uri() . '/images/pattern-fale-conosco.webp',
    'eyebrow'     => $group['eyebrow']     ?? '',
    'title'       => $group['title']       ?? '',
    'description' => acf_wysiwyg($group['description'] ?? ''),
    'button'      => acf_link($group['button'] ?? null),
]);
