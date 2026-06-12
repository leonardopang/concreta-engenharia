import clsx from 'clsx';
import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { hasItems, linkProps } from '../../../../utils';
import { IconCheck } from '../../../../icons';
import type { SingleSolucaoServicosProps } from './types';

export default function SingleSolucaoServicos({
  sectionTitle,
  sectionDescription,
  cardListTitle,
  items,
  cardBgImage,
  cardQuote,
  cardButton,
  reversed = false,
}: SingleSolucaoServicosProps) {
  return (
    <section className={styles.servicos}>
      <div className={styles.servicos__inner}>
        <div className={styles.servicos__header} data-animate="fade-up">
          {sectionTitle && <h2 className={styles.servicos__title}>{sectionTitle}</h2>}
          {sectionDescription && (
            <p className={styles.servicos__description}>{sectionDescription}</p>
          )}
        </div>

        <div className={clsx(styles.servicos__grid, reversed && styles['servicos__grid--reversed'])}>
          <div className={styles.servicos__cardLight} data-animate="fade-right">
            {cardListTitle && (
              <p className={styles.servicos__cardListTitle}>{cardListTitle}</p>
            )}
            {hasItems(items) && (
              <ul className={styles.servicos__list}>
                {items!.map((item, i) => (
                  <li key={i} className={styles.servicos__listItem}>
                    <IconCheck />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={clsx(styles.servicos__cardDark, !cardBgImage && styles['servicos__cardDark--noImage'])} data-animate="fade-left" data-animate-delay="0.15">
            {cardBgImage && (
              <div className={styles.servicos__cardBg} aria-hidden="true">
                <SmartImage image={cardBgImage} className={styles.servicos__cardBgImg} alt="" />
              </div>
            )}
            <div className={styles.servicos__cardOverlay} aria-hidden="true" />
            <div className={styles.servicos__cardContent}>
              {cardQuote && <p className={styles.servicos__cardQuote}>{cardQuote}</p>}
              {cardButton && (
                <a {...linkProps(cardButton)!} className={styles.servicos__cardBtn}>
                  {cardButton.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
