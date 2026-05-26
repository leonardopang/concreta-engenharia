<?php
defined('ABSPATH') || exit;

$data = BlockImporter::data();

block_render('example-hero', [
    'heading'    => BlockImporter::field('heading', $data)    ?? get_field('heading')    ?? '',
    'subheading' => BlockImporter::field('subheading', $data) ?? get_field('subheading') ?? '',
    'ctaLabel'   => BlockImporter::field('ctaLabel', $data)   ?? get_field('cta_label')  ?? '',
    'ctaUrl'     => BlockImporter::field('ctaUrl', $data)     ?? get_field('cta_url')    ?? '',
    'variant'    => BlockImporter::field('variant', $data)    ?? get_field('variant')    ?? 'default',
]);
