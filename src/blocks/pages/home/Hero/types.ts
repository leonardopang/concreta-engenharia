import type { AcfImage, AcfLink } from '../../../../utils';

export interface HeroProps {
  title?: string;
  description?: string;
  bgImage?: AcfImage | null;
  image?: AcfImage | null;
  cta?: AcfLink | null;
  cta2?: AcfLink | null;
}
