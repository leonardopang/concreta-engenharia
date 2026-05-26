# Agente de Frontend — Concreta Engenharia

Este documento é a fonte da verdade para criar módulos neste tema WordPress. Leia antes de qualquer tarefa de frontend.

---

## Estrutura de pastas

```
blocks/
  global/               ← blocos reutilizáveis em qualquer página
    <module-name>/
      block.json
      render.php
  pages/
    <page>/             ← blocos exclusivos de uma página (ex: home, about)
      <module-name>/
        block.json
        render.php
      <page>.php        ← orquestra os includes da página

src/
  icons/
    index.tsx           ← todos os ícones SVG do projeto (named exports)
  components/
    Button/             ← componente reutilizável de botão (primary / secondary)
      index.tsx
      types.ts
      style.module.scss
    SmartImage/         ← renderiza imagem ACF: SVG inline ou <img> com lazy/decoding
      index.tsx
      types.ts
  blocks/
    global/
      <ModuleName>/
        index.tsx       ← componente React (default export) — só JSX e imports
        types.ts        ← interfaces TypeScript do bloco
        style.module.scss
    pages/
      <page>/
        <ModuleName>/
          index.tsx
          types.ts
          style.module.scss
  styles/
    _tokens.scss        ← variáveis, mixins, breakpoints
    _reset.scss
    global.scss

acf-json/               ← JSONs exportados pelo ACF (source of truth dos campos)

includes/
  class-block-importer.php  ← classe BlockImporter (normalização de dados ACF)
  class-tpl.php             ← classe Tpl — motor de templates ($tpl global)
  helpers.php               ← funções procedurais (acf_image, acf_link, block_render…)

src/
  utils/
    index.ts                ← helpers TypeScript (imgProps, linkProps, hasItems…)
```

---

## Como uma tarefa começa

Ao receber uma tarefa de criação de módulo, o usuário pode fornecer:

1. **Link MCP da página ou do módulo** — acesse o link para visualizar o layout/design antes de escrever qualquer código. Use-o para entender estrutura visual, hierarquia de elementos e possíveis variantes.
2. **Descrição do módulo** — pode ser qualquer coisa: `hero`, `header`, `footer`, `sobre`, `depoimentos`, `galeria`, `cta`, `cards`, `faq`, etc.
3. **Página de destino** — onde o módulo vai viver (ex: home, sobre, contato). Se não for informado, o módulo vai para `global/`.

Leia o link MCP **antes** de qualquer outra coisa. Ele é a referência visual definitiva.

---

## Nomes de módulos — regra de genericidade

Nomes de módulos devem ser **genéricos o suficiente para serem reutilizados em outra página** sem parecer errado.

| Situação | Errado | Certo |
|---|---|---|
| Hero da home | `HomeHero` | `Hero` |
| Cards de serviços | `HomeServicos` | `Cards` ou `Servicos` |
| Depoimentos da home | `HomeDepoimentos` | `Depoimentos` |
| CTA do rodapé | `FooterCta` | `Cta` |
| Galeria de produtos | `HomeGaleria` | `Galeria` |
| Seção sobre a empresa | `HomeSobre` | `Sobre` |
| Lista de diferenciais | `HomeDiferenciais` | `Diferenciais` |
| Formulário de contato | `ContatoForm` | `Contato` |
| Banner institucional | `HomeBanner` | `Banner` |
| Bloco de FAQ | `HomeFaq` | `Faq` |

A pasta da **página** já dá o contexto de onde ele vive. O nome do módulo só precisa dizer o que ele é.

Quando dois módulos de páginas diferentes são visualmente o mesmo padrão, mover para `global/` e reutilizar.

---

## Convenções gerais

- Nomes de pasta em **PascalCase** em `src/` (ex: `ExampleHero`)
- Nomes de pasta em **kebab-case** em `blocks/` (ex: `example-hero`)
- SCSS: **BEM** (`block`, `block__element`, `block--modifier`)
- SCSS: sempre **mobile-first** — estilos base sem media query, desktop dentro de `@include respond-to($bp-*)`
- Nomes de classes BEM devem ser **curtos e descritivos** do que representam visualmente
- Todo frontend é em **React** — o `render.php` apenas serializa dados ACF em JSON; o componente React faz todo o HTML

---

## Arquitetura: PHP → JSON → React

O fluxo de dados é sempre:

