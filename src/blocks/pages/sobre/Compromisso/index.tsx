import styles from './style.module.scss';
import { CompromissoProps } from './types';
import SmartImage from '../../../../components/SmartImage';
import { htmlContent } from '../../../../utils';

export default function Compromisso({ background, title, text }: CompromissoProps) {
  return (
    <section className={styles.comp}>
      {background?.url && (
        <div className={styles.comp__bg} aria-hidden="true">
          <SmartImage image={background} alt="" loading="eager" className={styles.comp__bgImg} />
        </div>
      )}

      <div className={styles.comp__inner}>
        {title && (
          <h2 className={styles.comp__title} data-animate="fade-right">{title}</h2>
        )}
        {text && (
          <div className={styles.comp__text} data-animate="fade-left" data-animate-delay="0.15" {...htmlContent(text)} />
        )}
      </div>
    </section>
  );
}
