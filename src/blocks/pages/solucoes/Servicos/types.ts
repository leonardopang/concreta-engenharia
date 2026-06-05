import type { AcfImage, AcfLink } from '../../../../utils';

export interface CheckItem {
  text: string;
}

export interface ServicoItem {
  title: string;
  description?: string;
  cardTitle?: string;
  checkItems?: CheckItem[];
  cardImage?: AcfImage | null;
  cardQuote?: string;
  cardButton?: AcfLink | null;
  layout?: 'items_left' | 'items_right';
}

export interface SolucoesServicosProps {
  items?: ServicoItem[];
}
