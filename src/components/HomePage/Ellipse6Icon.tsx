import { memo, SVGProps } from 'react';

const Ellipse6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 39 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={19.1818} cy={17.1899} rx={18.9091} ry={17.1431} fill='#D9D9D9' />
  </svg>
);
const Memo = memo(Ellipse6Icon);
export { Memo as Ellipse6Icon };