import { useState, useMemo } from 'react';
import styles from './style.module.scss';
import { hasItems, linkProps } from '../../../../utils';
import { IconMapPin, IconAddressBook, IconChevronRight } from '../../../../icons';
import type { TrabalheVagasProps, Vaga } from './types';

export default function TrabalheVagas({ title, vagas }: TrabalheVagasProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    if (!hasItems(vagas)) return [];
    const seen = new Set<string>();
    return vagas.reduce<string[]>((acc, v) => {
      if (v.categoria && !seen.has(v.categoria)) {
        seen.add(v.categoria);
        acc.push(v.categoria);
      }
      return acc;
    }, []);
  }, [vagas]);

  const filtered = useMemo<Vaga[]>(() => {
    if (!hasItems(vagas)) return [];
    if (!activeCategory) return vagas;
    return vagas.filter((v) => v.categoria === activeCategory);
  }, [vagas, activeCategory]);

  return (
    <section className={styles.vagas}>
      <div className={styles.vagas__inner}>
        <h2 className={styles.vagas__title} data-animate="fade-up">{title}</h2>

        <div className={styles.vagas__content}>
          {hasItems(categories) && (
            <div className={styles.vagas__categories} data-animate="fade-up">
              <button
                className={!activeCategory ? styles['vagas__catBtn--active'] : styles.vagas__catBtn}
                onClick={() => setActiveCategory(null)}
              >
                Ver todas
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={activeCategory === cat ? styles['vagas__catBtn--active'] : styles.vagas__catBtn}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
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
                      {vaga.categoria && (
                        <span className={styles.vagas__tag}>{vaga.categoria}</span>
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
