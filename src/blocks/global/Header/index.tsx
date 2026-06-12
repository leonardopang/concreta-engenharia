import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';
import { HeaderProps } from './types';
import SmartImage from '../../../components/SmartImage';
import { linkProps, hasItems } from '../../../utils';
import { IconChevronDown } from '../../../icons';

export default function Header({
  siteUrl = '/',
  siteName = '',
  logo = { url: '', alt: '', width: 0, height: 0 },
  navItems = [],
  cta,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDrawerItem, setOpenDrawerItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => {
    setOpen(false);
    setOpenDrawerItem(null);
  };

  const toggleDrawerItem = (key: string) => {
    setOpenDrawerItem((current) => (current === key ? null : key));
  };
  const ctaProps = linkProps(cta);

  return (
    <>
      {open && (
        <div
          className={styles.header__backdrop}
          onClick={close}
          aria-hidden="true"
        />
      )}

      <div className={clsx(styles['header-wrap'], scrolled && styles['header-wrap--scrolled'])}>
        <header className={clsx(styles.header, open && styles['header--open'])}>

          <a href={siteUrl} className={styles.header__logo} aria-label={siteName}>
            <SmartImage image={logo} loading="eager" className={styles.header__logoImg} />
            {!logo.url && <span>{siteName}</span>}
          </a>

          <div className={styles.header__right}>
            <nav className={styles.header__nav} aria-label="Menu principal">
              <ul className={styles['header__nav-list']}>
                {navItems.map((item) => {
                  const hasChildren = hasItems(item.children);

                  return (
                    <li
                      key={item.url}
                      className={clsx(
                        styles['header__nav-item'],
                        item.current && styles['header__nav-item--current'],
                        hasChildren && styles['header__nav-item--has-children'],
                      )}
                    >
                      <div className={styles['header__nav-item-head']}>
                        <a href={item.url} className={styles['header__nav-link']}>
                          {item.label}
                        </a>

                        {hasChildren && (
                          <span className={styles['header__nav-toggle']} aria-hidden="true">
                            <IconChevronDown />
                          </span>
                        )}
                      </div>

                      {hasChildren && (
                        <div className={styles['header__nav-dropdown']}>
                          <ul className={styles['header__nav-submenu']}>
                            {item.children!.map((child) => (
                              <li key={child.url}>
                                <a href={child.url} className={styles['header__nav-sublink']}>
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {ctaProps && (
              <a {...ctaProps} className={styles.header__cta}>
                {ctaProps.label}
              </a>
            )}
          </div>

          <button
            className={styles.header__toggle}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="header-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles['header__toggle-bar']} />
            <span className={styles['header__toggle-bar']} />
            <span className={styles['header__toggle-bar']} />
          </button>
        </header>

        <div
          id="header-drawer"
          className={clsx(styles.header__drawer, open && styles['header__drawer--open'])}
          aria-hidden={!open}
        >
          <nav aria-label="Menu mobile">
            <ul className={styles['header__drawer-list']}>
              {navItems.map((item) => {
                const hasChildren = hasItems(item.children);
                const isDrawerOpen = openDrawerItem === item.url;

                return (
                  <li
                    key={item.url}
                    className={clsx(
                      styles['header__drawer-item'],
                      hasChildren && styles['header__drawer-item--has-children'],
                      isDrawerOpen && styles['header__drawer-item--open'],
                    )}
                  >
                    <div className={styles['header__drawer-item-head']}>
                      <a
                        href={item.url}
                        className={clsx(
                          styles['header__drawer-link'],
                          item.current && styles['header__drawer-link--current'],
                        )}
                        onClick={close}
                      >
                        {item.label}
                      </a>

                      {hasChildren && (
                        <button
                          type="button"
                          className={styles['header__drawer-toggle']}
                          aria-label="Submenu"
                          aria-expanded={isDrawerOpen}
                          onClick={() => toggleDrawerItem(item.url)}
                        >
                          <IconChevronDown />
                        </button>
                      )}
                    </div>

                    {hasChildren && (
                      <ul className={styles['header__drawer-submenu']}>
                        {item.children!.map((child) => (
                          <li key={child.url}>
                            <a
                              href={child.url}
                              className={styles['header__drawer-sublink']}
                              onClick={close}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {ctaProps && (
            <a
              {...ctaProps}
              className={styles['header__drawer-cta']}
              onClick={close}
            >
              {ctaProps.label}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
