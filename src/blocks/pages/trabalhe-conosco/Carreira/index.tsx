import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { linkProps, htmlContent } from '../../../../utils';
import { IconChevronDown } from '../../../../icons';
import type { TrabalheCarreiraProps } from './types';

export default function TrabalheCarreira({ imagem, title, description, button }: TrabalheCarreiraProps) {
  return (
    <section className={styles.carreira}>
      <div className={styles.carreira__inner}>
        <div className={styles.carreira__card}>
          {imagem && (
            <div className={styles.carreira__media} data-animate="fade-right">
              <SmartImage image={imagem} className={styles.carreira__image} alt="" />
            </div>
          )}
          <div className={styles.carreira__content} data-animate="fade-left" data-animate-delay="0.15">
            <div className={styles.carreira__text}>
              <h2 className={styles.carreira__title}>{title}</h2>
              {description && (
                <div className={styles.carreira__description} {...htmlContent(description)} />
              )}
            </div>
            {button && (
              <a {...linkProps(button)!} className={styles.carreira__btn}>
                {button.label}
                <IconChevronDown />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
