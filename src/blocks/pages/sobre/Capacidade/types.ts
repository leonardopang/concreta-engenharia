import type { AcfImage } from '../../../../utils';

export interface CapacidadeItem {
  icone?: AcfImage | null;
  title?: string;
}

export interface CapacidadeProps {
  background?: AcfImage | null;
  eyebrow?: string;
  title?: string;
  description?: string;
  imagem?: AcfImage | null;
  items?: CapacidadeItem[];
}
