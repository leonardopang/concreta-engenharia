import clsx from 'clsx';
import styles from './style.module.scss';
import { ExampleHeroProps } from './types';

export default function ExampleHero({
  heading,
  subheading,
  ctaLabel,
  ctaUrl,
  variant = 'default',
}: ExampleHeroProps) {
  return (
    <section className={clsx(styles.hero, variant !== 'default' && styles[`hero--${variant}`])}>
      <div className={styles.hero__inner}>
        <h1 className={styles.hero__heading}>{heading}</h1>

        {subheading && (
          <p className={styles.hero__subheading}>{subheading}</p>
        )}

        {ctaLabel && ctaUrl && (
          <a href={ctaUrl} className={styles.hero__cta}>
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
