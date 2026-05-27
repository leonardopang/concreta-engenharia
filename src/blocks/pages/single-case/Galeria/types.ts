import type { AcfImage } from '../../../../utils';

export interface GaleriaItem {
  image?: AcfImage | null;
}

export interface SingleCaseGaleriaProps {
  images?: GaleriaItem[];
}
