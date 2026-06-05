import clsx from 'clsx';
import styles from './style.module.scss';
import { TextImageProps } from './types';
import SmartImage from '../../../components/SmartImage';
import { linkProps, htmlContent } from '../../../utils';

export default function TextImage({ background, imagem, title, text, button, reversed = false }: TextImageProps) {
  const btnProps = linkProps(button);

  return (
    <section className={styles.textImage}>
      <SmartImage image={background} alt="" loading="eager" className={styles.textImage__bg} />

      <div className={clsx(styles.textImage__inner, reversed && styles['textImage__inner--reversed'])}>
        <div className={styles.textImage__media} data-animate="reveal-up">
          <SmartImage image={imagem} className={styles.textImage__image} />
        </div>

        <div className={styles.textImage__content}>
          {title && (
            <h2
              className={styles.textImage__title}
              data-animate="fade-up"
            >
              {title}
            </h2>
          )}

          {text && (
            <div
              className={styles.textImage__text}
              data-animate="fade-up"
              data-animate-delay="0.2"
              {...htmlContent(text)}
            />
          )}

          {btnProps && (
            <a
              {...btnProps}
              className={styles.textImage__button}
              data-animate="fade-up"
              data-animate-delay="0.35"
            >
              {btnProps.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
