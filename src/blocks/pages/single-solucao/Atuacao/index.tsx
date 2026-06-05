import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { hasItems } from '../../../../utils';
import { IconCheck } from '../../../../icons';
import type { SingleSolucaoAtuacaoProps } from './types';

export default function SingleSolucaoAtuacao({
  title,
  description,
  photo,
  items,
}: SingleSolucaoAtuacaoProps) {
  return (
    <section className={styles.cap}>
      <div className={styles.cap__inner}>
        <div className={styles.cap__top}>
          <div className={styles.cap__content} data-animate="fade-right">
            {title && <h2 className={styles.cap__title}>{title}</h2>}
            {description && <p className={styles.cap__desc}>{description}</p>}
          </div>

          <div className={styles.cap__photoCard} data-animate="fade-left" data-animate-delay="0.15">
            {photo && (
              <SmartImage image={photo} className={styles.cap__photo} alt="" loading="eager" />
            )}
          </div>
        </div>

        {hasItems(items) && (
          <ul className={styles.cap__cards}>
            {items!.map((item, i) => (
              <li
                key={i}
                className={styles.cap__card}
                data-animate="fade-up"
                data-animate-delay={String(i * 0.08)}
              >
                <IconCheck />
                <span className={styles.cap__cardText}>{item.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
