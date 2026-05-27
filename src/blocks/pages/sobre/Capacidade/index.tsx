import styles from './style.module.scss';
import { CapacidadeProps } from './types';
import SmartImage from '../../../../components/SmartImage';
import Eyebrow from '../../../../components/Eyebrow';
import { hasItems } from '../../../../utils';

export default function Capacidade({ background, eyebrow, title, description, imagem, items = [] }: CapacidadeProps) {
  return (
    <section className={styles.cap}>
      {background?.url && (
        <div className={styles.cap__bg} aria-hidden="true">
          <SmartImage image={background} alt="" loading="eager" className={styles.cap__bgImg} />
        </div>
      )}

      <div className={styles.cap__inner}>
        <div className={styles.cap__header} data-animate="fade-up">
          {eyebrow && <Eyebrow text={eyebrow} />}
          {title && <h2 className={styles.cap__title}>{title}</h2>}
          {description && <p className={styles.cap__desc}>{description}</p>}
        </div>

        <div className={styles.cap__body}>
          {imagem?.url && (
            <div className={styles.cap__imgWrap} data-animate="fade-right">
              <SmartImage image={imagem} className={styles.cap__img} />
            </div>
          )}

          {hasItems(items) && (
            <ul className={styles.cap__list}>
              {items.map((item, i) => (
                <li key={i} className={styles.cap__item} data-animate="fade-left" data-animate-delay={String(i * 0.08)}>
                  <div className={styles.cap__iconBox}>
                    <SmartImage image={item.icone} width={32} height={32} className={styles.cap__icon} />
                  </div>
                  {item.title && <p className={styles.cap__itemTitle}>{item.title}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
