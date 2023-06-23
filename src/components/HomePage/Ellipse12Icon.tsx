import { memo, SVGProps } from 'react';

const Ellipse12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={22.303} cy={15.8728} rx={21.8182} ry={15.1263} fill='#D9D9D9' />
  </svg>
);
const Memo = memo(Ellipse12Icon);
export { Memo as Ellipse12Icon };
