<?php
defined('ABSPATH') || exit;

global $tpl;

$tpl->wrap('page-home', function ($t) {
    $home = $t->scope('pages/home');

    $home->partial('hero')
         ->partial('faixa');

    $t->scope('global')->partial('text-image');

    $home->partial('solucoes')
         ->partial('diferenciais')
         ->partial('cases')
         ->partial('trabalhe-conosco')
         ->partial('fale-conosco');
});
