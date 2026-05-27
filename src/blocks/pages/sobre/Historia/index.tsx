import styles from './style.module.scss';
import { HistoriaProps } from './types';
import SmartImage from '../../../../components/SmartImage';
import Eyebrow from '../../../../components/Eyebrow';
import { hasItems, linkProps } from '../../../../utils';

export default function Historia({ background, eyebrow, title, description, logos = [], cardText, cardButton }: HistoriaProps) {
  const btnProps = linkProps(cardButton);

  return (
    <section className={styles.hist}>
      {background?.url && (
        <div className={styles.hist__bg} aria-hidden="true">
          <SmartImage image={background} alt="" loading="eager" className={styles.hist__bgImg} />
        </div>
      )}

      <div className={styles.hist__inner}>
        <div className={styles.hist__header} data-animate="fade-up">
          {eyebrow && <Eyebrow text={eyebrow} variant="white" />}
          {title && <h2 className={styles.hist__title}>{title}</h2>}
          {description && <p className={styles.hist__desc}>{description}</p>}
        </div>

        <div className={styles.hist__body} data-animate="fade-up" data-animate-delay="0.15">
          {hasItems(logos) && (
            <div className={styles.hist__logos}>
              <p className={styles.hist__logosLabel}>O Grupo Concreta é composto pelas empresas:</p>
              <div className={styles.hist__logosGrid}>
                {logos.map((item, i) => (
                  <div key={i} className={styles.hist__logoCard}>
                    <SmartImage image={item.logo} className={styles.hist__logoImg} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {(cardText || btnProps) && (
            <div className={styles.hist__card}>
              {cardText && <p className={styles.hist__cardText}>{cardText}</p>}
              {btnProps && (
                <a {...btnProps} className={styles.hist__cardBtn}>
                  {cardButton!.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
