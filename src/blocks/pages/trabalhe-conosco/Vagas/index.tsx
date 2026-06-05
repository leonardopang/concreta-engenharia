import { useState, useMemo } from 'react';
import styles from './style.module.scss';
import { hasItems, linkProps } from '../../../../utils';
import { IconMapPin, IconAddressBook, IconChevronRight } from '../../../../icons';
import type { TrabalheVagasProps, Vaga } from './types';

export default function TrabalheVagas({ title, categorias, vagas }: TrabalheVagasProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const filtered = useMemo<Vaga[]>(() => {
    if (!hasItems(vagas)) return [];
    if (!activeSlug) return vagas;
    return vagas.filter((v) => v.categoriaSlug === activeSlug);
  }, [vagas, activeSlug]);

  return (
    <section className={styles.vagas}>
      <div className={styles.vagas__inner}>
        {title && <h2 className={styles.vagas__title} data-animate="fade-up">{title}</h2>}

        <div className={styles.vagas__content}>
          {hasItems(categorias) && (
            <div className={styles.vagas__categories} data-animate="fade-up">
              <button
                className={!activeSlug ? styles['vagas__catBtn--active'] : styles.vagas__catBtn}
                onClick={() => setActiveSlug(null)}
              >
                Ver todas
              </button>
              {categorias.map((cat) => (
                <button
                  key={cat.slug}
                  className={activeSlug === cat.slug ? styles['vagas__catBtn--active'] : styles.vagas__catBtn}
                  onClick={() => setActiveSlug(cat.slug)}
                >
                  {cat.nome}
                </button>
              ))}
            </div>
          )}

          <div className={styles.vagas__list}>
            {hasItems(filtered) ? filtered.map((vaga, i) => (
              <article
                key={i}
                className={styles.vagas__card}
                data-animate="fade-up"
                data-animate-delay={String(i * 0.08)}
              >
                <div className={styles.vagas__job}>
                  <div className={styles.vagas__jobHeader}>
                    <div className={styles.vagas__jobTitle}>
                      <h3 className={styles.vagas__jobName}>{vaga.titulo}</h3>
                      {vaga.categoriaNome && (
                        <span className={styles.vagas__tag}>{vaga.categoriaNome}</span>
                      )}
                    </div>
                    {vaga.link && (
                      <a {...linkProps(vaga.link)!} className={styles.vagas__link}>
                        Ver vaga
                        <IconChevronRight />
                      </a>
                    )}
                  </div>
                  {vaga.descricao && (
                    <p className={styles.vagas__descricao}>{vaga.descricao}</p>
                  )}
                </div>

                <div className={styles.vagas__info}>
                  {vaga.localizacao && (
                    <div className={styles.vagas__infoItem}>
                      <IconMapPin />
                      <span>{vaga.localizacao}</span>
                    </div>
                  )}
                  {vaga.contratacao && (
                    <>
                      <div className={styles.vagas__divider} aria-hidden="true" />
                      <div className={styles.vagas__infoItem}>
                        <IconAddressBook />
                        <span>Tipo de contratação: {vaga.contratacao}</span>
                      </div>
                    </>
                  )}
                </div>
              </article>
            )) : (
              <p className={styles.vagas__empty}>Nenhuma vaga disponível no momento.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
