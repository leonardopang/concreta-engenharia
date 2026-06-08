import type { AcfLink } from '../../../../utils';

export interface ContatoCtaProps {
  patternUrl?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  button?: AcfLink | null;
}
