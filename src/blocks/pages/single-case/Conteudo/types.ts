import type { AcfImage } from '../../../../utils';

export interface ConteudoSection {
  eyebrow?: string;
  title?: string;
  description?: string;
  image?: AcfImage | null;
  layout?: 'text_right' | 'text_left';
}

export interface SingleCaseConteudoProps {
  sections?: ConteudoSection[];
}
