import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { htmlContent } from '../../../../utils';
import type { CaseIntroProps } from './types';

export default function CaseIntro({ title, description, image1, image2 }: CaseIntroProps) {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__inner}>
        {(image1 || image2) && (
          <div className={styles.intro__media} data-animate="fade-right">
            {image1 && (
              <div className={styles.intro__imgWrap1}>
                <SmartImage image={image1} className={styles.intro__img} />
              </div>
            )}
            {image2 && (
              <div className={styles.intro__imgWrap2}>
                <SmartImage image={image2} className={styles.intro__img} />
              </div>
            )}
          </div>
        )}

        <div className={styles.intro__content} data-animate="fade-left" data-animate-delay="0.15">
          <h2 className={styles.intro__title}>{title}</h2>
          {description && (
            <div className={styles.intro__description} {...htmlContent(description)} />
          )}
        </div>
      </div>
    </section>
  );
}
