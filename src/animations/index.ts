import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationType = 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';

const PRESETS: Record<AnimationType, gsap.TweenVars> = {
  'fade':       { opacity: 0 },
  'fade-up':    { opacity: 0, y: 24 },
  'fade-down':  { opacity: 0, y: -24 },
  'fade-left':  { opacity: 0, x: 24 },
  'fade-right': { opacity: 0, x: -24 },
  'zoom-in':    { opacity: 0, scale: 0.94 },
  'zoom-out':   { opacity: 0, scale: 1.06 },
};

const DESKTOP_MQ = '(min-width: 1024px)';

export function initAnimations(): void {
  const mm = gsap.matchMedia();

  mm.add(DESKTOP_MQ, () => {
    ScrollTrigger.refresh();

    const elements = document.querySelectorAll<HTMLElement>('[data-animate]');

    elements.forEach((el) => {
      const type = (el.dataset.animate as AnimationType) || 'fade-up';
      const delay = parseFloat(el.dataset.animateDelay ?? '0');
      const duration = parseFloat(el.dataset.animateDuration ?? '0.85');
      const from = PRESETS[type] ?? PRESETS['fade-up'];

      gsap.from(el, {
        ...from,
        duration,
        delay,
        ease: 'power2.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: el,
          start: 'top 72%',
          once: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  });
}
