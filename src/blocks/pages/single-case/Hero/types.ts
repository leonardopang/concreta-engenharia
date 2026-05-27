import type { AcfImage } from '../../../../utils';

export interface SingleCaseHeroProps {
  title: string;
  bgImage?: AcfImage | null;
  empresa?: string;
  ano?: string;
  servico?: string;
  local?: string;
}
