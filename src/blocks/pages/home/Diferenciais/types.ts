import type { AcfImage } from '../../../../utils';

export interface DiferenciaisItem {
  icone?: AcfImage | null;
  title?: string;
}

export interface DiferenciaisProps {
  background?: AcfImage | null;
  eyebrow?: string;
  title?: string;
  description?: string;
  imagem?: AcfImage | null;
  list?: DiferenciaisItem[];
}
