<?php
global $tpl;

$tpl->wrap('page-sobre', function ($t) {
    $sobre = $t->scope('pages/sobre');

    $sobre->partial('hero')
          ->partial('quem-somos')
          ->partial('historia')
          ->partial('capacidade')
          ->partial('atuacao')
          ->partial('compromisso')
          ->partial('fale-conosco');
});