```
ACF (WordPress) → render.php (serializa JSON) → <script type="application/json"> → index.ts (monta React) → componente TSX (renderiza HTML)
```

### render.php — única responsabilidade: serializar dados

O `render.php` **não escreve HTML estrutural**. Ele apenas:
1. Lê campos do ACF
2. Normaliza os dados via `BlockImporter`
3. Serializa em JSON e imprime a âncora via `block_render()`

**Padrão atual com BlockImporter + helpers:**

```php
<?php
defined('ABSPATH') || exit;

$data  = BlockImporter::data();
$group = get_field('example_group') ?: [];

block_render('example-hero', [
    'heading'    => BlockImporter::field('heading', $data)    ?? $group['heading']    ?? '',
    'subheading' => BlockImporter::field('subheading', $data) ?? $group['subheading'] ?? '',
    'image'      => acf_image($group['image']),
    'cta'        => acf_link($group['button']),
    'items'      => acf_repeater($group['list'], fn($item) => [
        'title' => $item['title'] ?? '',
        'text'  => $item['text']  ?? '',
    ]),
]);
```

**Padrão legado (ainda válido para blocos existentes):**

```php
<?php
defined('ABSPATH') || exit;

$data = isset($data) ? $data : (get_query_var('data') ?: []);
$data = is_array($data) ? $data : [];

$payload = wp_json_encode([
    'heading' => $data['heading'] ?? get_field('heading') ?? '',
]);
?>
<div data-block="example-hero">
    <script type="application/json"><?php echo $payload; ?></script>
</div>
```

**Regras do render.php:**
- Usar `BlockImporter::data()` no lugar das duas linhas `$data = ...`
- Usar `block_render($name, $payload)` no lugar do bloco `<div>`/`<script>` manual
- Usar `acf_image()`, `acf_link()`, `acf_repeater()` para normalizar campos complexos
- Nomes de chave no payload em **camelCase** (ex: `ctaLabel`, `bgImage`)
- O atributo `data-block` deve corresponder exatamente à chave registrada em `src/index.ts`

### BlockImporter — referência de métodos PHP

Classe disponível globalmente (carregada em `functions.php`).

| Método | Parâmetros | Retorno | Uso |
|---|---|---|---|
| `BlockImporter::data()` | — | `array` | Retorna `$data` do bloco (substitui as 2 linhas `$data = ...`) |
| `BlockImporter::field($key, $data, $location)` | `string`, `array`, `?string` | `mixed` | Resolve campo: prefere `$data`, depois ACF |
| `BlockImporter::image($field, $w, $h)` | `mixed`, `int`, `int` | `?array` | Normaliza campo Image → `{url, alt, width, height}` ou `null` |
| `BlockImporter::link($field, $default)` | `mixed`, `string` | `?array` | Normaliza campo Link/Button → `{label, url, target}` ou `null` |
| `BlockImporter::repeater($field, $map)` | `mixed`, `?callable` | `array` | Normaliza Repeater com mapeamento opcional por item |
| `BlockImporter::group($field)` | `mixed` | `array` | Normaliza Group → array ou `[]` |
| `BlockImporter::wysiwyg($field)` | `mixed` | `string` | Retorna HTML sanitizado via `wp_kses_post` |
| `BlockImporter::render($name, $payload)` | `string`, `array` | `void` | Imprime `<div data-block>` + JSON |

**Helpers procedurais** (`includes/helpers.php`) — atalhos para os métodos acima:

```php
acf_image($field, $w, $h)   // → BlockImporter::image()
acf_link($field, $default)  // → BlockImporter::link()
acf_repeater($field, $map)  // → BlockImporter::repeater()
acf_group($field)           // → BlockImporter::group()
acf_wysiwyg($field)         // → BlockImporter::wysiwyg()
acf_html($field)            // → BlockImporter::html()  ← HTML inline em títulos
block_data()                // → BlockImporter::data()
block_render($name, $data)  // → BlockImporter::render()
```

**`BlockImporter::html()` — títulos com HTML inline**

Use quando o campo ACF de título precisar de formatação (`<strong>`, `<em>`, `<br>`, `<span>`). Diferente de `wysiwyg()`, só permite tags inline seguras.

```php
// render.php
block_render('home-hero', [
    'title' => acf_html($hero['title']),  // permite <strong>palavra</strong>
    'text'  => acf_wysiwyg($hero['text']), // campo WYSIWYG completo
]);
```

