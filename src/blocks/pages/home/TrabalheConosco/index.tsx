import styles from './style.module.scss';
import { TrabalheConoscoProps } from './types';
import { imgProps, linkProps, htmlContent } from '../../../../utils';
import Eyebrow from '../../../../components/Eyebrow';

export default function TrabalheConosco({
  background,
  eyebrow,
  title,
  description,
  button,
  cardIcone,
  cardDesc,
  imagem,
}: TrabalheConoscoProps) {
  return (
    <section className={styles.tc}>
      {imgProps(background) && (
        <div className={styles.tc__bg} aria-hidden="true">
          <img {...imgProps(background)!} className={styles.tc__bgImg} />
        </div>
      )}

      <div className={styles.tc__inner}>
        <div className={styles.tc__content} data-animate="fade-right">
          {eyebrow && <Eyebrow text={eyebrow} />}
          {title && <h2 className={styles.tc__title}>{title}</h2>}
          {description && (
            <div className={styles.tc__description} {...htmlContent(description)} />
          )}
          {linkProps(button) && (
            <a {...linkProps(button)!} className={styles.tc__btn}>
              {button!.label}
            </a>
          )}
        </div>

        <div className={styles.tc__imageWrap} data-animate="fade-left" data-animate-delay="0.15">
          {imgProps(imagem) && (
            <img {...imgProps(imagem)!} className={styles.tc__image} />
          )}
          {(imgProps(cardIcone) || cardDesc) && (
            <div className={styles.tc__card}>
              {imgProps(cardIcone) && (
                <div className={styles.tc__cardIcon}>
                  <img {...imgProps(cardIcone)!} width={32} height={32} className={styles.tc__cardIconImg} />
                </div>
              )}
              {cardDesc && <p className={styles.tc__cardDesc}>{cardDesc}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
