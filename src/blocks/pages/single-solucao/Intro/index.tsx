import styles from './style.module.scss';
import { htmlContent } from '../../../../utils';
import SmartImage from '../../../../components/SmartImage';
import type { SingleSolucaoIntroProps } from './types';

export default function SingleSolucaoIntro({
  title,
  description,
  image1
}: SingleSolucaoIntroProps) {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__inner}>
        <div className={styles.intro__media} aria-hidden="true" />
        {(image1) && (
          <div className={styles.intro__media} data-animate="fade-right">
            {image1 && (
              <div className={styles.intro__imgWrap1}>
                <SmartImage image={image1} className={styles.intro__img} />
              </div>
            )}
          </div>
        )}
        <div className={styles.intro__content} data-animate="fade-left" data-animate-delay="0.15">
          {title && <h2 className={styles.intro__title}>{title}</h2>}
          {description && (
            <div className={styles.intro__description} {...htmlContent(description)} />
          )}
        </div>
      </div>
    </section>
  );
}
