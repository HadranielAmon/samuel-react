import { memo, SVGProps } from 'react';

const IcRoundHomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.6061 19.4041V14.362H14.4849V19.4041C14.4849 19.9587 14.9212 20.4125 15.4545 20.4125H18.3636C18.897 20.4125 19.3333 19.9587 19.3333 19.4041V12.3452H20.9818C21.4279 12.3452 21.6412 11.7704 21.3018 11.4679L13.1952 3.87446C12.8267 3.5316 12.2642 3.5316 11.8958 3.87446L3.78909 11.4679C3.4594 11.7704 3.66303 12.3452 4.10909 12.3452H5.75758V19.4041C5.75758 19.9587 6.19394 20.4125 6.72728 20.4125H9.63637C10.1697 20.4125 10.6061 19.9587 10.6061 19.4041Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(IcRoundHomeIcon);
export { Memo as IcRoundHomeIcon };
