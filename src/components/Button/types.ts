export interface ButtonProps {
  label: string;
  url?: string;
  target?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
}
