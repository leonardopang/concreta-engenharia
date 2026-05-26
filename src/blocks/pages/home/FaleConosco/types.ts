import type { AcfImage, AcfLink } from '../../../../utils';

export interface FaleConoscoProps {
  background?: AcfImage | null;
  eyebrow?: string;
  title?: string;
  description?: string;
  titleButton?: string;
  button?: AcfLink | null;
}
