import type { AcfLink } from '../../../../utils';

export interface Categoria {
  slug: string;
  nome: string;
}

export interface Vaga {
  titulo: string;
  categoriaSlug: string;
  categoriaNome: string;
  descricao: string;
  localizacao: string;
  contratacao: string;
  link?: AcfLink | null;
}

export interface TrabalheVagasProps {
  title: string;
  categorias: Categoria[];
  vagas: Vaga[];
}
