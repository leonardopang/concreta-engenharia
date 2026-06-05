import type { AcfImage, AcfLink } from '../../../../utils';

export interface SolucoesHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: AcfImage | null;
  description?: string;
  button?: AcfLink | null;
  button2?: AcfLink | null;
}
