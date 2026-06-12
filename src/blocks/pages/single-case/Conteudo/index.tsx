import clsx from 'clsx';
import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import Eyebrow from '../../../../components/Eyebrow';
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
                {section.image && (
                  <div className={styles.secao__media} data-animate={isTextLeft ? 'fade-right' : 'fade-left'} data-animate-delay="0.15">
                    <SmartImage image={section.image} className={styles.secao__photo} />
                  </div>
                )}

                <div className={styles.secao__content} data-animate={isTextLeft ? 'fade-left' : 'fade-right'}>
                  {section.eyebrow && (
                    <Eyebrow text={section.eyebrow} variant="green" />
                  )}
                  {section.title && (
                    <h2 className={clsx(styles.secao__title, section.eyebrow && styles['secao__title--withEyebrow'])}>{section.title}</h2>
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
