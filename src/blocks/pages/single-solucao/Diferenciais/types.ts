import type { AcfImage } from '../../../../utils';

export interface DiferenciaisItem {
  text: string;
}

export interface SingleSolucaoDiferenciaisProps {
  sectionTitle?: string;
  sectionDescription?: string;
  photo?: AcfImage;
  cardTitle?: string;
  items?: DiferenciaisItem[];
}
