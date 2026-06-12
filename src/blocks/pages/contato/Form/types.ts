import type { AcfImage, AcfLink } from '../../../../utils';

export interface ContatoFormProps {
  title: string;
  titleForm?: string;
  description: string;
  phone?: string;
  email?: string;
  address?: string;
  hours?: string;
  mapImage?: AcfImage | null;
  mapUrl?: string;
  formHtml: string;
}
