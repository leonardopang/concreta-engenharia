<?php
global $tpl;

$cta = get_field('sobre_fale_conosco') ?: [];

$tpl->wrap('page-cases', function ($t) use ($cta) {
    $cases = $t->scope('pages/cases');

    $cases->partial('hero')
          ->partial('lista');

    $t->scope('pages/sobre')->partial('fale-conosco', [
        'sobre_fale_conosco' => $cta,
    ]);
});
