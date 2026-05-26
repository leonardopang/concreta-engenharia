import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css/core';
import { IconCaretDoubleRight } from '../../../../icons';
import styles from './style.module.scss';
import { FaixaProps } from './types';

const DEFAULT_ITEMS = [
  'Estrutura, força e confiança que constroem o futuro.',
  'Estrutura, força e confiança que constroem o futuro.',
  'Estrutura, força e confiança que constroem o futuro.',
  'Estrutura, força e confiança que constroem o futuro.',
  'Estrutura, força e confiança que constroem o futuro.',
  'Estrutura, força e confiança que constroem o futuro.',
];

export default function Faixa({ items = DEFAULT_ITEMS }: FaixaProps) {
  const slides = items.length > 0 ? items : DEFAULT_ITEMS;

  return (
    <div className={styles.faixa}>
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          autoWidth: true,
          arrows: false,
          pagination: false,
          gap: '48px',
          start: 0,
          trimSpace: false,
          autoScroll: {
            speed: 0.8,
            pauseOnHover: false,
            pauseOnFocus: false,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {slides.map((text, i) => (
          <SplideSlide key={i} className={styles.faixa__slide}>
            <span className={styles.faixa__text}>{text}</span>
            <span className={styles.faixa__icon}>
              <IconCaretDoubleRight />
            </span>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
