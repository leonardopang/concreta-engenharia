import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

// Importação global de estilos
import './styles/global.scss';

/**
 * Contrato de um bloco registrável.
 * Cada entrada em /src/blocks deve exportar um componente React como default
 * e ser registrada aqui com o atributo `data-block` correspondente.
 */
interface BlockModule {
  default: React.ComponentType<Record<string, unknown>>;
}

/**
 * Mapa de blocos disponíveis.
 * Chave: valor do atributo `data-block` na âncora HTML.
 * Valor: import dinâmico do componente React correspondente.
 *
 * Adicione novos blocos aqui conforme forem criados.
 */
const blockRegistry: Record<string, () => Promise<BlockModule>> = {
  // Global blocks
  'example-hero': () => import(/* webpackChunkName: "blocks/global/ExampleHero" */ './blocks/global/ExampleHero'),
  'header':       () => import(/* webpackChunkName: "blocks/global/Header" */      './blocks/global/Header'),
  'footer':       () => import(/* webpackChunkName: "blocks/global/Footer" */      './blocks/global/Footer'),
  'text-image':   () => import(/* webpackChunkName: "blocks/global/TextImage" */   './blocks/global/TextImage'),
  // Home page blocks
  'home-hero':    () => import(/* webpackChunkName: "blocks/home/Hero" */          './blocks/pages/home/Hero'),
  'home-faixa':    () => import(/* webpackChunkName: "blocks/home/Faixa" */    './blocks/pages/home/Faixa'),
  'home-solucoes':     () => import(/* webpackChunkName: "blocks/home/Solucoes" */     './blocks/pages/home/Solucoes'),
  'home-diferenciais':      () => import(/* webpackChunkName: "blocks/home/Diferenciais" */      './blocks/pages/home/Diferenciais'),
  'home-cases':             () => import(/* webpackChunkName: "blocks/home/Cases" */             './blocks/pages/home/Cases'),
  'home-trabalhe-conosco':  () => import(/* webpackChunkName: "blocks/home/TrabalheConosco" */  './blocks/pages/home/TrabalheConosco'),
  'home-fale-conosco':      () => import(/* webpackChunkName: "blocks/home/FaleConosco" */      './blocks/pages/home/FaleConosco'),
};

// Rastreia elementos já montados para não montar duas vezes
const mounted = new WeakSet<HTMLElement>();

/**
 * Monta um único elemento `[data-block]` como raiz React isolada.
 * Ignora elementos já montados (idempotente).
 */
async function mountBlock( anchor: HTMLElement ): Promise<void> {
  if ( mounted.has( anchor ) ) return;
  mounted.add( anchor );

  const blockName = anchor.dataset.block;

  if ( ! blockName || ! ( blockName in blockRegistry ) ) {
    if ( process.env.NODE_ENV === 'development' ) {
      console.warn( `[theme] Bloco não registrado: "${blockName}"` );
    }
    return;
  }

  let payload: Record<string, unknown> = {};

  const scriptTag = anchor.querySelector<HTMLScriptElement>( 'script[type="application/json"]' );
  if ( scriptTag ) {
    try {
      payload = JSON.parse( scriptTag.textContent ?? '{}' );
    } catch {
      console.error( `[theme] Payload JSON inválido no bloco "${blockName}".`, anchor );
      return;
    }
  }

  try {
    const { default: BlockComponent } = await blockRegistry[ blockName ]();
    const root = createRoot( anchor );
    root.render( createElement( BlockComponent, payload ) );
  } catch ( error ) {
    console.error( `[theme] Falha ao montar o bloco "${blockName}".`, error );
  }
}

/**
 * Escaneia o DOM em busca de todas as âncoras `[data-block]` e as monta.
 * Fluxo: render.php → data-payload (JSON) → index.ts → createRoot → Componente React
 */
async function mountBlocks(): Promise<void> {
  const anchors = document.querySelectorAll<HTMLElement>( '[data-block]' );
  await Promise.all( Array.from( anchors ).map( mountBlock ) );
}

/**
 * MutationObserver: captura blocos adicionados dinamicamente ao DOM
 * (ex: preview de blocos no editor Gutenberg / ACF).
 */
const observer = new MutationObserver( ( mutations ) => {
  for ( const mutation of mutations ) {
    for ( const node of Array.from( mutation.addedNodes ) ) {
      if ( ! ( node instanceof HTMLElement ) ) continue;

      const candidates: HTMLElement[] = node.matches( '[data-block]' )
        ? [ node ]
        : Array.from( node.querySelectorAll<HTMLElement>( '[data-block]' ) );

      for ( const el of candidates ) {
        mountBlock( el );
      }
    }
  }
} );

if ( document.readyState === 'loading' ) {
  document.addEventListener( 'DOMContentLoaded', () => {
    mountBlocks();
    observer.observe( document.body, { childList: true, subtree: true } );
  } );
} else {
  mountBlocks();
  observer.observe( document.body, { childList: true, subtree: true } );
}
