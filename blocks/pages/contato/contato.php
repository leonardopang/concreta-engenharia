<?php
global $tpl;

$tpl->wrap('page-contato', function ($t) {
    $contato = $t->scope('pages/contato');

    $contato->partial('hero')
            ->partial('form')
            ->partial('cta');
});
