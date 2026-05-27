import { useRef } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import styles from './style.module.scss';
import { CasesProps } from './types';
import { imgProps, linkProps, hasItems } from '../../../../utils';
import Eyebrow from '../../../../components/Eyebrow';

export default function Cases({
  background,
  eyebrow,
  title,
  description,
  button,
  cases = [],
}: CasesProps) {
  const splideRef = useRef<InstanceType<typeof Splide>>(null);

  return (
    <section className={styles.cases}>
      {imgProps(background) && (
        <div className={styles.cases__bg} aria-hidden="true">
          <img {...imgProps(background)!} className={styles.cases__bgImg} />
        </div>
      )}

      <div className={styles.cases__inner}>
        <div className={styles.cases__header} data-animate="fade-up">
          <div className={styles.cases__headerText}>
            {eyebrow && <Eyebrow text={eyebrow} />}

            <div className={styles.cases__headerBody}>
              {title && <h2 className={styles.cases__title}>{title}</h2>}
              {description && <p className={styles.cases__description}>{description}</p>}
            </div>
          </div>

          {linkProps(button) && (
            <a {...linkProps(button)!} className={styles.cases__headerBtn}>
              {button!.label}
            </a>
          )}
        </div>

        {hasItems(cases) && (
          <>
            <div data-animate="fade-up" data-animate-delay="0.15">
            <Splide
              ref={splideRef}
              hasTrack={false}
              options={{
                type: 'loop',
                perPage: 1,
                gap: '16px',
                arrows: false,
                pagination: false,
                drag: true,
              }}
              className={styles.cases__splide}
            >
              <SplideTrack>
                {cases.map((item, i) => (
                  <SplideSlide key={i}>
                    <div className={styles.cases__slide}>
                      <div className={styles.cases__slideImg}>
                        {imgProps(item.image) && (
                          <img {...imgProps(item.image)!} className={styles.cases__img} />
                        )}
                      </div>

                      <div className={styles.cases__card}>
                        <div className={styles.cases__cardContent}>
                          {item.title && (
                            <h3 className={styles.cases__cardTitle}>{item.title}</h3>
                          )}
                          <hr className={styles.cases__divider} />
                          <div className={styles.cases__fields}>
                            {item.localDaObra && (
                              <div className={styles.cases__field}>
                                <span className={styles.cases__fieldLabel}>Local da Obra</span>
                                <span className={styles.cases__fieldValue}>{item.localDaObra}</span>
                              </div>
                            )}
                            {item.servicoExecutado && (
                              <div className={styles.cases__field}>
                                <span className={styles.cases__fieldLabel}>Serviço Executado</span>
                                <span className={styles.cases__fieldValue}>{item.servicoExecutado}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {item.url && (
                          <a href={item.url} className={styles.cases__cardBtn}>
                            Ver case completo
                          </a>
                        )}
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>

            <div className={styles.cases__nav}>
              <button
                className={styles.cases__navBtn}
                aria-label="Anterior"
                onClick={() => splideRef.current?.splide?.go('<')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className={styles.cases__navBtn}
                aria-label="Próximo"
                onClick={() => splideRef.current?.splide?.go('>')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {linkProps(button) && (
              <a {...linkProps(button)!} className={styles.cases__mobileBtn}>
                {button!.label}
              </a>
            )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
