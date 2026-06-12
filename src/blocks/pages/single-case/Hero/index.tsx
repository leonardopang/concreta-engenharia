import styles from './style.module.scss';
import { imgProps } from '../../../../utils';
import type { SingleCaseHeroProps } from './types';

const INFO_CARDS = [
  { label: 'Empresa Executora', key: 'empresa' },
  { label: 'Ano', key: 'ano' },
  { label: 'Serviço', key: 'servico' },
  { label: 'Local', key: 'local' },
] as const;

export default function SingleCaseHero({ title, bgImage, empresa, ano, servico, local }: SingleCaseHeroProps) {
  const values = { empresa, ano, servico, local };

  return (
    <section className={styles.hero}>
      {bgImage && imgProps(bgImage) && (
        <div className={styles.hero__bg} aria-hidden="true">
          <img {...imgProps(bgImage)!} className={styles.hero__bgImg} loading="eager" fetchpriority="high" />
          <div className={styles.hero__overlay} />
        </div>
      )}

      <div className={styles.hero__inner}>
        <h1 className={styles.hero__title}>{title}</h1>

        <ul className={styles.hero__cards}>
          {INFO_CARDS.map(({ label, key }) => (
            <li key={key} className={styles.hero__card}>
              <span className={styles.hero__cardLabel}>{label}</span>
              <span className={styles.hero__cardValue}>{values[key] || '—'}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
