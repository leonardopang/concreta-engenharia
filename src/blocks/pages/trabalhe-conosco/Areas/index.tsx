import styles from './style.module.scss';
import { hasItems } from '../../../../utils';
import { IconCheck } from '../../../../icons';
import type { TrabalheAreasProps } from './types';

export default function TrabalheAreas({ title, description, areas, bancoTalentos }: TrabalheAreasProps) {
  return (
    <section className={styles.areas}>
      <div className={styles.areas__inner}>
        <div className={styles.areas__header} data-animate="fade-up">
          <h2 className={styles.areas__title}>{title}</h2>
          {description && <p className={styles.areas__description}>{description}</p>}
        </div>

        {hasItems(areas) && (
          <div className={styles.areas__grid}>
            {areas.map((area, i) => (
              <div
                key={i}
                className={styles.areas__card}
                data-animate="fade-up"
                data-animate-delay={String(i * 0.08)}
              >
                <IconCheck />
                <p className={styles.areas__cardName}>{area.nome}</p>
              </div>
            ))}
          </div>
        )}

        {bancoTalentos && (
          <div className={styles.areas__banner} data-animate="fade-up">
            <p>{bancoTalentos}</p>
          </div>
        )}
      </div>
    </section>
  );
}
