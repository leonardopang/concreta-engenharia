import type { AcfImage, AcfLink } from '../../../../utils';

export interface TrabalheConoscoProps {
  background?: AcfImage | null;
  eyebrow?: string;
  title?: string;
  description?: string;
  button?: AcfLink | null;
  cardIcone?: AcfImage | null;
  cardDesc?: string;
  imagem?: AcfImage | null;
}
