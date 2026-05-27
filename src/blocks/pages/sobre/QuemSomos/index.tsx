import styles from './style.module.scss';
import { QuemSomosProps } from './types';
import SmartImage from '../../../../components/SmartImage';
import { hasItems, htmlContent } from '../../../../utils';

export default function QuemSomos({ background, imagens = [], title, text }: QuemSomosProps) {
  return (
    <section className={styles.qs}>
      {background?.url && (
        <div className={styles.qs__bg} aria-hidden="true">
          <SmartImage image={background} alt="" loading="eager" className={styles.qs__bgImg} />
        </div>
      )}

      <div className={styles.qs__inner}>
        {hasItems(imagens) && (
          <div className={styles.qs__media} data-animate="fade-right">
            {imagens.map((item, i) => (
              <div key={i} className={styles.qs__imgWrap} style={{ zIndex: imagens.length - i }}>
                <SmartImage image={item.imagem} className={styles.qs__img} />
              </div>
            ))}
          </div>
        )}

        <div className={styles.qs__content} data-animate="fade-left" data-animate-delay="0.15">
          {title && <h2 className={styles.qs__title}>{title}</h2>}
          {text && <div className={styles.qs__text} {...htmlContent(text)} />}
        </div>
      </div>
    </section>
  );
}
