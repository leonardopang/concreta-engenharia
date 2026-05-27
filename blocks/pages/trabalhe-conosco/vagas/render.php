<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('trabalhe_vagas', $data) ?? get_field('trabalhe_vagas') ?? [];

block_render('trabalhe-vagas', [
    'title' => $group['title'] ?? '',
    'vagas' => acf_repeater($group['vagas'] ?? [], fn($item) => [
        'titulo'      => $item['titulo']      ?? '',
        'categoria'   => $item['categoria']   ?? '',
        'descricao'   => $item['descricao']   ?? '',
        'localizacao' => $item['localizacao'] ?? '',
        'contratacao' => $item['contratacao'] ?? '',
        'link'        => acf_link($item['link'] ?? null),
    ]),
]);
