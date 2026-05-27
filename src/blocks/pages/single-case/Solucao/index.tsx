import styles from './style.module.scss';
import { hasItems } from '../../../../utils';
import { IconCheck } from '../../../../icons';
import type { SingleCaseSolucaoProps } from './types';

export default function SingleCaseSolucao({ title, items }: SingleCaseSolucaoProps) {
  return (
    <section className={styles.solucao}>
      <div className={styles.solucao__inner} data-animate="fade-up">
        <div className={styles.solucao__box}>
          {title && <h2 className={styles.solucao__title}>{title}</h2>}

          {hasItems(items) && (
            <ul className={styles.solucao__grid}>
              {items!.map((item, i) => (
                <li key={i} className={styles.solucao__card}>
                  <span className={styles.solucao__cardIcon}><IconCheck /></span>
                  <p className={styles.solucao__cardText}>{item.text}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
