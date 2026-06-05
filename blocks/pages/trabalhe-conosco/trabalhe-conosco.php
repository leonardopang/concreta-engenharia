<?php
global $tpl;

$curriculo_bg = get_template_directory_uri() . '/images/pattern-fale-conosco.webp';

$tpl->wrap('page-trabalhe-conosco', function ($t) use ($curriculo_bg) {
    $tc = $t->scope('pages/trabalhe-conosco');

    $tc->partial('hero')
       ->partial('intro')
       ->partial('carreira')
       ->partial('areas')
       ->partial('vagas');

    $tc->partial('curriculo', ['_bg_url' => $curriculo_bg]);
});
