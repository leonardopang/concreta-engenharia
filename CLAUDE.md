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

Depois de ler o design, e **antes de escrever qualquer código**, execute a **Auditoria de reuso** (ver seção dedicada abaixo). Só crie arquivos novos após confirmar que não há bloco existente que já resolva o problema.

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

## Fidelidade ao CSS do Figma — regra obrigatória

Ao implementar qualquer módulo a partir de um link MCP do Figma, use **exatamente** os valores de CSS que o Figma expõe (font-size, font-weight, line-height, letter-spacing, cores, espaçamentos, border-radius, sombras, etc.).

### Fluxo obrigatório

1. Inspecionar o CSS do elemento no Figma (via `get_design_context` ou `get_code_connect_suggestions`)
2. Para cada valor encontrado:
   - **Verificar se já existe** um token em `src/styles/_tokens.scss` que represente esse valor
   - Se existir → usar o token
   - Se **não existir** → **criar o token** em `_tokens.scss` antes de usá-lo no SCSS do módulo
3. Nunca escrever valores literais no SCSS de um módulo se o valor pode virar token

### Quando criar um novo token

Crie um token sempre que um valor do Figma não tiver correspondência exata em `_tokens.scss`:

```scss
// _tokens.scss — exemplos de tokens novos criados a partir do Figma

// Tipografia
$font-size-6xl: 3.75rem;  // 60px — encontrado no hero da home
$letter-spacing-tight: -0.02em; // encontrado em títulos grandes

// Espaçamento
$space-14: 3.5rem; // 56px — encontrado no padding do hero

// Border-radius
$radius-sm:  4px;
$radius-md:  8px;
$radius-lg:  16px;
$radius-full: 9999px; // pílulas / tags arredondadas

// Sombra
$shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
$shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
$shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);

// Cor nova (adicionar na seção correta)
$color-neutral-900: #0d0d0d;
$color-brand-50: #e8f5ee; // verde muito claro
```

### Regras

- **Adicionar o token em `_tokens.scss` primeiro**, depois usá-lo no SCSS do módulo — nunca o contrário
- Agrupar tokens novos nas seções já existentes do arquivo (Cores, Tipografia, Espaçamento, etc.)
- Se um valor aparecer em mais de uma página, ele **certamente** vira token — não espere repetir
- Valores únicos de um único elemento (ex: um `width: 3px` de um detalhe decorativo) podem ficar literais no SCSS do módulo
- Cores novas que não têm nome semântico claro: adicionar como `$color-brand-*` ou `$color-neutral-*` seguindo a escala existente

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

## Agente de Backend — Criação de Field Groups ACF

Este agente é acionado quando o usuário fornece um **link MCP de uma página** e pede a criação dos campos ACF correspondentes. O resultado é um arquivo JSON em `acf-json/` pronto para ser lido pelo painel do WordPress.

### Como a tarefa começa

O usuário fornece:
1. **Link MCP da página** — acesse antes de qualquer coisa para entender a estrutura visual e os dados necessários
2. **Nome da página** — ex: `home`, `sobre`, `servicos`, `contato`
3. **Contexto adicional** (opcional) — campos específicos, variantes, etc.

Leia o link MCP **antes** de qualquer outra coisa. Ele é a referência definitiva para saber quais dados o frontend vai precisar.

> **Importante:** ignorar completamente o Header e o Footer ao analisar a página. Eles são gerenciados por um field group separado (`acf-json/group_6a1421e538371.json` — "Configurações") e nunca devem ser incluídos no JSON da página. Mapear apenas as seções do conteúdo principal entre o header e o footer.

---

### Arquitetura do JSON

Siga rigorosamente o padrão de `acf-json/group_6a1430a069b0e.json`:

**Estrutura raiz obrigatória:**

```json
{
    "key": "group_<hash13hex>",
    "title": "<Nome da Página>",
    "fields": [ ... ],
    "location": [
        [
            {
                "param": "page_type",
                "operator": "==",
                "value": "front_page"
            }
        ]
    ],
    "menu_order": 0,
    "position": "acf_after_title",
    "style": "default",
    "label_placement": "top",
    "instruction_placement": "label",
    "hide_on_screen": ["the_content", "featured_image"],
    "active": true,
    "description": "",
    "show_in_rest": 0,
    "modified": <timestamp_unix_atual>
}
```

