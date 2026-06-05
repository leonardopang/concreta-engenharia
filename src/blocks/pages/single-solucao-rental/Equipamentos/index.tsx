import styles from './style.module.scss';
import { hasItems, linkProps } from '../../../../utils';
import { IconCheck } from '../../../../icons';
import type { SingleSolucaoRentalEquipamentosProps } from './types';

export default function SingleSolucaoRentalEquipamentos({
  sectionTitle,
  sectionDescription,
  items,
  cardQuote,
  cardButton,
}: SingleSolucaoRentalEquipamentosProps) {
  return (
    <section className={styles.equipamentos}>
      <div className={styles.equipamentos__inner}>
        <div className={styles.equipamentos__header} data-animate="fade-up">
          {sectionTitle && <h2 className={styles.equipamentos__title}>{sectionTitle}</h2>}
          {sectionDescription && (
            <p className={styles.equipamentos__description}>{sectionDescription}</p>
          )}
        </div>

        <div className={styles.equipamentos__grid}>
          <div className={styles.equipamentos__cardLight} data-animate="fade-right">
            {hasItems(items) && (
              <ul className={styles.equipamentos__list}>
                {items!.map((item, i) => (
                  <li key={i} className={styles.equipamentos__listItem}>
                    <IconCheck />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.equipamentos__cardDark} data-animate="fade-left" data-animate-delay="0.15">
            <div className={styles.equipamentos__cardContent}>
              {cardQuote && (
                <p className={styles.equipamentos__cardQuote}>{cardQuote}</p>
              )}
              {cardButton && (
                <a {...linkProps(cardButton)!} className={styles.equipamentos__cardBtn}>
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
