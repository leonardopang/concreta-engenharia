<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('trabalhe_vagas', $data) ?? get_field('trabalhe_vagas') ?? [];

$termos = get_terms([
    'taxonomy'   => 'cat_vagas',
    'hide_empty' => true,
    'orderby'    => 'name',
    'order'      => 'ASC',
]);

$categorias = [];
if (!is_wp_error($termos) && !empty($termos)) {
    foreach ($termos as $termo) {
        $categorias[] = [
            'slug' => $termo->slug,
            'nome' => $termo->name,
        ];
    }
}

$query = new WP_Query([
    'post_type'      => 'vaga',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'order'          => 'DESC',
]);

$vagas = [];
if ($query->have_posts()) {
    foreach ($query->posts as $post) {
        $fields    = get_field('single_vaga_detalhe', $post->ID) ?: [];
        $cat_terms = get_the_terms($post->ID, 'cat_vagas');
        $cat_slug  = '';
        $cat_nome  = '';
        if (!is_wp_error($cat_terms) && !empty($cat_terms)) {
            $cat_slug = $cat_terms[0]->slug;
            $cat_nome = $cat_terms[0]->name;
        }
        $link_acf = acf_link($fields['link'] ?? null);
        $vagas[] = [
            'titulo'        => get_the_title($post),
            'categoriaSlug' => $cat_slug,
            'categoriaNome' => $cat_nome,
            'descricao'     => $fields['descricao'] ?? get_the_excerpt($post),
            'localizacao'   => $fields['localizacao'] ?? '',
            'contratacao'   => $fields['contratacao'] ?? '',
            'link'          => $link_acf ?? ['label' => 'Ver vaga', 'url' => get_permalink($post), 'target' => ''],
        ];
    }
    wp_reset_postdata();
}

block_render('trabalhe-vagas', [
    'title'      => $group['title'] ?? '',
    'categorias' => $categorias,
    'vagas'      => $vagas,
]);