**`location` por tipo de página:**

| Página | `param` | `value` |
|---|---|---|
| Página inicial (front page) | `page_type` | `front_page` |
| Página comum pelo template | `page_template` | `page-sobre.php` |
| Página pelo slug | `page` | `== <ID>` (evitar — usar template) |
| Options page | `options_page` | `theme-options` |

---

### Organização dos campos — abas + grupos

Cada **seção visual da página** vira:
1. Um campo `tab` (separador visual no painel)
2. Um campo `group` (agrupa os sub-campos da seção)

Dentro do `group`, use `sub_fields`. Dentro de listas repetíveis, use `repeater` com `sub_fields`.

**Padrão de um bloco com tab + group:**

```json
{
    "key": "field_<hash>",
    "label": "Nome da Seção",
    "name": "",
    "type": "tab",
    "placement": "top",
    "endpoint": 0
},
{
    "key": "field_<hash>",
    "label": "Nome da Seção",
    "name": "nome_da_secao",
    "type": "group",
    "layout": "block",
    "sub_fields": [ ... ]
}
```

O `name` do `tab` é sempre `""`. O `name` do `group` é o snake_case que será usado em `get_field('nome_da_secao')` no `render.php`.

---

### Tipos de campo e quando usar

| Tipo | `"type"` | Quando usar |
|---|---|---|
| Texto simples | `"text"` | Títulos, labels, eyebrow, textos curtos |
| Texto longo | `"textarea"` | Descrições sem formatação |
| WYSIWYG | `"wysiwyg"` | Textos com formatação (negrito, listas, links) |
| Imagem | `"image"` | Qualquer campo de imagem (foto, ícone, background, logo) |
| Link | `"link"` | Botões e CTAs — retorna `{label, url, target}` |
| Grupo | `"group"` | Agrupa campos relacionados (ex: card único, endereço) |
| Repeater | `"repeater"` | Listas de itens (ex: cards, logos, itens de FAQ) |
| Tab | `"tab"` | Separador visual no painel — não armazena dados |

**Imagem — configuração padrão:**

```json
{
    "key": "field_<hash>",
    "label": "Imagem",
    "name": "imagem",
    "type": "image",
    "return_format": "array",
    "library": "all",
    "min_width": "",
    "min_height": "",
    "min_size": "",
    "max_width": "",
    "max_height": "",
    "max_size": "",
    "mime_types": "",
    "allow_in_bindings": 0,
    "preview_size": "medium"
}
```

**Link — configuração padrão:**

```json
{
    "key": "field_<hash>",
    "label": "Button",
    "name": "button",
    "type": "link",
    "return_format": "array",
    "allow_in_bindings": 0
}
```

**Repeater — configuração padrão:**

```json
{
    "key": "field_<hash_repeater>",
    "label": "Items",
    "name": "items",
    "type": "repeater",
    "layout": "block",
    "pagination": 0,
    "min": 0,
    "max": 0,
    "collapsed": "",
    "button_label": "Adicionar item",
    "rows_per_page": 20,
    "sub_fields": [
        {
            "key": "field_<hash>",
            "label": "Title",
            "name": "title",
            "type": "text",
            "parent_repeater": "field_<hash_repeater>"
        }
    ]
}
```

> Todo `sub_field` de um repeater **deve ter** `"parent_repeater": "field_<hash_do_repeater>"`.

---

### Campos obrigatórios em todos os campos

Todo campo precisa destes atributos mínimos (mesmo que vazios):

```json
{
    "key": "field_<hash>",
    "label": "Label",
    "name": "name",
    "aria-label": "",
    "type": "<tipo>",
    "instructions": "",
    "required": 0,
    "conditional_logic": 0,
    "wrapper": {
        "width": "",
        "class": "",
        "id": ""
    }
}
```

---

### Geração de chaves (`key`)

- Formato: `group_<13 caracteres hex>` para grupos raiz
- Formato: `field_<13 caracteres hex>` para campos
- Cada chave deve ser **única no projeto inteiro** — nunca reutilizar
- Gerar como: `field_` + sequência hex incremental a partir do padrão existente no arquivo de referência, ou usar timestamp hex + sufixo aleatório
- Exemplo válido: `field_6a1590c3d4e12`, `field_6a1590c3d4e13`, `field_6a1590c3d4e14`

