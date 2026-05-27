<?php
global $tpl;

$tpl->wrap('page-case', function ($t) {
    $case = $t->scope('pages/case');

    $case->partial('hero')
         ->partial('intro')
         ->partial('servicos')
         ->partial('capacidade')
         ->partial('aplicacoes');

    $cta = get_field('case_cta') ?? [];
    $t->scope('pages/sobre')->partial('fale-conosco', [
        'sobre_fale_conosco' => $cta,
    ]);
});
