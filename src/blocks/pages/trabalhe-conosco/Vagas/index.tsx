import { useState, useMemo, useEffect } from 'react';
import clsx from 'clsx';
import { Select, MenuItem, Skeleton } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import styles from './style.module.scss';
import { hasItems, linkProps } from '../../../../utils';
import { IconMapPin, IconAddressBook, IconChevronRight } from '../../../../icons';
import type { TrabalheVagasProps, Vaga } from './types';

const FILTER_DELAY = 300;

export default function TrabalheVagas({ title, categorias, vagas }: TrabalheVagasProps) {
  const [activeSlug, setActiveSlug] = useState<string>('');
  const [isFiltering, setIsFiltering] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setActiveSlug(event.target.value);
  };

  const filtered = useMemo<Vaga[]>(() => {
    if (!hasItems(vagas)) return [];
    if (!activeSlug) return vagas;
    return vagas.filter((v) => v.categoriaSlug === activeSlug);
  }, [vagas, activeSlug]);

  useEffect(() => {
    setIsFiltering(true);
    const timeout = setTimeout(() => setIsFiltering(false), FILTER_DELAY);
    return () => clearTimeout(timeout);
  }, [activeSlug]);

  return (
    <section id="vagas" className={styles.vagas}>
      <div className={styles.vagas__inner}>
        {title && <h2 className={styles.vagas__title} data-animate="fade-up">{title}</h2>}

        <div className={styles.vagas__content}>
          {hasItems(categorias) && (
            <div className={styles.vagas__categories} data-animate="fade-up">
              <Select
                value={activeSlug}
                onChange={handleChange}
                className={clsx(styles.vagas__select, styles['vagas__select--mobile'])}
                displayEmpty
                MenuProps={{ disablePortal: true }}
              >
                <MenuItem value="">Ver todas</MenuItem>
                {categorias.map((cat) => (
                  <MenuItem key={cat.slug} value={cat.slug}>
                    {cat.nome}
                  </MenuItem>
                ))}
              </Select>

              <div className={styles['vagas__catBtns--desktop']}>
                <button
                  className={!activeSlug ? styles['vagas__catBtn--active'] : styles.vagas__catBtn}
                  onClick={() => setActiveSlug('')}
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
            </div>
          )}

          <div className={styles.vagas__list}>
            {isFiltering ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={styles.vagas__card}>
                  <div className={styles.vagas__job}>
                    <div className={styles.vagas__jobHeader}>
                      <div className={styles.vagas__jobTitle}>
                        <Skeleton variant="text" width={220} height={32} />
                        <Skeleton variant="rounded" width={120} height={24} />
                      </div>
                    </div>
                    <Skeleton variant="text" width="100%" height={24} />
                    <Skeleton variant="text" width="80%" height={24} />
                  </div>
                  <div className={styles.vagas__info}>
                    <Skeleton variant="text" width={140} height={24} />
                    <Skeleton variant="text" width={200} height={24} />
                  </div>
                </div>
              ))
            ) : hasItems(filtered) ? filtered.map((vaga, i) => (
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
                      <a {...linkProps(vaga.link)!} className={clsx(styles.vagas__link, styles['vagas__link--desktop'])}>
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

                {vaga.link && (
                  <a {...linkProps(vaga.link)!} className={clsx(styles.vagas__link, styles['vagas__link--mobile'])}>
                    Ver vaga
                    <IconChevronRight />
                  </a>
                )}
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