---

### Nome do arquivo

Sempre: `acf-json/group_<mesma-chave-do-group>.json`

Exemplo: se `"key": "group_6a1590c3d4e10"` → arquivo `acf-json/group_6a1590c3d4e10.json`

---

### Como o JSON aparece no painel

Com os filtros já configurados em `includes/setup.php`, qualquer arquivo salvo em `acf-json/` aparece automaticamente em **ACF → Field Groups** no painel do WordPress. Se o banco de dados não tiver o grupo sincronizado, o painel mostrará um botão **"Sync"**.

Para forçar a sincronização sem usar o botão: basta editar e salvar o grupo no painel — isso atualiza o banco e reescreve o JSON com o timestamp atual.

---

### Mapeamento visual → campos ACF

Ao analisar o link MCP, para cada seção da página identifique:

| Elemento visual | Campo ACF |
|---|---|
| Imagem de fundo decorativa | `image` com `name: "background"` |
| Foto principal / ilustração | `image` com `name: "imagem"` |
| Pré-título pequeno (eyebrow) | `text` com `name: "eyebrow"` |
| Título principal | `text` com `name: "title"` |
| Parágrafo simples | `textarea` com `name: "description"` |
| Parágrafo com formatação | `wysiwyg` com `name: "text"` |
| Botão / CTA único | `link` com `name: "button"` |
| Botão secundário | `link` com `name: "button_2"` |
| Lista de cards repetíveis | `repeater` com `name: "cards"` |
| Lista de logos repetíveis | `repeater` com `name: "logos"` |
| Lista de itens (FAQ, etc.) | `repeater` com `name: "items"` |
| Card único fixo | `group` com `name: "card"` |

---

### Checklist ao criar um field group

1. [ ] Acessar o link MCP e mapear todas as seções visuais da página
2. [ ] Definir o `title` do grupo (nome da página) e a `location` correta
3. [ ] Para cada seção: criar par `tab` + `group`
4. [ ] Para cada dado dentro da seção: escolher o tipo correto (tabela acima)
5. [ ] Usar `repeater` quando houver lista de itens de estrutura idêntica
6. [ ] Usar `group` aninhado quando um card tiver sub-dados fixos
7. [ ] Gerar chaves hex únicas para todos os campos
8. [ ] Adicionar `"parent_repeater"` em todos os sub_fields de repeaters
9. [ ] Definir `"modified"` com timestamp Unix atual
10. [ ] Salvar como `acf-json/group_<chave>.json`
11. [ ] Verificar no painel se o grupo aparece corretamente

---

## Animações GSAP — `data-animate`

Todo módulo criado (exceto Header e Footer) deve ter animações de entrada via GSAP ScrollTrigger, aplicadas declarativamente com o atributo `data-animate` nos elementos do JSX.

As animações são **desktop-only** (≥ 1024px) e inicializadas automaticamente por `src/animations/index.ts` após o carregamento da página.

### Atributos disponíveis

| Atributo | Tipo | Padrão | Descrição |
|---|---|---|---|
| `data-animate` | string | — | Tipo da animação (obrigatório para animar) |
| `data-animate-delay` | string (número) | `"0"` | Delay em segundos antes de iniciar |
| `data-animate-duration` | string (número) | `"0.85"` | Duração da animação em segundos |

### Tipos de animação

| Valor | Efeito |
|---|---|
| `fade` | Só opacidade |
| `fade-up` | Sobe 24px + aparece |
| `fade-down` | Desce 24px + aparece |
| `fade-left` | Vem da direita (x: 24px) + aparece |
| `fade-right` | Vem da esquerda (x: -24px) + aparece |
| `zoom-in` | Cresce de 0.94 + aparece |
| `zoom-out` | Encolhe de 1.06 + aparece |

### Como aplicar no `index.tsx`

Adicione `data-animate` diretamente nos elementos JSX que devem animar. **Nunca animar a `<section>` raiz** — animar os blocos internos para que a seção já esteja visível quando os filhos entram.

**Padrão para módulos com duas colunas (conteúdo + imagem):**

