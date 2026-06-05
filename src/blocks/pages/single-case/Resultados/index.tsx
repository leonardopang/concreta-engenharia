import styles from './style.module.scss';
import { hasItems, htmlContent } from '../../../../utils';
import type { SingleCaseResultadosProps } from './types';

export default function SingleCaseResultados({ title, description, fichaTitle, fichaItems }: SingleCaseResultadosProps) {
  return (
    <section className={styles.resultados}>
      <div className={styles.resultados__inner}>
        <div className={styles.resultados__content} data-animate="fade-right">
          {title && <h2 className={styles.resultados__title}>{title}</h2>}
          {description && (
            <div className={styles.resultados__description} {...htmlContent(description)} />
          )}
        </div>

        <div className={styles.resultados__ficha} data-animate="fade-left" data-animate-delay="0.15">
          {fichaTitle && <h3 className={styles.resultados__fichaTitle}>{fichaTitle}</h3>}

          {hasItems(fichaItems) && (
            <ul className={styles.resultados__fichaList}>
              {fichaItems!.map((item, i) => (
                <li key={i} className={styles.resultados__fichaItem}>
                  <span className={styles.resultados__fichaLabel}>{item.label}</span>
                  <span className={styles.resultados__fichaValue} dangerouslySetInnerHTML={{ __html: item.value }} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
