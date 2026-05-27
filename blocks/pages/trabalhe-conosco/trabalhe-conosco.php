<?php
global $tpl;

$tpl->wrap('page-trabalhe-conosco', function ($t) {
    $tc = $t->scope('pages/trabalhe-conosco');

    $tc->partial('hero')
       ->partial('intro')
       ->partial('carreira')
       ->partial('areas')
       ->partial('vagas')
       ->partial('curriculo');
});
