import styles from './style.module.scss';
import { HeroProps } from './types';
import { htmlTitle } from '../../../../utils';
import SmartImage from '../../../../components/SmartImage';
import Button from '../../../../components/Button';

export default function Hero({
  title = '',
  description = '',
  bgImage,
  image,
  cta,
  cta2,
}: HeroProps) {
  return (
    <section
      className={styles.hero}
      style={bgImage?.url ? { backgroundImage: `url(${bgImage.url})` } : undefined}
    >
      <div className={styles.hero__inner}>

        <div className={styles.hero__content} data-animate="fade-right">
          <div className={styles.hero__text}>
            {title && <h1 className={styles.hero__title} {...htmlTitle(title)} />}
            {description && <p className={styles.hero__description}>{description}</p>}
          </div>

          {(cta || cta2) && (
            <div className={styles.hero__actions}>
              {cta?.url && (
                <Button label={cta.label} url={cta.url} target={cta.target} variant="primary" />
              )}
              {cta2?.url && (
                <Button label={cta2.label} url={cta2.url} target={cta2.target} variant="secondary" />
              )}
            </div>
          )}
        </div>

        <div data-animate="fade-left" data-animate-delay="0.2">
          <SmartImage image={image} className={styles.hero__image} loading="eager" fetchpriority="high" />
        </div>

      </div>
    </section>
  );
}
