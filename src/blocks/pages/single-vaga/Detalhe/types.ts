export interface CheckItem {
  item: string;
}

export interface SingleVagaDetalheProps {
  titulo: string;
  categoria?: string;
  descricao?: string;
  localizacao?: string;
  contratacao?: string;
  sobre?: string;
  responsabilidades?: CheckItem[];
  requisitos?: CheckItem[];
  diferenciais?: CheckItem[];
  beneficios?: CheckItem[];
}
