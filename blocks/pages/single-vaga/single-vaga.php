<?php
global $tpl;

$tpl->wrap('page-single-vaga', function ($t) {
    $single = $t->scope('pages/single-vaga');

    $single->partial('detalhe')
           ->partial('candidatura');
});
