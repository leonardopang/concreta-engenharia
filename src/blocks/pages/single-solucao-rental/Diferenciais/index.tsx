import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { hasItems, linkProps } from '../../../../utils';
import { IconCheck } from '../../../../icons';
import type { SingleSolucaoRentalDiferenciaisProps } from './types';

export default function SingleSolucaoRentalDiferenciais({
  sectionTitle,
  sectionDescription,
  cardBgImage,
  cardQuote,
  cardButton,
  cardTitle,
  items,
}: SingleSolucaoRentalDiferenciaisProps) {
  return (
    <section className={styles.diferenciais}>
      <div className={styles.diferenciais__inner}>
        <div className={styles.diferenciais__header} data-animate="fade-up">
          {sectionTitle && <h2 className={styles.diferenciais__title}>{sectionTitle}</h2>}
          {sectionDescription && (
            <p className={styles.diferenciais__description}>{sectionDescription}</p>
          )}
        </div>

        <div className={styles.diferenciais__grid}>
          <div className={styles.diferenciais__cardDark} data-animate="fade-right">
            {cardBgImage && (
              <div className={styles.diferenciais__cardBg} aria-hidden="true">
                <SmartImage image={cardBgImage} className={styles.diferenciais__cardBgImg} alt="" />
              </div>
            )}
            <div className={styles.diferenciais__cardOverlay} aria-hidden="true" />
            <div className={styles.diferenciais__cardContent}>
              {cardQuote && (
                <p className={styles.diferenciais__cardQuote}>{cardQuote}</p>
              )}
              {cardButton && (
                <a {...linkProps(cardButton)!} className={styles.diferenciais__cardBtn}>
                  {cardButton.label}
                </a>
              )}
            </div>
          </div>

          <div className={styles.diferenciais__cardLight} data-animate="fade-left" data-animate-delay="0.15">
            {cardTitle && (
              <p className={styles.diferenciais__cardTitle}>{cardTitle}</p>
            )}
            {hasItems(items) && (
              <ul className={styles.diferenciais__list}>
                {items!.map((item, i) => (
                  <li key={i} className={styles.diferenciais__listItem}>
                    <IconCheck />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
