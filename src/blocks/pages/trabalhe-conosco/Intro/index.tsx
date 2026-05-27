import styles from './style.module.scss';
import { htmlContent } from '../../../../utils';
import type { TrabalheIntroProps } from './types';

export default function TrabalheIntro({ title, description }: TrabalheIntroProps) {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__inner}>
        <div data-animate="fade-right">
          <h2 className={styles.intro__title}>{title}</h2>
        </div>
        {description && (
          <div
            className={styles.intro__description}
            data-animate="fade-left"
            data-animate-delay="0.15"
            {...htmlContent(description)}
          />
        )}
      </div>
    </section>
  );
}
