import { memo, SVGProps } from 'react';

const Ellipse7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 39 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={19.5757} cy={18.1132} rx={18.9091} ry={17.1431} fill='#D9D9D9' />
  </svg>
);
const Memo = memo(Ellipse7Icon);
export { Memo as Ellipse7Icon };
