import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { hasItems } from '../../../../utils';
import { IconCheck } from '../../../../icons';
import type { SolucoesCapacidadeProps } from './types';

export default function SolucoesCapacidade({ title, description, image, items }: SolucoesCapacidadeProps) {
  return (
    <section className={styles.capacidade}>
      <div className={styles.capacidade__inner}>
        <div className={styles.capacidade__top}>
          <div className={styles.capacidade__content} data-animate="fade-right">
            <h2 className={styles.capacidade__title}>{title}</h2>
            {description && <p className={styles.capacidade__description}>{description}</p>}
          </div>

          {image && (
            <div className={styles.capacidade__photoWrap} data-animate="fade-left" data-animate-delay="0.15">
              <SmartImage image={image} className={styles.capacidade__photo} />
            </div>
          )}
        </div>

        {hasItems(items) && (
          <ul className={styles.capacidade__cards} data-animate="fade-up" data-animate-delay="0.2">
            {items!.map((item, i) => (
              <li key={i} className={styles.capacidade__card}>
                <span className={styles.capacidade__cardIcon}><IconCheck /></span>
                <p className={styles.capacidade__cardText}>{item.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
