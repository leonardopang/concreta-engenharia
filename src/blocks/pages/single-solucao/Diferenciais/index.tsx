import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { hasItems } from '../../../../utils';
import { IconCheck } from '../../../../icons';
import type { SingleSolucaoDiferenciaisProps } from './types';

export default function SingleSolucaoDiferenciais({
  sectionTitle,
  sectionDescription,
  photo,
  cardTitle,
  items,
}: SingleSolucaoDiferenciaisProps) {
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
            {photo && (
              <SmartImage image={photo} className={styles.diferenciais__photo} alt="" />
            )}
          </div>

          <div className={styles.diferenciais__cardLight} data-animate="fade-left" data-animate-delay="0.15">
            {cardTitle && <p className={styles.diferenciais__cardTitle}>{cardTitle}</p>}
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
