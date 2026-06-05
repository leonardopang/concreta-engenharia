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
    <section className={styles.hero}>
      {bgImage?.url && (
        <img
          src={bgImage.url}
          alt=""
          aria-hidden="true"
          className={styles.hero__bg}
          loading="eager"
          fetchpriority="high"
          decoding="async"
          {...(bgImage.width  > 0 && { width:  bgImage.width  })}
          {...(bgImage.height > 0 && { height: bgImage.height })}
        />
      )}
      <div className={styles.hero__inner}>

        <div className={styles.hero__content}>
          <div className={styles.hero__text}>
            {title && (
              <h1
                className={styles.hero__title}
                data-split-reveal="hero"
                {...htmlTitle(title)}
              />
            )}
            {description && (
              <p
                className={styles.hero__description}
                data-animate-load
                data-animate-load-delay="0.55"
              >
                {description}
              </p>
            )}
          </div>

          {(cta || cta2) && (
            <div className={styles.hero__actions} data-animate-load data-animate-load-delay="0.75">
              {cta?.url && (
                <Button label={cta.label} url={cta.url} target={cta.target} variant="primary" />
              )}
              {cta2?.url && (
                <Button label={cta2.label} url={cta2.url} target={cta2.target} variant="secondary" />
              )}
            </div>
          )}
        </div>

        <div data-animate-load data-animate-load-delay="0.4">
          <SmartImage image={image} className={styles.hero__image} loading="eager" fetchpriority="high" />
        </div>

      </div>
    </section>
  );
}
