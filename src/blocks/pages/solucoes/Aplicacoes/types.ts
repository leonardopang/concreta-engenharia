import type { AcfImage, AcfLink } from '../../../../utils';

export interface SolucoesAplicacaoItem {
  text: string;
}

export interface SolucoesAplicacoesProps {
  title: string;
  description?: string;
  image?: AcfImage | null;
  items?: SolucoesAplicacaoItem[];
  bannerText?: string;
  bannerButton?: AcfLink | null;
}
