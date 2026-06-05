<?php
defined('ABSPATH') || exit;

global $tpl;

$cta = get_field('sobre_fale_conosco') ?: [];

$tpl->wrap('page-single-solucao-rental', function ($t) use ($cta) {
    $solucao = $t->scope('pages/single-solucao');
    $rental  = $t->scope('pages/single-solucao-rental');

    $solucao->partial('hero')
            ->partial('intro');

    $rental->partial('equipamentos')
           ->partial('diferenciais');

    $solucao->partial('atuacao');

    $t->scope('pages/sobre')->partial('fale-conosco', [
        'sobre_fale_conosco' => $cta,
    ]);
});
