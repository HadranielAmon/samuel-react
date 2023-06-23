import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ProductCard.module.css';
import { TablerStarFilledIcon } from './TablerStarFilledIcon';
import { TablerStarFilledIcon2 } from './TablerStarFilledIcon2';
import { TablerStarFilledIcon3 } from './TablerStarFilledIcon3';
import { TablerStarFilledIcon4 } from './TablerStarFilledIcon4';
import { TablerStarFilledIcon5 } from './TablerStarFilledIcon5';

interface Props {
  className?: string;
  classes?: {
    image?: string;
  };
  swap?: {
    tablerStarFilled?: ReactNode;
    tablerStarFilled2?: ReactNode;
    tablerStarFilled3?: ReactNode;
    tablerStarFilled4?: ReactNode;
    tablerStarFilled5?: ReactNode;
  };
  text?: {
    title?: ReactNode;
    aLongDescriptionMustClipWhenIt?: ReactNode;
    price?: ReactNode;
  };
}
/* @figmaId 6:64 */
export const ProductCard: FC<Props> = memo(function ProductCard(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.background}></div>
      <div className={`${props.classes?.image || ''} ${classes.image}`}></div>
      {props.text?.title != null ? props.text?.title : <div className={classes.title}>Title </div>}
      {props.text?.aLongDescriptionMustClipWhenIt != null ? (
        props.text?.aLongDescriptionMustClipWhenIt
      ) : (
        <div className={classes.aLongDescriptionMustClipWhenIt}>
          A long description must clip when it is more than two lines
        </div>
      )}
      <div className={classes.tablerStarFilled}>
        {props.swap?.tablerStarFilled || <TablerStarFilledIcon className={classes.icon} />}
      </div>
      <div className={classes.tablerStarFilled2}>
        {props.swap?.tablerStarFilled2 || <TablerStarFilledIcon2 className={classes.icon2} />}
      </div>
      <div className={classes.tablerStarFilled3}>
        {props.swap?.tablerStarFilled3 || <TablerStarFilledIcon3 className={classes.icon3} />}
      </div>
      <div className={classes.tablerStarFilled4}>
        {props.swap?.tablerStarFilled4 || <TablerStarFilledIcon4 className={classes.icon4} />}
      </div>
      <div className={classes.tablerStarFilled5}>
        {props.swap?.tablerStarFilled5 || <TablerStarFilledIcon5 className={classes.icon5} />}
      </div>
      {props.text?.price != null ? props.text?.price : <div className={classes.price}># 50,000</div>}
    </div>
  );
});
