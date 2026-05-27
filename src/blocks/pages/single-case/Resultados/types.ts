export interface FichaItem {
  label: string;
  value: string;
}

export interface SingleCaseResultadosProps {
  title?: string;
  description?: string;
  fichaTitle?: string;
  fichaItems?: FichaItem[];
}