```tsx
// index.tsx — renderizar com htmlTitle() para o browser interpretar as tags
import { htmlTitle, htmlContent } from '../../../utils';

<h1 className={styles.hero__title} {...htmlTitle(title)} />
<div className={styles.hero__text}  {...htmlContent(text)} />
```

### Helpers TypeScript — `src/utils/index.ts`

Importar em qualquer componente:

```ts
import { imgProps, linkProps, hasItems, firstDefined, htmlContent } from '../../../utils';
import type { AcfImage, AcfLink } from '../../../utils';
```

| Export | Uso |
|---|---|
| `AcfImage` | Interface `{url, alt, width, height, svgContent?}` — usar em `types.ts` para campos de imagem |
| `AcfLink` | Interface `{label, url, target}` — usar em `types.ts` para campos de link/botão |
| `isAcfImage(v)` | Guard de tipo — verifica se um valor é `AcfImage` válido |
| `isAcfLink(v)` | Guard de tipo — verifica se um valor é `AcfLink` válido |
| `imgProps(image, overrides?)` | Retorna atributos prontos para `<img>` (omite `width/height` se forem 0) |
| `linkProps(link, overrides?)` | Retorna atributos prontos para `<a>` + `rel` automático quando `target="_blank"` |
| `hasItems(list)` | Guard para arrays de repeater — use antes de `.map()` |
| `firstDefined(...values)` | Primeiro valor não-vazio — fallback de campos opcionais |
| `htmlContent(raw)` | Retorna `{ dangerouslySetInnerHTML }` para campos WYSIWYG |
| `htmlTitle(raw)` | Retorna `{ dangerouslySetInnerHTML }` para títulos com HTML inline (strong, em, span, br) |

**Exemplos de uso em componentes:**

```tsx
import { linkProps, hasItems, htmlContent } from '../../../utils';
import type { AcfImage, AcfLink } from '../../../utils';
import SmartImage from '../../../components/SmartImage';

// Imagem ACF (JPG/PNG/SVG) — sempre via SmartImage
<SmartImage image={image} className={styles.hero__image} />

// Imagem decorativa (sem texto alternativo)
<SmartImage image={background} alt="" loading="eager" className={styles.hero__bg} />

// Ícone SVG vindo do ACF (inline automático)
<SmartImage image={card.icone} className={styles.card__icon} />

// Link
{linkProps(cta) && (
  <a {...linkProps(cta)!} className={styles.hero__cta}>
    {cta!.label}
  </a>
)}

// Repeater
{hasItems(items) && items.map((item, i) => (
  <li key={i}>{item.title}</li>
))}

// WYSIWYG
<div className={styles.block__text} {...htmlContent(description)} />
```

### index.ts — registrar o bloco

Todo novo bloco deve ser registrado em `src/index.ts`:

```ts
const blockRegistry: Record<string, () => Promise<BlockModule>> = {
  // Global
  'example-hero': () => import(/* webpackChunkName: "blocks/global/ExampleHero" */ './blocks/global/ExampleHero'),
  // Home
  'home-hero':    () => import(/* webpackChunkName: "blocks/home/Hero" */          './blocks/pages/home/Hero'),
};
```

Convenção do `webpackChunkName`: `"blocks/<page>/<ModuleName>"` ou `"blocks/global/<ModuleName>"`.

### types.ts — interfaces TypeScript

Cada bloco tem seu próprio `types.ts` com as interfaces exportadas. O `index.tsx` importa deste arquivo.

```ts
// src/blocks/global/ExampleHero/types.ts
export interface ExampleHeroProps {
  heading: string;
  subheading?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  variant?: 'default' | 'dark' | 'brand';
}
```

### index.tsx — componente React

- Arquivo: `src/blocks/<global|pages/<page>>/<ModuleName>/index.tsx`
- **Default export** obrigatório (o engine monta via `default`)
- Importa props de `./types`
- Estilos via CSS Modules (`import styles from './style.module.scss'`)
- Ícones via `import { IconName } from '../../../icons'`
- Usar `clsx` para classes condicionais
- O arquivo deve conter **apenas** imports e o componente JSX — sem interfaces inline, sem SVGs inline

