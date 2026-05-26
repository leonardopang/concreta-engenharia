<?php
defined('ABSPATH') || exit;

/**
 * Atalhos procedurais para BlockImporter.
 * Importe em functions.php e use diretamente nos render.php.
 */

/**
 * Normaliza campo ACF do tipo Image.
 *
 * @param mixed $field          Valor bruto do ACF
 * @param int   $default_width  Largura padrão em px
 * @param int   $default_height Altura padrão em px
 */
function acf_image(mixed $field, int $default_width = 0, int $default_height = 0): ?array {
    return BlockImporter::image($field, $default_width, $default_height);
}

/**
 * Normaliza campo ACF do tipo Link/Button.
 *
 * @param mixed  $field         Valor bruto do ACF
 * @param string $default_label Label fallback
 */
function acf_link(mixed $field, string $default_label = ''): ?array {
    return BlockImporter::link($field, $default_label);
}

/**
 * Normaliza campo ACF do tipo Repeater.
 *
 * @param mixed         $field Valor bruto do ACF
 * @param callable|null $map   Callback de mapeamento por item
 */
function acf_repeater(mixed $field, ?callable $map = null): array {
    return BlockImporter::repeater($field, $map);
}

/**
 * Normaliza campo ACF do tipo Group.
 *
 * @param mixed $field Valor bruto do ACF
 */
function acf_group(mixed $field): array {
    return BlockImporter::group($field);
}

/**
 * Normaliza campo ACF do tipo WYSIWYG (retorna HTML sanitizado).
 *
 * @param mixed $field Valor bruto do ACF
 */
function acf_wysiwyg(mixed $field): string {
    return BlockImporter::wysiwyg($field);
}

/**
 * Sanitiza um campo de texto com HTML inline permitido (strong, em, span, br, a).
 * Use para títulos e eyebrows que precisam de formatação no painel.
 * No React, renderize com htmlTitle() (dangerouslySetInnerHTML).
 *
 * @param mixed $field Valor bruto do ACF
 */
function acf_html(mixed $field): string {
    return BlockImporter::html($field);
}

/**
 * Retorna o array $data do bloco (override de preview/teste via context).
 */
function block_data(): array {
    return BlockImporter::data();
}

/**
 * Serializa o payload e imprime o HTML âncora do bloco.
 *
 * @param string $block_name Valor do atributo data-block
 * @param array  $payload    Dados a serializar
 */
function block_render(string $block_name, array $payload): void {
    BlockImporter::render($block_name, $payload);
}
