import type { AcfLink } from '../../../../utils';

export interface Vaga {
  titulo: string;
  categoria: string;
  descricao: string;
  localizacao: string;
  contratacao: string;
  link?: AcfLink | null;
}

export interface TrabalheVagasProps {
  title: string;
  vagas: Vaga[];
}
