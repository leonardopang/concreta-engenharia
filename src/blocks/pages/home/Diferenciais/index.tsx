import styles from './style.module.scss';
import { DiferenciaisProps } from './types';
import { imgProps, hasItems } from '../../../../utils';
import Eyebrow from '../../../../components/Eyebrow';

export default function Diferenciais({
  background,
  eyebrow,
  title,
  description,
  imagem,
  list = [],
}: DiferenciaisProps) {
  return (
    <section className={styles.dif}>
      <div className={styles.dif__bg} aria-hidden="true">
        {imgProps(background) && (
          <img {...imgProps(background)!} className={styles.dif__bgImg} />
        )}
      </div>

      <div className={styles.dif__inner}>
        <div className={styles.dif__header} data-animate="fade-up">
          {eyebrow && <Eyebrow text={eyebrow} />}

          <div className={styles.dif__headerText}>
            {title && <h2 className={styles.dif__title}>{title}</h2>}
            {description && <p className={styles.dif__description}>{description}</p>}
          </div>
        </div>

        <div className={styles.dif__body}>
          {imgProps(imagem) && (
            <div className={styles.dif__imageWrap} data-animate="fade-right">
              <img {...imgProps(imagem)!} className={styles.dif__image} />
            </div>
          )}

          {hasItems(list) && (
            <ul className={styles.dif__list}>
              {list.map((item, i) => (
                <li key={i} className={styles.dif__item} data-animate="fade-left" data-animate-delay={String(i * 0.08)}>
                  {imgProps(item.icone) && (
                    <div className={styles.dif__iconWrap}>
                      <img
                        {...imgProps(item.icone)!}
                        width={32}
                        height={32}
                        className={styles.dif__icon}
                      />
                    </div>
                  )}
                  {item.title && (
                    <p className={styles.dif__itemTitle}>{item.title}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
