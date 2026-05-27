import type { AcfImage } from '../../../../utils';

export interface CaseIntroProps {
  title: string;
  description?: string;
  image1?: AcfImage | null;
  image2?: AcfImage | null;
}
