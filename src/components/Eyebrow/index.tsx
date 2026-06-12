import clsx from 'clsx';
import styles from './style.module.scss';
import { EyebrowProps } from './types';

export default function Eyebrow({ text, variant = 'green', className }: EyebrowProps) {
  return (
    <div className={clsx(styles.eyebrow, styles[`eyebrow--${variant}`], className)} data-eyebrow-animate>
      <span className={styles.eyebrow__bar} data-eyebrow-bar aria-hidden="true" />
      <span className={styles.eyebrow__text}>{text}</span>
      <span className={styles.eyebrow__bar} data-eyebrow-bar aria-hidden="true" />
    </div>
  );
}
