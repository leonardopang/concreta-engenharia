import type { AcfImage, AcfLink } from '../../../../utils';

export interface CaseItem {
  title?: string;
  url?: string;
  image?: AcfImage | null;
  localDaObra?: string;
  servicoExecutado?: string;
}

export interface CasesProps {
  background?: AcfImage | null;
  eyebrow?: string;
  title?: string;
  description?: string;
  button?: AcfLink | null;
  cases?: CaseItem[];
}
