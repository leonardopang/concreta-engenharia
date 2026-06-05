<?php
global $tpl;

$cta = get_field('sobre_fale_conosco') ?: [];
$bg_url = get_template_directory_uri() . '/images/single-solucao/pattern-solucao.webp';

$tpl->wrap('page-single-case', function ($t) use ($cta, $bg_url) {
    $single = $t->scope('pages/single-case');

    $single->partial('hero');

    echo '<div class="solucao-sections-bg" style="background: url(\'' . esc_url($bg_url) . '\') lightgray 50% / cover no-repeat;">';

    $single->partial('conteudo')
        ->partial('solucao')
        ->partial('resultados')
        ->partial('galeria');

    echo '</div>';

    $t->scope('pages/sobre')->partial('fale-conosco', [
        'sobre_fale_conosco' => $cta,
    ]);
});
