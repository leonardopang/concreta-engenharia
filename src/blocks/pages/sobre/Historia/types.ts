import type { AcfImage, AcfLink } from '../../../../utils';

export interface HistoriaLogo {
  logo?: AcfImage | null;
}

export interface HistoriaProps {
  background?: AcfImage | null;
  eyebrow?: string;
  title?: string;
  description?: string;
  logos?: HistoriaLogo[];
  cardText?: string;
  cardButton?: AcfLink | null;
}