```tsx
import clsx from 'clsx';
import styles from './style.module.scss';
import { ExampleHeroProps } from './types';

export default function ExampleHero({
  heading,
  subheading,
  ctaLabel,
  ctaUrl,
  variant = 'default',
}: ExampleHeroProps) {
  return (
    <section className={clsx(styles.hero, variant !== 'default' && styles[`hero--${variant}`])}>
      <div className={styles.hero__inner}>
        <h1 className={styles.hero__heading}>{heading}</h1>

        {subheading && (
          <p className={styles.hero__subheading}>{subheading}</p>
        )}

        {ctaLabel && ctaUrl && (
          <a href={ctaUrl} className={styles.hero__cta}>
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
```

---

## block.json — OBRIGATÓRIO em todo módulo

**Todo módulo precisa de um `block.json`**. Sem ele o WordPress não registra o bloco e ele não aparece no editor ACF nem é carregado na página.

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "theme/example-hero",
  "title": "Example Hero",
  "category": "theme",
  "description": "Breve descrição do bloco.",
  "keywords": ["hero", "banner"],
  "supports": {
    "html": false,
    "align": ["full", "wide"]
  },
  "acf": {
    "mode": "preview",
    "renderTemplate": "render.php"
  },
  "editorScript": "file:../../build/index.js",
  "editorStyle": "file:../../build/index.css",
  "style": "file:../../build/index.css"
}
```

**Regras do block.json:**
- `name`: sempre `theme/<kebab-case-do-modulo>`
- `title`: nome legível em inglês ou português
- `keywords`: termos para facilitar busca no editor
- Caminho do `file:` conforme profundidade da pasta:
  - `blocks/global/<name>/` → `file:../../build/index.js`
  - `blocks/pages/<page>/<name>/` → `file:../../../build/index.js`

---

## SCSS — style.module.scss

- `@use` sempre a partir de `src/styles/tokens`
- Estrutura BEM: bloco raiz → elementos (`__`) → modificadores (`--`)
- Mobile-first: base → `@include respond-to($bp-md)` → `@include respond-to($bp-lg)`
- Classes referenciadas no TSX via `styles.nomeDaClasse` (CSS Modules)

```scss
@use '../../../styles/tokens' as *;

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 320px;
  padding: $space-8 $space-4;
  background-color: $color-bg;

  @include respond-to($bp-md) {
    min-height: 480px;
    padding: $space-12 $space-8;
  }

  &--dark  { background-color: $color-dark;    color: $color-white; }
  &--brand { background-color: $color-primary;  color: $color-white; }
}

.hero__inner {
  @include container;
  text-align: center;
}

.hero__heading {
  font-size: clamp(1.75rem, 5vw, $font-size-5xl);
  font-weight: $font-weight-bold;
  line-height: $line-height-tight;
  color: $color-text;
}

.hero__subheading {
  margin-top: $space-4;
  font-size: clamp(1rem, 2vw, $font-size-lg);
  color: $color-text-muted;

  @include respond-to($bp-md) { margin-top: $space-6; }
}

.hero__cta {
  display: inline-block;
  margin-top: $space-6;
  padding: $space-3 $space-8;
  background-color: $color-accent;
  color: $color-white;
  font-weight: $font-weight-semibold;
  font-size: $font-size-md;
  text-decoration: none;
  border-radius: 4px;
  transition: opacity 150ms ease;

  &:hover { opacity: 0.85; }

  @include respond-to($bp-md) {
    margin-top: $space-8;
    font-size: $font-size-lg;
  }
}
```

---

## Tokens disponíveis — `src/styles/_tokens.scss`

### Cores — Brand
| Token | Valor | Uso |
|---|---|---|
| `$color-brand-100` | `#f29506` | Laranja — CTA, destaques |
| `$color-brand-200` | `#048837` | Verde — cor principal da marca |
| `$color-brand-300` | `#293377` | Azul médio |
| `$color-brand-400` | `#18236c` | Azul escuro |
| `$color-brand-500` | `#060d3c` | Navy — fundos escuros |

### Cores — Neutral
| Token | Valor | Uso |
|---|---|---|
| `$color-neutral-100` | `#f5f5f5` | Fundo claro |
| `$color-neutral-200` | `#e5e5e5` | Borda sutil |
| `$color-neutral-300` | `#cccccc` | Separador |
| `$color-neutral-400` | `#999999` | Texto desabilitado |
| `$color-neutral-500` | `#737373` | Texto secundário |
| `$color-neutral-600` | `#4d4d4d` | Texto corpo |
| `$color-neutral-700` | `#333333` | Texto forte |
| `$color-neutral-800` | `#1a1a1a` | Texto título |

