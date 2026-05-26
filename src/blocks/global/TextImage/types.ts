import type { AcfImage, AcfLink } from '../../../utils';

export interface TextImageProps {
  background?: AcfImage | null;
  imagem?: AcfImage | null;
  title?: string;
  text?: string;
  button?: AcfLink | null;
}
