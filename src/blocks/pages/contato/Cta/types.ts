import type { AcfImage, AcfLink } from '../../../../utils';

export interface ContatoCtaProps {
  background?: AcfImage | null;
  eyebrow?: string;
  title: string;
  description?: string;
  button?: AcfLink | null;
}
