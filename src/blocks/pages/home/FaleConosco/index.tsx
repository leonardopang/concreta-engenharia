import styles from './style.module.scss';
import { FaleConoscoProps } from './types';
import { imgProps, linkProps } from '../../../../utils';
import Eyebrow from '../../../../components/Eyebrow';

export default function FaleConosco({
  background,
  eyebrow,
  title,
  description,
  titleButton,
  button,
}: FaleConoscoProps) {
  return (
    <section className={styles.fc}>
      {imgProps(background) && (
        <div className={styles.fc__bg} aria-hidden="true">
          <img {...imgProps(background)!} className={styles.fc__bgImg} />
        </div>
      )}

      <div className={styles.fc__inner} data-animate="fade-up">
        {eyebrow && <Eyebrow text={eyebrow} variant="white" />}
        {title && <h2 className={styles.fc__title}>{title}</h2>}
        {description && <p className={styles.fc__description}>{description}</p>}

        <div className={styles.fc__cta}>
          {titleButton && <p className={styles.fc__ctaLabel}>{titleButton}</p>}
          {linkProps(button) && (
            <a {...linkProps(button)!} className={styles.fc__btn}>
              {button!.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
