import styles from './style.module.scss';
import { FaleConoscoProps } from './types';
import { linkProps } from '../../../../utils';
import Eyebrow from '../../../../components/Eyebrow';

export default function FaleConosco({
  patternUrl,
  eyebrow,
  title,
  description,
  titleButton,
  button,
}: FaleConoscoProps) {
  return (
    <section className={styles.fc}>
      {patternUrl && (
        <div className={styles.fc__bg} aria-hidden="true">
          <img src={patternUrl} alt="" className={styles.fc__bgImg} />
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
