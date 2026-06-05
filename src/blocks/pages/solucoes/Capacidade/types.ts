import type { AcfImage } from '../../../../utils';

export interface SolucoesCapacidadeItem {
  text: string;
}

export interface SolucoesCapacidadeProps {
  title: string;
  description?: string;
  image?: AcfImage | null;
  items?: SolucoesCapacidadeItem[];
}
