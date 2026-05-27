import styles from './style.module.scss';
import { FaleConoscoSobreProps } from './types';
import SmartImage from '../../../../components/SmartImage';
import Eyebrow from '../../../../components/Eyebrow';
import { linkProps } from '../../../../utils';

export default function FaleConoscoSobre({ background, eyebrow, title, description, button, button2 }: FaleConoscoSobreProps) {
  const btn1 = linkProps(button);
  const btn2 = linkProps(button2);

  return (
    <section className={styles.fc}>
      {background?.url && (
        <div className={styles.fc__bg} aria-hidden="true">
          <SmartImage image={background} alt="" loading="eager" className={styles.fc__bgImg} />
          <div className={styles.fc__overlay} />
        </div>
      )}

      <div className={styles.fc__inner} data-animate="fade-up">
        <div className={styles.fc__header}>
          {eyebrow && <Eyebrow text={eyebrow} variant="white" />}
          {title && <h2 className={styles.fc__title}>{title}</h2>}
          {description && <p className={styles.fc__desc}>{description}</p>}
        </div>

        {(btn1 || btn2) && (
          <div className={styles.fc__actions}>
            {btn1 && (
              <a {...btn1} className={styles.fc__btnPrimary}>
                {button!.label}
              </a>
            )}
            {btn2 && (
              <a {...btn2} className={styles.fc__btnSecondary}>
                {button2!.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
