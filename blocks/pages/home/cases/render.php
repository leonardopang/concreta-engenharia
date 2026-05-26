<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('cases', $data) ?? get_field('cases') ?? [];

$posts = get_posts([
    'post_type'      => 'case',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
    'orderby'        => 'menu_order',
    'order'          => 'ASC',
]);

$cases = array_map(function ($post) {
    $acf_img = get_field('field_6a158089bf2b6', $post->ID);
    $image   = $acf_img ? acf_image($acf_img) : null;

    if ( ! $image ) {
        $thumb_id = get_post_thumbnail_id( $post->ID );
        if ( $thumb_id ) {
            $src   = wp_get_attachment_image_src( $thumb_id, 'large' );
            $image = $src ? [ 'url' => $src[0], 'alt' => get_the_title( $post->ID ), 'width' => $src[1], 'height' => $src[2] ] : null;
        }
    }

    return [
        'title'            => get_the_title( $post->ID ),
        'url'              => get_permalink( $post->ID ),
        'image'            => $image,
        'localDaObra'      => get_field( 'local_da_obra', $post->ID ) ?? '',
        'servicoExecutado' => get_field( 'servico_executado', $post->ID ) ?? '',
    ];
}, $posts);

block_render('home-cases', [
    'background'  => acf_image( $group['background'] ?? null ),
    'eyebrow'     => $group['eyebrow']     ?? '',
    'title'       => $group['title']       ?? '',
    'description' => $group['description'] ?? '',
    'button'      => acf_link( $group['button'] ?? null ),
    'cases'       => $cases,
]);
