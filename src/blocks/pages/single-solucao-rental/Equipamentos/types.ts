import type { AcfLink } from '../../../../utils';

export interface EquipamentosItem {
  text: string;
}

export interface SingleSolucaoRentalEquipamentosProps {
  sectionTitle?: string;
  sectionDescription?: string;
  items?: EquipamentosItem[];
  cardQuote?: string;
  cardButton?: AcfLink;
}
