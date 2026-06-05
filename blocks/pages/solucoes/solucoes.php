<?php
defined('ABSPATH') || exit;

global $tpl;

$tpl->wrap('page-solucoes', function ($t) {
    $solucoes = $t->scope('pages/solucoes');

    $solucoes->partial('hero');
    echo '<div class="solucao-sections-bg" style="background: url(\'' . esc_url($bg_url) . '\') lightgray 50% / cover no-repeat;">';
    $t->scope('pages/single-solucao')->partial('intro');
    $solucoes->partial('servicos')
        ->partial('capacidade');
    $solucoes->partial('aplicacoes');
    echo '</div>';
    $cta = get_field('fale_conosco') ?? [];
    $t->scope('pages/sobre')->partial('fale-conosco', [
        'sobre_fale_conosco' => $cta,
    ]);
});
