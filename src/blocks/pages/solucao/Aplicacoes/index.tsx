import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { hasItems, linkProps, htmlContent } from '../../../../utils';
import { IconCheck } from '../../../../icons';
import type { SolucaoAplicacoesProps } from './types';

export default function SolucaoAplicacoes({
  background,
  title,
  description,
  image,
  cards,
  bannerText,
  bannerButton,
}: SolucaoAplicacoesProps) {
  return (
    <section className={styles.aplicacoes}>
      {background?.url && (
        <div className={styles.aplicacoes__bg} aria-hidden="true">
          <SmartImage image={background} alt="" loading="eager" className={styles.aplicacoes__bgImg} />
        </div>
      )}

      <div className={styles.aplicacoes__inner}>
        <div className={styles.aplicacoes__grid}>
          {image && (
            <div className={styles.aplicacoes__imageWrap} data-animate="fade-right">
              <SmartImage image={image} className={styles.aplicacoes__image} alt="" />
              <div className={styles.aplicacoes__imageOverlay} aria-hidden="true" />
            </div>
          )}

          <div className={styles.aplicacoes__content} data-animate="fade-left" data-animate-delay="0.15">
            {title && <h2 className={styles.aplicacoes__title}>{title}</h2>}
            {description && (
              <div className={styles.aplicacoes__description} {...htmlContent(description)} />
            )}

            {hasItems(cards) && (
              <ul className={styles.aplicacoes__cards}>
                {cards!.map((card, i) => (
                  <li key={i} className={styles.aplicacoes__card}>
                    <IconCheck />
                    <span>{card.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {(bannerText || bannerButton) && (
            <div className={styles.aplicacoes__banner} data-animate="fade-up" data-animate-delay="0.25">
              {bannerText && (
                <p className={styles.aplicacoes__bannerText}>{bannerText}</p>
              )}
              {bannerButton && (
                <a {...linkProps(bannerButton)!} className={styles.aplicacoes__bannerBtn}>
                  {bannerButton.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
