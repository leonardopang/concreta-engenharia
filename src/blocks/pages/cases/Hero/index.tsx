import styles from './style.module.scss';
import { imgProps } from '../../../../utils';
import type { CasesHeroProps } from './types';

export default function CasesHero({ title, subtitle, bgImage }: CasesHeroProps) {
  return (
    <section className={styles.hero}>
      {bgImage && imgProps(bgImage) && (
        <div className={styles.hero__bg} aria-hidden="true">
          <img {...imgProps(bgImage)!} className={styles.hero__bgImg} loading="eager" fetchpriority="high" />
        </div>
      )}
      <div className={styles.hero__overlay} aria-hidden="true" />

      <div className={styles.hero__inner} data-animate="fade-up">
        {title && <h1 className={styles.hero__title}>{title}</h1>}
        {subtitle && <p className={styles.hero__subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
