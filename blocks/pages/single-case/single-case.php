<?php
global $tpl;

$cta = get_field('sobre_fale_conosco') ?: [];

$tpl->wrap('page-single-case', function ($t) use ($cta) {
    $single = $t->scope('pages/single-case');

    $single->partial('hero')
           ->partial('conteudo')
           ->partial('solucao')
           ->partial('resultados')
           ->partial('galeria');

    $t->scope('pages/sobre')->partial('fale-conosco', [
        'sobre_fale_conosco' => $cta,
    ]);
});
