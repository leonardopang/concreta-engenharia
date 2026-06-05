import type { AcfLink, AcfImage } from '../../../../utils';

export interface TrabalheCurriculoProps {
  title: string;
  description: string;
  formHtml: string;
  ctaButton?: AcfLink | null;
  bgImage?: AcfImage | null;
}
