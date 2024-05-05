import { CSSProperties, SVGProps } from 'react';

export type IconProps = {
  fill?: string | undefined;
  size?: number;
  className?: string;
  style?: CSSProperties;
} & SVGProps<SVGSVGElement>;