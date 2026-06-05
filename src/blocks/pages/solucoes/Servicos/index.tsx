import clsx from 'clsx';
import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { hasItems, linkProps } from '../../../../utils';
import { IconCheck } from '../../../../icons';
import type { SolucoesServicosProps } from './types';

export default function SolucoesServicos({ items }: SolucoesServicosProps) {
  if (!hasItems(items)) return null;

  return (
    <>
      {items!.map((servico, i) => (
        <section key={i} className={styles.servico}>
          <div className={styles.servico__inner}>
            <div className={styles.servico__header} data-animate="fade-up">
              <h2 className={styles.servico__title}>{servico.title}</h2>
              {servico.description && (
                <p className={styles.servico__description}>{servico.description}</p>
              )}
            </div>

            <div className={clsx(
              styles.servico__cards,
              servico.layout === 'items_right' && styles['servico__cards--reversed']
            )}>
              <div className={styles.servico__listCard} data-animate="fade-up" data-animate-delay="0.1">
                {servico.cardTitle && (
                  <p className={styles.servico__listTitle}>{servico.cardTitle}</p>
                )}
                {hasItems(servico.checkItems) && (
                  <ul className={styles.servico__list}>
                    {servico.checkItems!.map((ci, j) => (
                      <li key={j} className={styles.servico__listItem}>
                        <span className={styles.servico__listIcon}><IconCheck /></span>
                        <span className={styles.servico__listText}>{ci.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={styles.servico__photoCard} data-animate="fade-up" data-animate-delay="0.2">
                {servico.cardImage && (
                  <SmartImage image={servico.cardImage} className={styles.servico__photoBg} alt="" />
                )}
                <div className={styles.servico__photoOverlay} />
                <div className={styles.servico__photoContent}>
                  {servico.cardQuote && (
                    <p className={styles.servico__photoQuote}>{servico.cardQuote}</p>
                  )}
                  {servico.cardButton && (
                    <a {...linkProps(servico.cardButton)!} className={styles.servico__photoBtn}>
                      {servico.cardButton.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
