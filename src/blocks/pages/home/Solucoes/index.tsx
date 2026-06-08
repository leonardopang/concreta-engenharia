import styles from './style.module.scss';
import { SolucoesProps } from './types';
import SmartImage from '../../../../components/SmartImage';
import { imgProps, linkProps, hasItems } from '../../../../utils';

export default function Solucoes({ background, title, description, cards = [] }: SolucoesProps) {
  return (
    <section id="solucoes" className={styles.solucoes}>
      <div className={styles.solucoes__card}>
        {imgProps(background) ? (
          <div className={styles.solucoes__bg} aria-hidden="true">
            <img {...imgProps(background)!} className={styles.solucoes__bgImg} />
          </div>
        ) : (
          <div className={styles.solucoes__bg} aria-hidden="true" />
        )}

        <div className={styles.solucoes__header} data-animate="fade-up">
          {title && <h2 className={styles.solucoes__title}>{title}</h2>}
          {description && <p className={styles.solucoes__description}>{description}</p>}
        </div>

        {hasItems(cards) && (
          <div className={styles.solucoes__grid}>
            {cards.map((card, i) => {
              const btnProps = linkProps(card.button);
              return (
                <article key={i} className={styles.solucoes__item} data-animate="fade-up" data-animate-delay={String(i * 0.1)}>
                  <div className={styles.solucoes__iconWrap}>
                    <SmartImage
                      image={card.icone}
                      width={32}
                      height={32}
                      className={styles.solucoes__icon}
                    />
                  </div>

                  <div className={styles.solucoes__body}>
                    <div className={styles.solucoes__itemText}>
                      {card.title && (
                        <h3 className={styles.solucoes__itemTitle}>{card.title}</h3>
                      )}
                      {card.description && (
                        <p className={styles.solucoes__itemDesc}>{card.description}</p>
                      )}
                    </div>

                    {btnProps && (
                      <a {...btnProps} className={styles.solucoes__button}>
                        {btnProps.label}
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
