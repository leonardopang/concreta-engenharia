import clsx from 'clsx';
import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { hasItems, htmlContent } from '../../../../utils';
import type { SingleCaseConteudoProps } from './types';

export default function SingleCaseConteudo({ sections }: SingleCaseConteudoProps) {
  if (!hasItems(sections)) return null;

  return (
    <>
      {sections!.map((section, i) => {
        const isTextLeft = section.layout === 'text_left';

        return (
          <section key={i} className={styles.secao}>
            <div className={styles.secao__inner}>
              <div className={clsx(styles.secao__body, isTextLeft && styles['secao__body--reversed'])}>
                <div className={styles.secao__photos} data-animate={isTextLeft ? 'fade-right' : 'fade-left'} data-animate-delay="0.15">
                  {section.image1 && (
                    <div className={styles.secao__photoTop}>
                      <SmartImage image={section.image1} className={styles.secao__photo} />
                    </div>
                  )}
                  {section.image2 && (
                    <div className={styles.secao__photoBottom}>
                      <SmartImage image={section.image2} className={styles.secao__photo} />
                    </div>
                  )}
                </div>

                <div className={styles.secao__content} data-animate={isTextLeft ? 'fade-left' : 'fade-right'}>
                  {section.eyebrow && (
                    <span className={styles.secao__eyebrow}>{section.eyebrow}</span>
                  )}
                  {section.title && (
                    <h2 className={styles.secao__title}>{section.title}</h2>
                  )}
                  {section.description && (
                    <div className={styles.secao__description} {...htmlContent(section.description)} />
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
