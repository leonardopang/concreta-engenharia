import type { AcfImage } from '../../../../utils';

export interface QuemSomosImagem {
  imagem?: AcfImage | null;
}

export interface QuemSomosProps {
  background?: AcfImage | null;
  imagens?: QuemSomosImagem[];
  title?: string;
  text?: string;
}
