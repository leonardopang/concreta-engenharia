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
  // Trabalhe Conosco page blocks
  'trabalhe-hero':      () => import(/* webpackChunkName: "blocks/trabalhe-conosco/Hero" */      './blocks/pages/trabalhe-conosco/Hero'),
  'trabalhe-intro':     () => import(/* webpackChunkName: "blocks/trabalhe-conosco/Intro" */     './blocks/pages/trabalhe-conosco/Intro'),
  'trabalhe-carreira':  () => import(/* webpackChunkName: "blocks/trabalhe-conosco/Carreira" */  './blocks/pages/trabalhe-conosco/Carreira'),
  'trabalhe-areas':     () => import(/* webpackChunkName: "blocks/trabalhe-conosco/Areas" */     './blocks/pages/trabalhe-conosco/Areas'),
  'trabalhe-vagas':     () => import(/* webpackChunkName: "blocks/trabalhe-conosco/Vagas" */     './blocks/pages/trabalhe-conosco/Vagas'),
  'trabalhe-curriculo': () => import(/* webpackChunkName: "blocks/trabalhe-conosco/Curriculo" */ './blocks/pages/trabalhe-conosco/Curriculo'),
  // Cases page blocks
  'cases-hero':  () => import(/* webpackChunkName: "blocks/cases/Hero" */  './blocks/pages/cases/Hero'),
  'cases-lista': () => import(/* webpackChunkName: "blocks/cases/Lista" */ './blocks/pages/cases/Lista'),
  // Soluções page blocks
  'solucoes-hero':       () => import(/* webpackChunkName: "blocks/solucoes/Hero" */       './blocks/pages/solucoes/Hero'),
  'solucoes-intro':      () => import(/* webpackChunkName: "blocks/solucoes/Intro" */      './blocks/pages/solucoes/Intro'),
  'solucoes-servicos':   () => import(/* webpackChunkName: "blocks/solucoes/Servicos" */   './blocks/pages/solucoes/Servicos'),
  'solucoes-capacidade': () => import(/* webpackChunkName: "blocks/solucoes/Capacidade" */ './blocks/pages/solucoes/Capacidade'),
  'solucoes-aplicacoes': () => import(/* webpackChunkName: "blocks/solucoes/Aplicacoes" */ './blocks/pages/solucoes/Aplicacoes'),
  // Contato page blocks
  'contato-hero': () => import(/* webpackChunkName: "blocks/contato/Hero" */ './blocks/pages/contato/Hero'),
  'contato-form': () => import(/* webpackChunkName: "blocks/contato/Form" */ './blocks/pages/contato/Form'),
  'contato-cta':  () => import(/* webpackChunkName: "blocks/contato/Cta" */  './blocks/pages/contato/Cta'),
  // Single Case blocks
  'single-case-hero':       () => import(/* webpackChunkName: "blocks/single-case/Hero" */       './blocks/pages/single-case/Hero'),
  'single-case-conteudo':   () => import(/* webpackChunkName: "blocks/single-case/Conteudo" */   './blocks/pages/single-case/Conteudo'),
  'single-case-solucao':    () => import(/* webpackChunkName: "blocks/single-case/Solucao" */    './blocks/pages/single-case/Solucao'),
  'single-case-resultados': () => import(/* webpackChunkName: "blocks/single-case/Resultados" */ './blocks/pages/single-case/Resultados'),
  'single-case-galeria':    () => import(/* webpackChunkName: "blocks/single-case/Galeria" */    './blocks/pages/single-case/Galeria'),
  // Single Solução — Rental blocks
  'single-solucao-rental-equipamentos':  () => import(/* webpackChunkName: "blocks/single-solucao-rental/Equipamentos" */  './blocks/pages/single-solucao-rental/Equipamentos'),
  'single-solucao-rental-diferenciais':  () => import(/* webpackChunkName: "blocks/single-solucao-rental/Diferenciais" */  './blocks/pages/single-solucao-rental/Diferenciais'),
  // Single Vaga blocks
  'single-vaga-detalhe':    () => import(/* webpackChunkName: "blocks/single-vaga/Detalhe" */    './blocks/pages/single-vaga/Detalhe'),
  // Single Solução blocks
  'single-solucao-hero':        () => import(/* webpackChunkName: "blocks/single-solucao/Hero" */        './blocks/pages/single-solucao/Hero'),
  'single-solucao-intro':       () => import(/* webpackChunkName: "blocks/single-solucao/Intro" */       './blocks/pages/single-solucao/Intro'),
  'single-solucao-servicos':    () => import(/* webpackChunkName: "blocks/single-solucao/Servicos" */    './blocks/pages/single-solucao/Servicos'),
  'single-solucao-diferenciais': () => import(/* webpackChunkName: "blocks/single-solucao/Diferenciais" */ './blocks/pages/single-solucao/Diferenciais'),
  'single-solucao-atuacao':     () => import(/* webpackChunkName: "blocks/single-solucao/Atuacao" */     './blocks/pages/single-solucao/Atuacao'),
  // Página Solução (Pavimentação e Concreto) blocks
  'solucao-capacidade': () => import(/* webpackChunkName: "blocks/solucao/Capacidade" */ './blocks/pages/solucao/Capacidade'),
  'solucao-aplicacoes': () => import(/* webpackChunkName: "blocks/solucao/Aplicacoes" */ './blocks/pages/solucao/Aplicacoes'),
  // Sobre page blocks
  'sobre-hero':         () => import(/* webpackChunkName: "blocks/sobre/Hero" */         './blocks/pages/sobre/Hero'),
  'sobre-quem-somos':   () => import(/* webpackChunkName: "blocks/sobre/QuemSomos" */    './blocks/pages/sobre/QuemSomos'),
  'sobre-historia':     () => import(/* webpackChunkName: "blocks/sobre/Historia" */     './blocks/pages/sobre/Historia'),
  'sobre-capacidade':   () => import(/* webpackChunkName: "blocks/sobre/Capacidade" */   './blocks/pages/sobre/Capacidade'),
  'sobre-atuacao':      () => import(/* webpackChunkName: "blocks/sobre/Atuacao" */      './blocks/pages/sobre/Atuacao'),
  'sobre-compromisso':  () => import(/* webpackChunkName: "blocks/sobre/Compromisso" */  './blocks/pages/sobre/Compromisso'),
  'sobre-fale-conosco': () => import(/* webpackChunkName: "blocks/sobre/FaleConosco" */  './blocks/pages/sobre/FaleConosco'),
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

async function boot(): Promise<void> {
  await mountBlocks();
  observer.observe( document.body, { childList: true, subtree: true } );
  // Aguarda todas as imagens carregarem para o layout estabilizar antes do GSAP medir posições
  window.addEventListener('load', initAnimations, { once: true });
}

if ( document.readyState === 'loading' ) {
  document.addEventListener( 'DOMContentLoaded', boot );
} else {
  boot();
}
