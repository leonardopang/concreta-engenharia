import styles from './style.module.scss';
import type { ContatoHeroProps } from './types';

export default function ContatoHero({ title, subtitle }: ContatoHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner} data-animate="fade-up">
        <h1 className={styles.hero__title}>{title}</h1>
        {subtitle && <p className={styles.hero__subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
