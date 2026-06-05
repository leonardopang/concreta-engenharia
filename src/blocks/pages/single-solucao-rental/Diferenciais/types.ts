import type { AcfImage, AcfLink } from '../../../../utils';

export interface DiferenciaisRentalItem {
  text: string;
}

export interface SingleSolucaoRentalDiferenciaisProps {
  sectionTitle?: string;
  sectionDescription?: string;
  cardBgImage?: AcfImage;
  cardQuote?: string;
  cardButton?: AcfLink;
  cardTitle?: string;
  items?: DiferenciaisRentalItem[];
}
