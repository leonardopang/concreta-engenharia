import type { AcfImage } from '../../../../utils';

export interface CapacidadeItem {
  text: string;
}

export interface SingleSolucaoAtuacaoProps {
  title?: string;
  description?: string;
  photo?: AcfImage | null;
  items?: CapacidadeItem[];
}
