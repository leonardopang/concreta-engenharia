<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = BlockImporter::field('trabalhe_areas', $data) ?? get_field('trabalhe_areas') ?? [];

block_render('trabalhe-areas', [
    'title'         => $group['title']          ?? '',
    'description'   => $group['description']    ?? '',
    'areas'         => acf_repeater($group['areas'] ?? [], fn($item) => [
        'nome' => $item['nome'] ?? '',
    ]),
    'bancoTalentos' => $group['banco_talentos'] ?? '',
]);
