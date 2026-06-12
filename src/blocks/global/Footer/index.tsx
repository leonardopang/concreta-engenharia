import styles from './style.module.scss';
import { FooterProps } from './types';
import SmartImage from '../../../components/SmartImage';
import {
  IconFacebook,
  IconInstagram,
  IconPhone,
  IconEnvelope,
  IconMapPin,
  IconClock,
} from '../../../icons';
import { htmlTitle } from '../../../utils';

const socialIcons: Record<string, React.ReactNode> = {
  facebook:  <IconFacebook />,
  instagram: <IconInstagram />,
};

export default function Footer({
  logo = { url: '', alt: '', width: 171, height: 44 },
  socials = [],
  institucional = [],
  solucoes = [],
  contact = {},
  bottom = {},
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>

        {/* Left col */}
        <div className={styles.footer__brand}>
          <a href="/" className={styles.footer__logo} aria-label={logo.alt}>
            {logo.url ? (
              <SmartImage image={logo} loading="eager" className={styles.footer__logoImg} />
            ) : (
              <span>{logo.alt}</span>
            )}
          </a>

          {socials.length > 0 && (
            <div className={styles.footer__social}>
              <span className={styles.footer__social_label}>Siga-nos</span>
              <div className={styles.footer__social_icons}>
                {socials.map((s) => {
                  const icon = socialIcons[s.rede];
                  if (!icon) return null;
                  return (
                    <a
                      key={s.rede}
                      href={s.url}
                      aria-label={s.rede}
                      {...(s.target ? { target: s.target, rel: 'noopener noreferrer' } : {})}
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Institucional menu */}
        {institucional.length > 0 && (
          <div className={styles.footer__col}>
            <p className={styles.footer__heading}>Institucional</p>
            <ul className={styles.footer__nav}>
              {institucional.map((item) => (
                <li key={item.url}>
                  <a href={item.url} className={styles.footer__nav_link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Soluções menu */}
        {solucoes.length > 0 && (
          <div className={styles.footer__col}>
            <p className={styles.footer__heading}>Soluções</p>
            <ul className={styles.footer__nav}>
              {solucoes.map((item) => (
                <li key={item.url}>
                  <a href={item.url} className={styles.footer__nav_link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Contact col */}
        <div className={styles.footer__col}>
          <p className={styles.footer__heading}>Fale conosco</p>
          <ul className={styles.footer__contact}>
            {contact.phone && (
              <li className={styles.footer__contact_item}>
                <IconPhone />
                <span>{contact.phone}</span>
              </li>
            )}
            {contact.email && (
              <li className={styles.footer__contact_item}>
                <IconEnvelope />
                <a href={`mailto:${contact.email}`} className={styles.footer__contact_link}>
                  {contact.email}
                </a>
              </li>
            )}
            {contact.address && (
              <li className={styles.footer__contact_item}>
                <IconMapPin />
                {contact.addressUrl ? (
                  <a href={contact.addressUrl} target="_blank" rel="noopener noreferrer" className={styles.footer__contact_link}>
                    {contact.address}
                  </a>
                ) : (
                  <span>{contact.address}</span>
                )}
              </li>
            )}
            {contact.hours && (
              <li className={styles.footer__contact_item}>
                <IconClock />
                <span {...htmlTitle(contact.hours)} />
              </li>
            )}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.footer__bottom_inner}>
        {bottom.copy && <span className={styles.footer__copy}>{bottom.copy}</span>}

        {bottom.privacyUrl && (
          <a href={bottom.privacyUrl} className={styles.footer__privacy}>
            {bottom.privacyLabel || 'Política de Privacidade'}
          </a>
        )}

        <span className={styles.footer__upsites}>
          Criação de Site por{' '}
          {bottom.upsitesUrl ? (
            <a href={bottom.upsitesUrl} target="_blank" rel="noopener noreferrer" className={styles.footer__upsites_link}>
              UpSItes
            </a>
          ) : (
            'UpSItes'
          )}
        </span>
      </div>
    </footer>
  );
}
