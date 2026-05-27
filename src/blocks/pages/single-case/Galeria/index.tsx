import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { hasItems } from '../../../../utils';
import type { SingleCaseGaleriaProps } from './types';

export default function SingleCaseGaleria({ images }: SingleCaseGaleriaProps) {
  if (!hasItems(images)) return null;

  const [first, ...rest] = images!;

  return (
    <section className={styles.galeria}>
      <div className={styles.galeria__inner} data-animate="fade-up">
        {first?.image && (
          <div className={styles.galeria__main}>
            <SmartImage image={first.image} className={styles.galeria__mainImg} />
          </div>
        )}

        {hasItems(rest) && (
          <ul className={styles.galeria__grid}>
            {rest.map((item, i) => (
              item.image && (
                <li key={i} className={styles.galeria__gridItem}>
                  <SmartImage image={item.image} className={styles.galeria__gridImg} />
                </li>
              )
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
