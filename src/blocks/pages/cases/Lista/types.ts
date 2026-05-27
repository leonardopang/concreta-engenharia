import type { AcfImage } from '../../../../utils';

export interface CasePost {
  title: string;
  url: string;
  thumbnail?: AcfImage | null;
  local?: string;
  servico?: string;
  resumo?: string;
}

export interface CasesListaProps {
  posts?: CasePost[];
}
