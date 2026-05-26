import type { AcfImage, AcfLink } from '../../../../utils';

export interface SolucoesCard {
  icone?: AcfImage | null;
  title?: string;
  description?: string;
  button?: AcfLink | null;
}

export interface SolucoesProps {
  background?: AcfImage | null;
  title?: string;
  description?: string;
  cards?: SolucoesCard[];
}
