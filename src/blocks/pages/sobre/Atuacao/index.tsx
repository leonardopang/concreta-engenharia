import styles from './style.module.scss';
import { AtuacaoProps } from './types';
import Eyebrow from '../../../../components/Eyebrow';
import { IconCaretDoubleRight } from '../../../../icons';
import { hasItems, htmlContent } from '../../../../utils';

export default function Atuacao({ eyebrow, title, text, faixa = [] }: AtuacaoProps) {
  const ticker = hasItems(faixa) ? faixa : [];

  return (
    <div className={styles.atuacao}>
      <div className={styles.atuacao__card}>
        <div className={styles.atuacao__content} data-animate="fade-right">
          {eyebrow && <Eyebrow text={eyebrow} variant="white" />}
          {title && <h2 className={styles.atuacao__title}>{title}</h2>}
        </div>

        <div className={styles.atuacao__text} data-animate="fade-left" data-animate-delay="0.15">
          {text && <div {...htmlContent(text)} />}
        </div>

        {hasItems(ticker) && (
          <div className={styles.atuacao__faixa} aria-hidden="true">
            <div className={styles.atuacao__faixaTrack}>
              {[...ticker, ...ticker].map((f, i) => (
                <span key={i} className={styles.atuacao__faixaItem}>
                  {f.item}
                  <IconCaretDoubleRight />
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
