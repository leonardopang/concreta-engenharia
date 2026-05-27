import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { hasItems, linkProps } from '../../../../utils';
import { IconCheck } from '../../../../icons';
import type { CaseAplicacoesProps } from './types';

export default function CaseAplicacoes({
  title,
  description,
  image,
  items,
  bannerText,
  bannerButton,
}: CaseAplicacoesProps) {
  return (
    <section className={styles.aplicacoes}>
      <div className={styles.aplicacoes__inner}>
        <div className={styles.aplicacoes__body}>
          {image && (
            <div className={styles.aplicacoes__photoWrap} data-animate="fade-right">
              <SmartImage image={image} className={styles.aplicacoes__photo} />
            </div>
          )}

          <div className={styles.aplicacoes__content} data-animate="fade-left" data-animate-delay="0.15">
            <div className={styles.aplicacoes__header}>
              <h2 className={styles.aplicacoes__title}>{title}</h2>
              {description && <p className={styles.aplicacoes__description}>{description}</p>}
            </div>

            {hasItems(items) && (
              <ul className={styles.aplicacoes__grid}>
                {items!.map((item, i) => (
                  <li key={i} className={styles.aplicacoes__card}>
                    <span className={styles.aplicacoes__cardIcon}><IconCheck /></span>
                    <p className={styles.aplicacoes__cardText}>{item.text}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {(bannerText || bannerButton) && (
          <div className={styles.aplicacoes__banner} data-animate="fade-up">
            {bannerText && <p className={styles.aplicacoes__bannerText}>{bannerText}</p>}
            {bannerButton && (
              <a {...linkProps(bannerButton)!} className={styles.aplicacoes__bannerBtn}>
                {bannerButton.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
