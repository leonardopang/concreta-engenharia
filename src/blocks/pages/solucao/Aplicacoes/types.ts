import type { AcfImage, AcfLink } from '../../../../utils';

export interface AplicacoesCard {
  text: string;
}

export interface SolucaoAplicacoesProps {
  background?: AcfImage | null;
  title?: string;
  description?: string;
  image?: AcfImage | null;
  cards?: AplicacoesCard[];
  bannerText?: string;
  bannerButton?: AcfLink | null;
}
