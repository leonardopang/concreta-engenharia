import type { AcfLink } from '../../../../utils';

export interface CaseHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  button?: AcfLink | null;
  button2?: AcfLink | null;
}
