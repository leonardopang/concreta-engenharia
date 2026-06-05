import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

type AnimationType = 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'reveal-up';

const PRESETS: Record<AnimationType, gsap.TweenVars> = {
  'fade':       { opacity: 0 },
  'fade-up':    { opacity: 0, y: 24 },
  'fade-down':  { opacity: 0, y: -24 },
  'fade-left':  { opacity: 0, x: 24 },
  'fade-right': { opacity: 0, x: -24 },
  'zoom-in':    { opacity: 0, scale: 0.94 },
  'zoom-out':   { opacity: 0, scale: 1.06 },
  'reveal-up':  { clipPath: 'inset(0% 0 100% 0)', opacity: 1 },
};

const REVEAL_VARS: gsap.TweenVars = {
  y: 100,
  skewY: 7,
  duration: 1.8,
  ease: 'power4.out',
  stagger: { amount: 0.3 },
  clearProps: 'all',
};

const DESKTOP_MQ = '(min-width: 1024px)';

export function initAnimations(): void {
  const mm = gsap.matchMedia();

  mm.add(DESKTOP_MQ, () => {
    // Pré-esconde apenas elementos hero (acima da dobra) para evitar flash antes das fontes
    document.querySelectorAll<HTMLElement>('[data-split-reveal="hero"]').forEach((el) => {
      gsap.set(el, { opacity: 0 });
    });

    ScrollTrigger.refresh();

    // ── data-animate-load: fade on page load (no ScrollTrigger) ──────────────
    document.querySelectorAll<HTMLElement>('[data-animate-load]').forEach((el) => {
      const delay = parseFloat(el.dataset.animateLoadDelay ?? '0');
      gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay,
        ease: 'power2.out',
        clearProps: 'all',
      });
    });

    // ── data-animate: fade / slide / zoom (scroll-triggered) ──────────────────
    const elements = document.querySelectorAll<HTMLElement>('[data-animate]');

    elements.forEach((el) => {
      const type = (el.dataset.animate as AnimationType) || 'fade-up';
      const delay = parseFloat(el.dataset.animateDelay ?? '0');
      const duration = parseFloat(el.dataset.animateDuration ?? type === 'reveal-up' ? '1.1' : '0.85');
      const from = PRESETS[type] ?? PRESETS['fade-up'];
      const ease = type === 'reveal-up' ? 'power3.inOut' : 'power2.out';
      const to = type === 'reveal-up' ? { clipPath: 'inset(0% 0 0% 0)' } : {};

      if (type === 'reveal-up') {
        gsap.fromTo(el, from, {
          ...to,
          duration,
          delay,
          ease,
          clearProps: 'all',
          scrollTrigger: { trigger: el, start: 'top 72%', once: true, invalidateOnRefresh: true },
        });
      } else {
        gsap.from(el, {
          ...from,
          duration,
          delay,
          ease,
          clearProps: 'all',
          scrollTrigger: { trigger: el, start: 'top 72%', once: true, invalidateOnRefresh: true },
        });
      }
    });

    // ── data-split-reveal="hero": SplitText reveal on page load ───────────────
    const heroSplitEls = document.querySelectorAll<HTMLElement>('[data-split-reveal="hero"]');
    if (heroSplitEls.length) {
      document.fonts.ready.then(() => {
        heroSplitEls.forEach((el) => {
          gsap.set(el, { opacity: 1 });
          SplitText.create(el, {
            type: 'words,lines',
            autoSplit: true,
            mask: 'lines',
            onSplit(self) {
              return gsap.from(self.lines, {
                yPercent: 100,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'expo.out',
                delay: 0.2,
              });
            },
          });
        });
      });
    }

    // ── data-split-reveal="scroll": SplitText reveal on scroll ────────────────
    const scrollSplitEls = document.querySelectorAll<HTMLElement>('[data-split-reveal="scroll"]');
    if (scrollSplitEls.length) {
      document.fonts.ready.then(() => {
        scrollSplitEls.forEach((el) => {
          gsap.set(el, { opacity: 1 });
          SplitText.create(el, {
            type: 'words,lines',
            autoSplit: true,
            mask: 'lines',
            onSplit(self) {
              return gsap.from(self.lines, {
                yPercent: 100,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'expo.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 75%',
                  once: true,
                  invalidateOnRefresh: true,
                },
              });
            },
          });
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  });
}
