<?php
defined('ABSPATH') || exit;

$data = BlockImporter::data();

$header_opts = get_field('header', 'tema') ?: [];
$cta         = $data['cta']  ?? $header_opts['button'] ?? null;
$acf_logo    = $data['logo'] ?? $header_opts['logo']   ?? null;
$site_url    = home_url('/');
$site_name   = get_bloginfo('name');

// ─── Logo ─────────────────────────────────────────────────────────────────────
if (!empty($acf_logo['url'])) {
  $logo = [
    'url'    => $acf_logo['url'],
    'alt'    => $acf_logo['alt']    ?: $site_name,
    'width'  => $acf_logo['width']  ?? 171,
    'height' => $acf_logo['height'] ?? 44,
  ];
} elseif (has_custom_logo()) {
  $logo_id  = get_theme_mod('custom_logo');
  $logo_img = wp_get_attachment_image_src($logo_id, 'full');
  $logo = [
    'url'    => $logo_img ? $logo_img[0] : '',
    'alt'    => get_post_meta($logo_id, '_wp_attachment_image_alt', true) ?: $site_name,
    'width'  => 171,
    'height' => 44,
  ];
} else {
  $logo = ['url' => '', 'alt' => $site_name, 'width' => 0, 'height' => 0];
}

// ─── Nav items (menu registrado em 'header') ──────────────────────────────────
$nav_items   = [];
$locations   = get_nav_menu_locations();
$menu_id     = $locations['header'] ?? 0;
$current_url = home_url(add_query_arg([], $GLOBALS['wp']->request ?? ''));

if ($menu_id) {
  $items = wp_get_nav_menu_items($menu_id) ?: [];
  $children_by_parent = [];

  foreach ($items as $item) {
    if ((int) $item->menu_item_parent === 0) continue;

    $children_by_parent[$item->menu_item_parent][] = [
      'label'   => $item->title,
      'url'     => $item->url,
      'current' => trailingslashit($item->url) === trailingslashit($current_url),
    ];
  }

  foreach ($items as $item) {
    if ((int) $item->menu_item_parent !== 0) continue;

    $nav_items[] = [
      'label'    => $item->title,
      'url'      => $item->url,
      'current'  => trailingslashit($item->url) === trailingslashit($current_url),
      'children' => $children_by_parent[$item->ID] ?? [],
    ];
  }
}

// ─── Payload ──────────────────────────────────────────────────────────────────
block_render('header', [
  'siteUrl'  => $site_url,
  'siteName' => $site_name,
  'logo'     => $logo,
  'navItems' => $nav_items,
  'cta'      => acf_link($cta, 'Solicitar orçamento'),
]);