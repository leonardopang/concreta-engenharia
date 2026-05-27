import type { AcfImage, AcfLink } from '../../../../utils';

export interface TrabalheCarreiraProps {
  imagem?: AcfImage | null;
  title: string;
  description: string;
  button?: AcfLink | null;
}
