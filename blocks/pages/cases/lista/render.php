<?php
defined('ABSPATH') || exit;

$query = new WP_Query([
    'post_type'      => 'case',
    'post_status'    => 'publish',
    'posts_per_page' => -1,
    'orderby'        => 'date',
    'order'          => 'DESC',
]);

$posts = [];

if ($query->have_posts()) {
    while ($query->have_posts()) {
        $query->the_post();
        $post_id = get_the_ID();

        $posts[] = [
            'title'    => get_the_title(),
            'url'      => get_permalink(),
            'thumbnail' => acf_image(get_field('thumbnail', $post_id)),
            'local'    => get_field('local_da_obra', $post_id)     ?? '',
            'servico'  => get_field('servico_executado', $post_id) ?? '',
            'resumo'   => get_field('resumo', $post_id)            ?? '',
        ];
    }
    wp_reset_postdata();
}

block_render('cases-lista', [
    'posts' => $posts,
]);
