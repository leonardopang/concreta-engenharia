import type { AcfImage, AcfLink } from '../../../utils';

export interface NavItem {
  label: string;
  url: string;
  current?: boolean;
  children?: NavItem[];
}

export interface HeaderProps {
  siteUrl?: string;
  siteName?: string;
  logo?: AcfImage;
  navItems?: NavItem[];
  cta?: AcfLink | null;
}
