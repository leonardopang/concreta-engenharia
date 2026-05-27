import type { AcfImage, AcfLink } from '../../../../utils';

export interface FaleConoscoSobreProps {
  background?: AcfImage | null;
  eyebrow?: string;
  title?: string;
  description?: string;
  button?: AcfLink | null;
  button2?: AcfLink | null;
}
