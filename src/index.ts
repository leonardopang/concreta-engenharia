import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

import './styles/global.scss';
import { initAnimations } from './animations';

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
  'example-hero': () => import(/* webpackMode: "eager" */ './blocks/global/ExampleHero'),
  'header':       () => import(/* webpackMode: "eager" */ './blocks/global/Header'),
  'footer':       () => import(/* webpackMode: "eager" */ './blocks/global/Footer'),
  'text-image':   () => import(/* webpackMode: "eager" */ './blocks/global/TextImage'),
  // Home page blocks
  'home-hero':              () => import(/* webpackMode: "eager" */ './blocks/pages/home/Hero'),
  'home-faixa':             () => import(/* webpackMode: "eager" */ './blocks/pages/home/Faixa'),
  'home-solucoes':          () => import(/* webpackMode: "eager" */ './blocks/pages/home/Solucoes'),
  'home-diferenciais':      () => import(/* webpackMode: "eager" */ './blocks/pages/home/Diferenciais'),
  'home-cases':             () => import(/* webpackMode: "eager" */ './blocks/pages/home/Cases'),
  'home-trabalhe-conosco':  () => import(/* webpackMode: "eager" */ './blocks/pages/home/TrabalheConosco'),
  'home-fale-conosco':      () => import(/* webpackMode: "eager" */ './blocks/pages/home/FaleConosco'),
  // Trabalhe Conosco page blocks
  'trabalhe-hero':      () => import(/* webpackMode: "eager" */ './blocks/pages/trabalhe-conosco/Hero'),
  'trabalhe-intro':     () => import(/* webpackMode: "eager" */ './blocks/pages/trabalhe-conosco/Intro'),
  'trabalhe-carreira':  () => import(/* webpackMode: "eager" */ './blocks/pages/trabalhe-conosco/Carreira'),
  'trabalhe-areas':     () => import(/* webpackMode: "eager" */ './blocks/pages/trabalhe-conosco/Areas'),
  'trabalhe-vagas':     () => import(/* webpackMode: "eager" */ './blocks/pages/trabalhe-conosco/Vagas'),
  'trabalhe-curriculo': () => import(/* webpackMode: "eager" */ './blocks/pages/trabalhe-conosco/Curriculo'),
  // Cases page blocks
  'cases-hero':  () => import(/* webpackMode: "eager" */ './blocks/pages/cases/Hero'),
  'cases-lista': () => import(/* webpackMode: "eager" */ './blocks/pages/cases/Lista'),
  // Soluções page blocks
  'solucoes-hero':       () => import(/* webpackMode: "eager" */ './blocks/pages/solucoes/Hero'),
  'solucoes-intro':      () => import(/* webpackMode: "eager" */ './blocks/pages/solucoes/Intro'),
  'solucoes-servicos':   () => import(/* webpackMode: "eager" */ './blocks/pages/solucoes/Servicos'),
  'solucoes-capacidade': () => import(/* webpackMode: "eager" */ './blocks/pages/solucoes/Capacidade'),
  'solucoes-aplicacoes': () => import(/* webpackMode: "eager" */ './blocks/pages/solucoes/Aplicacoes'),
  // Contato page blocks
  'contato-hero': () => import(/* webpackMode: "eager" */ './blocks/pages/contato/Hero'),
  'contato-form': () => import(/* webpackMode: "eager" */ './blocks/pages/contato/Form'),
  'contato-cta':  () => import(/* webpackMode: "eager" */ './blocks/pages/contato/Cta'),
  // Single Case blocks
  'single-case-hero':       () => import(/* webpackMode: "eager" */ './blocks/pages/single-case/Hero'),
  'single-case-conteudo':   () => import(/* webpackMode: "eager" */ './blocks/pages/single-case/Conteudo'),
  'single-case-solucao':    () => import(/* webpackMode: "eager" */ './blocks/pages/single-case/Solucao'),
  'single-case-resultados': () => import(/* webpackMode: "eager" */ './blocks/pages/single-case/Resultados'),
  'single-case-galeria':    () => import(/* webpackMode: "eager" */ './blocks/pages/single-case/Galeria'),
  // Single Solução — Rental blocks
  'single-solucao-rental-equipamentos': () => import(/* webpackMode: "eager" */ './blocks/pages/single-solucao-rental/Equipamentos'),
  'single-solucao-rental-diferenciais': () => import(/* webpackMode: "eager" */ './blocks/pages/single-solucao-rental/Diferenciais'),
  // Single Vaga blocks
  'single-vaga-detalhe': () => import(/* webpackMode: "eager" */ './blocks/pages/single-vaga/Detalhe'),
  // Single Solução blocks
  'single-solucao-hero':         () => import(/* webpackMode: "eager" */ './blocks/pages/single-solucao/Hero'),
  'single-solucao-intro':        () => import(/* webpackMode: "eager" */ './blocks/pages/single-solucao/Intro'),
  'single-solucao-servicos':     () => import(/* webpackMode: "eager" */ './blocks/pages/single-solucao/Servicos'),
  'single-solucao-diferenciais': () => import(/* webpackMode: "eager" */ './blocks/pages/single-solucao/Diferenciais'),
  'single-solucao-atuacao':      () => import(/* webpackMode: "eager" */ './blocks/pages/single-solucao/Atuacao'),
  // Página Solução (Pavimentação e Concreto) blocks
  'solucao-capacidade': () => import(/* webpackMode: "eager" */ './blocks/pages/solucao/Capacidade'),
  'solucao-aplicacoes': () => import(/* webpackMode: "eager" */ './blocks/pages/solucao/Aplicacoes'),
  // Sobre page blocks
  'sobre-hero':         () => import(/* webpackMode: "eager" */ './blocks/pages/sobre/Hero'),
  'sobre-quem-somos':   () => import(/* webpackMode: "eager" */ './blocks/pages/sobre/QuemSomos'),
  'sobre-historia':     () => import(/* webpackMode: "eager" */ './blocks/pages/sobre/Historia'),
  'sobre-capacidade':   () => import(/* webpackMode: "eager" */ './blocks/pages/sobre/Capacidade'),
  'sobre-atuacao':      () => import(/* webpackMode: "eager" */ './blocks/pages/sobre/Atuacao'),
  'sobre-compromisso':  () => import(/* webpackMode: "eager" */ './blocks/pages/sobre/Compromisso'),
  'sobre-fale-conosco': () => import(/* webpackMode: "eager" */ './blocks/pages/sobre/FaleConosco'),
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

function scrollToHash(): void {
  const id = window.location.hash.slice( 1 );
  if ( ! id ) return;

  let attempts = 0;
  const tryScroll = () => {
    const target = document.getElementById( id );
    if ( target ) {
      target.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      return;
    }
    if ( ++attempts < 30 ) requestAnimationFrame( tryScroll );
  };
  requestAnimationFrame( tryScroll );
}

async function boot(): Promise<void> {
  await mountBlocks();
  scrollToHash();
  observer.observe( document.body, { childList: true, subtree: true } );
  // Aguarda todas as imagens carregarem para o layout estabilizar antes do GSAP medir posições
  window.addEventListener('load', initAnimations, { once: true });
}

if ( document.readyState === 'loading' ) {
  document.addEventListener( 'DOMContentLoaded', boot );
} else {
  boot();
}
