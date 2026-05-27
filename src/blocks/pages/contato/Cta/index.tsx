import styles from './style.module.scss';
import { linkProps, htmlContent, imgProps } from '../../../../utils';
import { IconWhatsapp } from '../../../../icons';
import Eyebrow from '../../../../components/Eyebrow';
import type { ContatoCtaProps } from './types';

export default function ContatoCta({ background, eyebrow, title, description, button }: ContatoCtaProps) {
  return (
    <section className={styles.cta}>
      {imgProps(background) && (
        <div className={styles.cta__bg} aria-hidden="true">
          <img {...imgProps(background)!} className={styles.cta__bgImg} />
        </div>
      )}

      <div className={styles.cta__inner} data-animate="fade-up">
        {eyebrow && <Eyebrow text={eyebrow} variant="white" />}

        {title && <h2 className={styles.cta__title}>{title}</h2>}

        {description && (
          <div className={styles.cta__description} {...htmlContent(description)} />
        )}

        {button && (
          <a {...linkProps(button)!} className={styles.cta__button}>
            <IconWhatsapp />
            {button.label}
          </a>
        )}
      </div>
    </section>
  );
}