### Cores — Semânticos (preferir estes)
| Token | Aponta para | Uso |
|---|---|---|
| `$color-white` | `#ffffff` | Branco puro |
| `$color-primary` | `$color-brand-200` | Verde — cor principal |
| `$color-accent` | `$color-brand-100` | Laranja — botões CTA |
| `$color-dark` | `$color-brand-500` | Navy — fundos escuros |
| `$color-text` | `$color-neutral-800` | Texto padrão |
| `$color-text-muted` | `$color-neutral-500` | Texto secundário |
| `$color-border` | `$color-neutral-300` | Bordas |
| `$color-bg` | `$color-neutral-100` | Fundo de seções |

### Tipografia
- Fonte única: **Plus Jakarta Sans** → `$font-base`
- Pesos: `$font-weight-regular` (400) · `$font-weight-medium` (500) · `$font-weight-semibold` (600) · `$font-weight-bold` (700)
- Line-heights: `$line-height-tight` (1.2) · `$line-height-snug` (1.4) · `$line-height-normal` (1.5) · `$line-height-relaxed` (1.6)
- Tamanhos: `$font-size-sm` (14px) · `$font-size-md` (16px) · `$font-size-lg` (18px) · `$font-size-xl` (20px) · `$font-size-2xl` (24px) · `$font-size-3xl` (30px) · `$font-size-4xl` (36px) · `$font-size-5xl` (48px)

### Espaçamento
`$space-1` (4px) · `$space-2` (8px) · `$space-3` (12px) · `$space-4` (16px) · `$space-5` (20px) · `$space-6` (24px) · `$space-8` (32px) · `$space-10` (40px) · `$space-12` (48px) · `$space-16` (64px) · `$space-20` (80px) · `$space-24` (96px)

---

## Componentes reutilizáveis — `src/components/`

Componentes genéricos que se repetem em múltiplos blocos ficam em `src/components/`. Cada um segue a mesma estrutura de bloco: `index.tsx`, `types.ts`, `style.module.scss`.

### Button

Uso em qualquer bloco:

```tsx
import Button from '../../../../components/Button';

<Button label="Solicitar orçamento" url="/contato" variant="primary" />
<Button label="Conhecer serviços"   url="/servicos" variant="secondary" />
```

Variantes:
- `primary` — fundo `$color-accent` (laranja), texto escuro
- `secondary` — fundo transparente, borda e texto brancos (para uso sobre fundos escuros)

Props: `label` (obrigatório), `url`, `target`, `variant`, `type`, `onClick`, `className`.

### SmartImage

**Use sempre que renderizar um campo ACF do tipo Image** — substitui o `<img>` manual e o `imgProps()` direto.

Detecta automaticamente se a imagem é SVG e a renderiza inline; para JPG/PNG renderiza `<img>` com `loading="lazy"` e `decoding="async"` por padrão.

```tsx
import SmartImage from '../../../../components/SmartImage';

// Imagem principal (JPG/PNG/SVG automático)
<SmartImage image={image} className={styles.card__image} />

// Imagem decorativa — sem alt, eager acima da dobra
<SmartImage image={bgImage} alt="" loading="eager" className={styles.hero__bg} />

// Ícone do ACF (SVG inline automático)
<SmartImage image={card.icone} className={styles.card__icon} />

// Dimensões forçadas (ex: logo)
<SmartImage image={logo} width={171} height={44} className={styles.header__logoImg} />
```

Props: `image` (obrigatório), `className`, `alt`, `width`, `height`, `loading` (`lazy` padrão), `decoding` (`async` padrão).

**Comportamento por tipo:**

| Imagem | Renderiza |
|---|---|
| SVG com alt | `<span role="img" aria-label="…">…svg…</span>` |
| SVG decorativo (`alt=""`) | `<span aria-hidden="true">…svg…</span>` |
| JPG / PNG / WebP | `<img src loading="lazy" decoding="async" />` |
| `image` nulo/vazio | nada (`null`) |

**Regra:** `imgProps()` direto só deve ser usado quando há necessidade de spread de atributos em contexto muito específico. Em todos os outros casos, use `SmartImage`.

---

## Ícones SVG

- Todos os ícones do projeto ficam em **`src/icons/index.tsx`** como named exports
- Nunca declarar SVGs inline dentro de um componente de bloco — sempre importar de `src/icons`
- **Exceção**: se o campo ACF for do tipo `image`, usar a URL retornada pelo ACF (sem SVG hardcoded)
- Extrair o SVG do Figma via API antes de criar o componente
- Atributos SVG em **camelCase** (JSX): `strokeWidth`, `strokeLinecap`, `fillRule`, `clipRule`, etc.
- Adicionar `aria-hidden="true"` em ícones decorativos

