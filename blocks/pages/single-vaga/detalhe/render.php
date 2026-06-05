<?php
defined('ABSPATH') || exit;

$data    = BlockImporter::data();
$detalhe = BlockImporter::field('single_vaga_detalhe', $data) ?? get_field('single_vaga_detalhe') ?? [];
$conteudo = BlockImporter::field('single_vaga_conteudo', $data) ?? get_field('single_vaga_conteudo') ?? [];

block_render('single-vaga-detalhe', [
    'titulo'            => get_the_title(),
    'categoria'         => $detalhe['categoria']   ?? '',
    'descricao'         => $detalhe['descricao']   ?? '',
    'localizacao'       => $detalhe['localizacao'] ?? '',
    'contratacao'       => $detalhe['contratacao'] ?? '',
    'sobre'             => $conteudo['sobre']       ?? '',
    'responsabilidades' => acf_repeater($conteudo['responsabilidades'] ?? [], fn($item) => [
        'item' => $item['item'] ?? '',
    ]),
    'requisitos'        => acf_repeater($conteudo['requisitos'] ?? [], fn($item) => [
        'item' => $item['item'] ?? '',
    ]),
    'diferenciais'      => acf_repeater($conteudo['diferenciais'] ?? [], fn($item) => [
        'item' => $item['item'] ?? '',
    ]),
    'beneficios'        => acf_repeater($conteudo['beneficios'] ?? [], fn($item) => [
        'item' => $item['item'] ?? '',
    ]),
]);
