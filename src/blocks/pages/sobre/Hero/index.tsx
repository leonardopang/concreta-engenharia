import styles from './style.module.scss';
import { HeroSobreProps } from './types';
import SmartImage from '../../../../components/SmartImage';

export default function HeroSobre({ background, title }: HeroSobreProps) {
  return (
    <section className={styles.hero}>
      {background?.url && (
        <div className={styles.hero__bg} aria-hidden="true">
          <SmartImage image={background} alt="" loading="eager" fetchpriority="high" className={styles.hero__bgImg} />
          <div className={styles.hero__overlay} />
        </div>
      )}

      <div className={styles.hero__inner} data-animate="fade-up">
        {title && <h1 className={styles.hero__title}>{title}</h1>}
      </div>
    </section>
  );
}
