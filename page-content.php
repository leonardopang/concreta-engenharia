<?php
/**
 * Template Name: Página de Conteúdo
 * Template Post Type: page
 *
 * Usado para: Política de Privacidade, Termos e Condições e páginas similares.
 */
defined('ABSPATH') || exit;

get_header();
?>

<main class="content-page">

    <header class="content-page__hero">
        <div class="content-page__hero-inner">
            <?php if (has_post_thumbnail()) : ?>
                <div class="content-page__hero-bg" aria-hidden="true">
                    <?php the_post_thumbnail('full'); ?>
                </div>
            <?php endif; ?>
            <div class="content-page__hero-overlay" aria-hidden="true"></div>
            <h1 class="content-page__hero-title"><?php the_title(); ?></h1>
        </div>
    </header>

    <article class="content-page__body">
        <div class="content-page__body-inner">
            <div class="content-page__content">
                <?php
                if (have_posts()) :
                    the_post();
                    the_content();
                endif;
                ?>
            </div>
        </div>
    </article>

</main>

<?php get_footer(); ?>
