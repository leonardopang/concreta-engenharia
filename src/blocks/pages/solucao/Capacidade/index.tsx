import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { hasItems, htmlContent } from '../../../../utils';
import { IconCheck } from '../../../../icons';
import type { SolucaoCapacidadeProps } from './types';

export default function SolucaoCapacidade({
  title,
  description,
  image,
  items,
}: SolucaoCapacidadeProps) {
  return (
    <section className={styles.capacidade}>
      <div className={styles.capacidade__inner}>
        <div className={styles.capacidade__top}>
          <div className={styles.capacidade__content} data-animate="fade-right">
            {title && <h2 className={styles.capacidade__title}>{title}</h2>}
            {description && (
              <div className={styles.capacidade__description} {...htmlContent(description)} />
            )}
          </div>

          {image && (
            <div className={styles.capacidade__imageWrap} data-animate="fade-left" data-animate-delay="0.15">
              <SmartImage image={image} className={styles.capacidade__image} alt="" />
              <div className={styles.capacidade__imageOverlay} aria-hidden="true" />
            </div>
          )}
        </div>

        {hasItems(items) && (
          <ul className={styles.capacidade__cards} data-animate="fade-up" data-animate-delay="0.2">
            {items!.map((item, i) => (
              <li key={i} className={styles.capacidade__card}>
                <IconCheck />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
