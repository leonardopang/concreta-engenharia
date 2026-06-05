<?php
defined('ABSPATH') || exit;

global $tpl;

$cta      = get_field('single_solucao_cta') ?: [];
$servico1 = get_field('single_solucao_servico_1') ?: [];
$servico2 = get_field('single_solucao_servico_2') ?: [];

$bg_url = get_template_directory_uri() . '/images/single-solucao/pattern-solucao.webp';

$tpl->wrap('page-single-solucao', function ($t) use ($cta, $servico1, $servico2, $bg_url) {
    $solucao = $t->scope('pages/single-solucao');

    $solucao->partial('hero');

    echo '<div class="solucao-sections-bg" style="background: url(\'' . esc_url($bg_url) . '\') lightgray 50% / cover no-repeat;">';
    $solucao->partial('intro');
    $solucao->partial('servicos', array_merge($servico1, ['reversed' => false]));
    $solucao->partial('servicos', array_merge($servico2, ['reversed' => true]));
    echo '</div>';

    $t->scope('global')->partial('text-image', ['reversed' => true]);

    $t->scope('pages/sobre')->partial('fale-conosco', [
        'sobre_fale_conosco' => $cta,
    ]);
});
