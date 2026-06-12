import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { linkProps, htmlContent, htmlTitle } from '../../../../utils';
import type { SingleSolucaoHeroProps } from './types';

export default function SingleSolucaoHero({
  title,
  subtitle,
  bgImage,
  description,
  button,
  button2,
}: SingleSolucaoHeroProps) {
  return (
    <section className={styles.hero}>
      {bgImage && (
        <div className={styles.hero__bg} aria-hidden="true">
          <SmartImage image={bgImage} className={styles.hero__bgImg} loading="eager" fetchpriority="high" alt="" />
        </div>
      )}
      <div className={styles.hero__inner}>
        <div className={styles.hero__left} data-animate="fade-right">
          {title && <h1 className={styles.hero__title} {...htmlTitle(title)} />}
          {subtitle && <p className={styles.hero__subtitle} {...htmlTitle(subtitle)} />}
        </div>

        <div className={styles.hero__right} data-animate="fade-left" data-animate-delay="0.15">
          {description && (
            <div className={styles.hero__description} {...htmlContent(description)} />
          )}
          {(button || button2) && (
            <div className={styles.hero__actions}>
              {button && (
                <a {...linkProps(button)!} className={styles.hero__btn}>
                  {button.label}
                </a>
              )}
              {button2 && (
                <a {...linkProps(button2)!} className={styles.hero__btnGhost}>
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
