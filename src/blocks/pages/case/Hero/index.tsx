import styles from './style.module.scss';
import { linkProps, htmlContent } from '../../../../utils';
import type { CaseHeroProps } from './types';

export default function CaseHero({ title, subtitle, description, button, button2 }: CaseHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        <div className={styles.hero__left} data-animate="fade-right">
          <h1 className={styles.hero__title}>{title}</h1>
          {subtitle && <p className={styles.hero__subtitle}>{subtitle}</p>}
        </div>

        <div className={styles.hero__right} data-animate="fade-left" data-animate-delay="0.15">
          {description && (
            <div className={styles.hero__description} {...htmlContent(description)} />
          )}

          {(button || button2) && (
            <div className={styles.hero__actions}>
              {button && (
                <a {...linkProps(button)!} className={styles.hero__btnPrimary}>
                  {button.label}
                </a>
              )}
              {button2 && (
                <a {...linkProps(button2)!} className={styles.hero__btnSecondary}>
                  {button2.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
