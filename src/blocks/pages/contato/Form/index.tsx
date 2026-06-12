import styles from './style.module.scss';
import SmartImage from '../../../../components/SmartImage';
import { htmlContent } from '../../../../utils';
import { IconPhone, IconEnvelope, IconMapPin, IconClock } from '../../../../icons';
import type { ContatoFormProps } from './types';

export default function ContatoForm({
  title,
  titleForm,
  description,
  phone,
  email,
  address,
  hours,
  mapImage,
  mapUrl,
  formHtml,
}: ContatoFormProps) {
  return (
    <section className={styles.form}>
      <div className={styles.form__inner}>
        <div className={styles.form__header} data-animate="fade-up">
          <h2 className={styles.form__title}>{title}</h2>
          {description && (
            <div className={styles.form__description} {...htmlContent(description)} />
          )}
        </div>

        <div className={styles.form__divider} />

        <div className={styles.form__body}>
          <div className={styles.form__info} data-animate="fade-right">
            <p className={styles.form__contactsLabel}>Fale conosco</p>
          <ul className={styles.form__contacts}>
              {phone && (
                <li className={styles.form__contactItem}>
                  <span className={styles.form__contactIcon}><IconPhone /></span>
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className={styles.form__contactText}>
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li className={styles.form__contactItem}>
                  <span className={styles.form__contactIcon}><IconEnvelope /></span>
                  <a href={`mailto:${email}`} className={styles.form__contactText}>
                    {email}
                  </a>
                </li>
              )}
              {address && (
                <li className={styles.form__contactItem}>
                  <span className={styles.form__contactIcon}><IconMapPin /></span>
                  <span className={styles.form__contactText}>{address}</span>
                </li>
              )}
              {hours && (
                <li className={styles.form__contactItem}>
                  <span className={styles.form__contactIcon}><IconClock /></span>
                  <span className={styles.form__contactText}>{hours}</span>
                </li>
              )}
            </ul>

            {mapImage && (
              <a
                href={mapUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.form__mapLink}
              >
                <SmartImage image={mapImage} className={styles.form__mapImage} />
              </a>
            )}
          </div>

          <div className={styles.form__wrap} data-animate="fade-left" data-animate-delay="0.15">
            {titleForm && <h3 className={styles.form__formTitle}>{titleForm}</h3>}
            {formHtml ? (
              <div
                className={styles.form__cf7}
                dangerouslySetInnerHTML={{ __html: formHtml }}
              />
            ) : (
              <p className={styles.form__empty}>
                Formulário não configurado. Selecione um formulário CF7 no painel.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
