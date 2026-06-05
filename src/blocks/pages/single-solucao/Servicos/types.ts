import type { AcfImage, AcfLink } from '../../../../utils';

export interface ServicosItem {
  text: string;
}

export interface SingleSolucaoServicosProps {
  sectionTitle?: string;
  sectionDescription?: string;
  cardListTitle?: string;
  items?: ServicosItem[];
  cardBgImage?: AcfImage;
  cardQuote?: string;
  cardButton?: AcfLink;
  reversed?: boolean;
}