```tsx
<div className={styles.bloco__content} data-animate="fade-right">
  {/* texto, título, botão */}
</div>

<div className={styles.bloco__media} data-animate="fade-left" data-animate-delay="0.15">
  <SmartImage image={imagem} className={styles.bloco__image} />
</div>
```

**Padrão para módulos com header + grid de cards:**

```tsx
<div className={styles.bloco__header} data-animate="fade-up">
  {/* eyebrow, título, descrição */}
</div>

{cards.map((card, i) => (
  <article key={i} className={styles.bloco__card} data-animate="fade-up" data-animate-delay={String(i * 0.1)}>
    {/* conteúdo do card */}
  </article>
))}
```

**Padrão para módulos centralizados (CTA, hero simples):**

```tsx
<div className={styles.bloco__inner} data-animate="fade-up">
  {/* conteúdo centralizado */}
</div>
```

### Regras

- **Não animar** Header e Footer
- **Não animar** a `<section>` raiz nem wrappers de background decorativo
- **Animar** o container de conteúdo principal, colunas, e cards individualmente
- **Stagger em listas**: usar `data-animate-delay={String(i * 0.1)}` para criar entrada em cascata
- **Delay padrão para segundo elemento**: `"0.15"` (suficiente para perceber a sequência sem atrasar demais)
- **Imagens ao lado de texto**: texto com `fade-right`, imagem com `fade-left` + delay `"0.15"`

---

## Auditoria de reuso — OBRIGATÓRIO antes de criar qualquer bloco

Antes de criar qualquer arquivo novo, execute esta auditoria para identificar o que já existe e pode ser reutilizado ou estendido.

### 1. Mapear blocos existentes

Leia os seguintes arquivos para saber o que já existe no projeto:

```
src/index.ts                          ← registro de todos os blocos ativos
blocks/global/                        ← blocos reutilizáveis entre páginas
blocks/pages/<page>/                  ← blocos de cada página
src/blocks/global/                    ← componentes React globais
src/blocks/pages/<page>/              ← componentes React por página
src/components/                       ← Button, SmartImage e outros reutilizáveis
src/icons/index.tsx                   ← todos os ícones disponíveis
```

### 2. Identificar padrões visuais repetidos

Compare cada seção do design (via link MCP) com os blocos já existentes usando esta tabela de referência:

| Padrão visual | Verificar primeiro |
|---|---|
| Hero com fundo escuro + título centralizado | `blocks/pages/sobre/hero` ou `blocks/pages/trabalhe-conosco/hero` |
| Duas colunas texto + imagem | `blocks/global/text-image` |
| Formulário de contato / currículo | `blocks/pages/trabalhe-conosco/curriculo` ou `blocks/pages/home/fale-conosco` |
| Seção com título gradiente + descrição centralizada | padrão repetido em `sobre`, `trabalhe-conosco` — candidato a `global/` |
| Card com lista de itens com ícone check | `blocks/pages/trabalhe-conosco/areas` |
| Lista de cards com filtro por categoria | `blocks/pages/trabalhe-conosco/vagas` |
| Banner escuro com texto centralizado | presente em `areas` como `areas__banner` |
| Faixa ticker / ticker de texto | `blocks/pages/home/faixa` |
| Grid de cases / projetos | `blocks/pages/home/cases` |
| Seção de diferenciais com ícones | `blocks/pages/home/diferenciais` |

### 3. Regras de decisão

**Reutilizar como está** — quando o bloco existente cobre 100% do caso:
- Chamar via `$tpl->partial()` no orquestrador, passando dados diferentes se necessário
- Não duplicar código — usar o mecanismo de override de `BlockImporter::field()` com `$data`

**Estender o bloco existente** — quando o bloco cobre 80%+ do caso mas falta uma variante:
- Adicionar um campo booleano ou de seleção no ACF (ex: `variant: 'dark' | 'light'`)
- Adicionar o modificador BEM no SCSS (ex: `.hero--dark`)
- Nunca criar um bloco novo só para uma variação de cor ou layout mínima

**Criar bloco novo** — somente quando:
- O padrão visual é genuinamente diferente dos existentes
- A estrutura de dados (campos ACF) é incompatível com o bloco existente
- O bloco existente pertence a uma página específica E o novo terá uso em contexto diferente

