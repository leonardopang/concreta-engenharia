import type { AcfImage } from '../../../utils';

export interface Social {
  rede: string;
  url: string;
  target?: string;
}

export interface NavItem {
  label: string;
  url: string;
}

export interface Contact {
  phone?: string;
  email?: string;
  address?: string;
  addressUrl?: string;
  hours?: string;
}

export interface Bottom {
  copy?: string;
  privacyLabel?: string;
  privacyUrl?: string;
  upsitesUrl?: string;
}

export interface FooterProps {
  logo?: AcfImage;
  socials?: Social[];
  institucional?: NavItem[];
  solucoes?: NavItem[];
  contact?: Contact;
  bottom?: Bottom;
}
