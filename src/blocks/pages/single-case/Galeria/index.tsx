import { useEffect, useId } from 'react';
import 'photoswipe/dist/photoswipe.css';
import styles from './style.module.scss';
import { hasItems } from '../../../../utils';
import type { SingleCaseGaleriaProps } from './types';

export default function SingleCaseGaleria({ images }: SingleCaseGaleriaProps) {
  const galleryId = 'galeria-' + useId().replace(/:/g, '');

  useEffect(() => {
    if (!hasItems(images)) return;

    let lightbox: import('photoswipe/lightbox').default | null = null;

    import('photoswipe/lightbox').then(({ default: PhotoSwipeLightbox }) => {
      lightbox = new PhotoSwipeLightbox({
        gallery: `#${galleryId}`,
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      lightbox.init();
    });

    return () => {
      lightbox?.destroy();
    };
  }, [galleryId]);

  if (!hasItems(images)) return null;

  const [first, ...rest] = images!;

  return (
    <section className={styles.galeria}>
      <div id={galleryId} className={styles.galeria__inner} data-animate="fade-up">
        {first?.image && (
          <a
            href={first.image.url}
            data-pswp-width={first.image.width || 1920}
            data-pswp-height={first.image.height || 1080}
            className={styles.galeria__main}
            aria-label={first.image.alt || 'Abrir imagem'}
          >
            <img
              src={first.image.url}
              alt={first.image.alt || ''}
              className={styles.galeria__mainImg}
              loading="eager"
              decoding="async"
            />
          </a>
        )}

        {hasItems(rest) && (
          <ul className={styles.galeria__grid}>
            {rest.map((item, i) =>
              item.image ? (
                <li key={i} className={styles.galeria__gridItem}>
                  <a
                    href={item.image.url}
                    data-pswp-width={item.image.width || 1920}
                    data-pswp-height={item.image.height || 1080}
                    aria-label={item.image.alt || 'Abrir imagem'}
                  >
                    <img
                      src={item.image.url}
                      alt={item.image.alt || ''}
                      className={styles.galeria__gridImg}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </li>
              ) : null
            )}
          </ul>
        )}
      </div>
    </section>
  );
}