**Mover para `global/`** — quando:
- O mesmo padrão visual aparece em 2 ou mais páginas diferentes
- A estrutura de dados é idêntica ou muito próxima
- Exemplo: um hero com fundo + título existe em `sobre` e em `trabalhe-conosco` → candidato a `global/hero-page`

### 4. Validar props com guard antes de renderizar

Todo componente React deve validar props opcionais antes de renderizar. Nunca renderize um elemento se o dado pode não existir — use guards explícitos:

```tsx
// ✅ Correto — guard antes de renderizar
{title && <h2 className={styles.bloco__title}>{title}</h2>}

{image && <SmartImage image={image} className={styles.bloco__image} />}

{hasItems(items) && (
  <ul>
    {items.map((item, i) => (
      <li key={i}>{item.nome}</li>
    ))}
  </ul>
)}

{button && (
  <a {...linkProps(button)!} className={styles.bloco__btn}>
    {button.label}
  </a>
)}

// ❌ Errado — renderiza mesmo com dado ausente
<h2>{title}</h2>
<img src={image?.url} />
<ul>{items.map(...)}</ul>
```

**Campos WYSIWYG/HTML** — verificar se não está vazio antes de renderizar:

```tsx
// ✅ Correto
{description && (
  <div className={styles.bloco__text} {...htmlContent(description)} />
)}

// ❌ Errado — renderiza div vazia se description for ''
<div {...htmlContent(description)} />
```

**Repeaters** — sempre usar `hasItems()` antes de `.map()`:

```tsx
// ✅ Correto
{hasItems(areas) && areas.map((area, i) => (
  <div key={i}>{area.nome}</div>
))}

// ❌ Errado — quebra se areas for undefined ou []
{areas.map((area, i) => (
  <div key={i}>{area.nome}</div>
))}
```

### 5. Ícones — verificar antes de adicionar

Antes de adicionar um novo ícone em `src/icons/index.tsx`, verificar se já existe um com nome semelhante. Ícones disponíveis atualmente:

`IconFacebook` · `IconInstagram` · `IconPhone` · `IconEnvelope` · `IconMapPin` · `IconClock` · `IconCaretDoubleRight` · `IconCheck` · `IconChevronDown` · `IconChevronRight` · `IconAddressBook`

Se o ícone já existir com cor diferente, use `currentColor` no SVG e controle a cor via CSS em vez de criar um duplicado.

---

## Checklist ao criar um módulo

1. [ ] Acessar o link MCP fornecido e analisar o layout antes de começar
2. [ ] **Executar a auditoria de reuso** (seção acima) — verificar blocos existentes antes de criar qualquer arquivo
3. [ ] Para cada seção do design: decidir entre reutilizar / estender / criar novo
4. [ ] Definir nome genérico para o módulo (ver tabela de nomes)
5. [ ] Decidir se vai em `global/` ou `pages/<page>/`
6. [ ] Ler o JSON em `acf-json/` para mapear os campos disponíveis
5. [ ] Criar `blocks/<path>/<module-name>/render.php` — usar `BlockImporter::data()`, `acf_image()`, `acf_link()`, `acf_repeater()` e `block_render()`
6. [ ] Criar `blocks/<path>/<module-name>/block.json`
7. [ ] Criar `src/blocks/<path>/<ModuleName>/types.ts` — usar `AcfImage` e `AcfLink` de `src/utils` para campos de imagem e link
8. [ ] Adicionar ícones SVG necessários em `src/icons/index.tsx` (se ainda não existirem)
9. [ ] Criar `src/blocks/<path>/<ModuleName>/index.tsx` — usar `SmartImage` para imagens ACF, `linkProps`, `hasItems`, `htmlContent` de `src/utils`
10. [ ] Adicionar `data-animate` nos elementos do `index.tsx` — seguir padrões da seção "Animações GSAP" (exceto Header e Footer)
11. [ ] Criar `src/blocks/<path>/<ModuleName>/style.module.scss` — BEM + mobile-first + tokens
12. [ ] Registrar o bloco em `src/index.ts` com o `data-block` correto
13. [ ] Incluir o `render.php` no orquestrador da página
14. [ ] Rodar `yarn build` para compilar