```tsx
// src/icons/index.tsx
export const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="..." stroke="#F29506" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// uso em qualquer bloco:
import { IconPhone } from '../../../icons';
```

---

## Leitura do acf-json

Antes de criar o `render.php`, buscar o arquivo JSON em `acf-json/` correspondente ao módulo. As chaves `name` dos campos são os nomes exatos para `get_field('nome_do_campo')`.

Para a options page (ex: header/footer): usar `get_field('grupo', 'option')` e acessar as sub-chaves do array retornado.

---

## Tpl — motor de templates

A variável global `$tpl` (instância de `Tpl`, criada em `functions.php`) substitui todos os `include` manuais.

O **slug** é relativo à base da instância (padrão `blocks/`):
- `'pages/home/hero'` → `blocks/pages/home/hero/render.php`
- `'global/text-image'` → `blocks/global/text-image/render.php`

### Métodos

| Método | O que faz |
|---|---|
| `partial($slug, $data = [])` | Inclui o `render.php` pelo slug. Retorna `$this` para chaining. |
| `scope($subpath)` | Retorna nova instância com base estendida — permite slugs curtos. |
| `wrap($class, $fn)` | Envolve o grupo de parciais em `<div class="{class}">`. |

### Estrutura de arquivos

`front-page.php` (e qualquer template de página) só inclui o orquestrador da página — não lista blocos diretamente:

```php
<?php
// front-page.php
get_header();
include THEME_DIR . '/blocks/pages/home/home.php';
get_footer();
```

O orquestrador `blocks/pages/home/home.php` é quem usa o `$tpl` e lista os blocos:

```php
<?php
// blocks/pages/home/home.php
global $tpl;

$tpl->wrap('page-home', function ($t) {
    $home = $t->scope('pages/home');

    $home->partial('hero')
         ->partial('faixa');

    $t->scope('global')->partial('text-image');

    $home->partial('solucoes')
         ->partial('diferenciais');
});
```

### Reutilizar bloco com dados diferentes

Passe dados como segundo argumento de `partial()`. Eles ficam disponíveis em `BlockImporter::data()` dentro do `render.php`, com prioridade sobre os campos ACF:

```php
$t->scope('global')->partial('cta', [
    'title'  => 'Fale com um especialista',
    'button' => ['label' => 'Entrar em contato', 'url' => '/contato', 'target' => ''],
]);
```

No `render.php`, use `BlockImporter::field()` para que o override funcione:

```php
$data  = BlockImporter::data();
$group = get_field('cta_group') ?: [];

block_render('cta', [
    'title'  => BlockImporter::field('title', $data)  ?? $group['title']  ?? '',
    'button' => BlockImporter::field('button', $data) ?? acf_link($group['button']),
]);
```

---

## Checklist ao criar um módulo

1. [ ] Acessar o link MCP fornecido e analisar o layout antes de começar
2. [ ] Definir nome genérico para o módulo (ver tabela de nomes)
3. [ ] Decidir se vai em `global/` ou `pages/<page>/`
4. [ ] Ler o JSON em `acf-json/` para mapear os campos disponíveis
5. [ ] Criar `blocks/<path>/<module-name>/render.php` — usar `BlockImporter::data()`, `acf_image()`, `acf_link()`, `acf_repeater()` e `block_render()`
6. [ ] Criar `blocks/<path>/<module-name>/block.json`
7. [ ] Criar `src/blocks/<path>/<ModuleName>/types.ts` — usar `AcfImage` e `AcfLink` de `src/utils` para campos de imagem e link
8. [ ] Adicionar ícones SVG necessários em `src/icons/index.tsx` (se ainda não existirem)
9. [ ] Criar `src/blocks/<path>/<ModuleName>/index.tsx` — usar `SmartImage` para imagens ACF, `linkProps`, `hasItems`, `htmlContent` de `src/utils`
10. [ ] Criar `src/blocks/<path>/<ModuleName>/style.module.scss` — BEM + mobile-first + tokens
11. [ ] Registrar o bloco em `src/index.ts` com o `data-block` correto
12. [ ] Incluir o `render.php` no orquestrador da página
13. [ ] Rodar `yarn build` para compilar
