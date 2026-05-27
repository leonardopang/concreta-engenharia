import styles from './style.module.scss';
import { imgProps } from '../../../../utils';
import type { TrabalheHeroProps } from './types';

export default function TrabalheHero({ background, title }: TrabalheHeroProps) {
  return (
    <section className={styles.hero}>
      {background && (
        <div className={styles.hero__bg}>
          <img {...imgProps(background, { loading: 'eager', decoding: 'auto' })} className={styles.hero__bgImg} alt="" />
          <div className={styles.hero__overlay} />
        </div>
      )}
      <div className={styles.hero__inner}>
        <h1 className={styles.hero__title}>{title}</h1>
      </div>
    </section>
  );
}
