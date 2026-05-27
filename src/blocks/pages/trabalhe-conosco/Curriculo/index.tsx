import styles from './style.module.scss';
import type { TrabalheCurriculoProps } from './types';

export default function TrabalheCurriculo({ title, description, formHtml }: TrabalheCurriculoProps) {
  return (
    <section className={styles.curriculo}>
      <div className={styles.curriculo__inner}>
        <div className={styles.curriculo__intro} data-animate="fade-right">
          <h2 className={styles.curriculo__title}>{title}</h2>
          {description && <p className={styles.curriculo__description}>{description}</p>}
        </div>

        <div className={styles.curriculo__formWrap} data-animate="fade-left" data-animate-delay="0.15">
          {formHtml ? (
            <div
              className={styles.curriculo__form}
              dangerouslySetInnerHTML={{ __html: formHtml }}
            />
          ) : (
            <p className={styles.curriculo__empty}>
              Formulário não configurado. Selecione um formulário CF7 no painel.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
