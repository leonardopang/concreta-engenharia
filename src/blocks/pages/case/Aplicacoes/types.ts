import type { AcfImage, AcfLink } from '../../../../utils';

export interface AplicacaoItem {
  text: string;
}

export interface CaseAplicacoesProps {
  title: string;
  description?: string;
  image?: AcfImage | null;
  items?: AplicacaoItem[];
  bannerText?: string;
  bannerButton?: AcfLink | null;
}
