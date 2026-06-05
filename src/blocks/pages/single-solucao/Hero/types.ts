import type { AcfImage, AcfLink } from '../../../../utils';

export interface SingleSolucaoHeroProps {
  title?: string;
  subtitle?: string;
  bgImage?: AcfImage;
  description?: string;
  button?: AcfLink;
  button2?: AcfLink; // campo ACF: button_2
}
