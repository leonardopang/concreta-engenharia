import type { AcfImage } from '../../../../utils';

export interface CapacidadeItem {
  text: string;
}

export interface SolucaoCapacidadeProps {
  background?: AcfImage | null;
  title?: string;
  description?: string;
  image?: AcfImage | null;
  items?: CapacidadeItem[];
}
