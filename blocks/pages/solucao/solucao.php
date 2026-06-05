<?php
defined('ABSPATH') || exit;

global $tpl;

$cta = get_field('fale_conosco') ?: [];
$bg_url = get_template_directory_uri() . '/images/single-solucao/pattern-solucao.webp';

$tpl->wrap('page-solucao', function ($t) use ($cta, $bg_url) {
    $solucao = $t->scope('pages/solucao');

    $t->scope('pages/single-solucao')->partial('hero');

    echo '<div class="solucao-sections-bg" style="background: url(\'' . esc_url($bg_url) . '\') lightgray 50% / cover no-repeat;">';

    $t->scope('pages/single-solucao')->partial('intro', [
        'single_solucao_intro' => get_field('solucao_intro') ?? [],
    ]);

    $solucao->partial('servicos-pav')
        ->partial('servicos-conc');

    $solucao->partial('capacidade')
        ->partial('aplicacoes');
    echo '</div>';

    $t->scope('pages/sobre')->partial('fale-conosco', [
        'sobre_fale_conosco' => $cta,
    ]);
});
