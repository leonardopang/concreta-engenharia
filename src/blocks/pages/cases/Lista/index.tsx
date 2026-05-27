import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { hasItems } from '../../../../utils';
import { IconMapPin, IconBookmark } from '../../../../icons';
import type { CasesListaProps } from './types';

export default function CasesLista({ posts }: CasesListaProps) {
  if (!hasItems(posts)) return null;

  return (
    <section className={styles.lista}>
      <div className={styles.lista__inner}>
        <ul className={styles.lista__grid}>
          {posts!.map((post, i) => (
            <li key={i} className={styles.lista__item} data-animate="fade-up" data-animate-delay={String(Math.floor(i / 3) * 0.1)}>
              <article className={styles.card}>
                {post.thumbnail && (
                  <div className={styles.card__thumb}>
                    <SmartImage image={post.thumbnail} className={styles.card__thumbImg} />
                  </div>
                )}

                <div className={styles.card__body}>
                  <div className={styles.card__content}>
                    <div className={styles.card__text}>
                      <h2 className={styles.card__title}>{post.title}</h2>
                      {post.resumo && (
                        <p className={styles.card__resumo}>{post.resumo}</p>
                      )}
                    </div>

                    <ul className={styles.card__meta}>
                      {post.local && (
                        <li className={styles.card__metaItem}>
                          <IconMapPin />
                          <span>{post.local}</span>
                        </li>
                      )}
                      {post.servico && (
                        <li className={styles.card__metaItem}>
                          <IconBookmark />
                          <span>{post.servico}</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  <a href={post.url} className={styles.card__btn}>
                    Ver projeto
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
