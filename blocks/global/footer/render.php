<?php
defined('ABSPATH') || exit;

$data = BlockImporter::data();

$footer_opts = get_field('footer', 'tema') ?: [];

// Logo
$acf_logo = $data['logo'] ?? $footer_opts['logo'] ?? null;
$site_name = get_bloginfo('name');

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

// Social links
$redes_raw = $footer_opts['rede_social'] ?? [];
$socials = [];
foreach ((array) $redes_raw as $item) {
  if (!empty($item['link'])) {
    $socials[] = [
      'rede'   => $item['rede']           ?? '',
      'url'    => $item['link']    ?? '',
      'target' => $item['link']['target'] ?? '_blank',
    ];
  }
}

// Nav menus — ACF menu field returns menu ID directly
function _footer_menu_items($menu_id): array
{
  if (!$menu_id) return [];
  $items = wp_get_nav_menu_items((int) $menu_id) ?: [];
  return array_map(fn($i) => ['label' => $i->title, 'url' => $i->url], $items);
}

$institucional = _footer_menu_items($footer_opts['institucional'] ?? 0);
$solucoes      = _footer_menu_items($footer_opts['solucoes']      ?? 0);

// Contact
$contact = [
  'phone'      => $footer_opts['tefone']         ?? '',
  'email'      => $footer_opts['email']          ?? '',
  'address'    => $footer_opts['endereco']        ?? '',
  'addressUrl' => $footer_opts['link_endereco']   ?? '',
  'hours'      => acf_html($footer_opts['horario']) ?? '',
];

// Bottom bar
$privacy = $footer_opts['politica_de_privacidade'] ?? null;
$bottom = [
  'copy'         => $footer_opts['copy']    ?? '',
  'privacyLabel' => $privacy['title']       ?? 'Política de Privacidade',
  'privacyUrl'   => $privacy['url']         ?? '',
  'upsitesUrl'   => $footer_opts['upsites'] ?? '',
];

block_render('footer', [
  'logo'          => $logo,
  'socials'       => $socials,
  'institucional' => $institucional,
  'solucoes'      => $solucoes,
  'contact'       => $contact,
  'bottom'        => $bottom,
]);