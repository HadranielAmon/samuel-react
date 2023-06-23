import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse4Icon } from './Ellipse4Icon';
import { Ellipse6Icon } from './Ellipse6Icon';
import { Ellipse7Icon } from './Ellipse7Icon';
import { Ellipse8Icon } from './Ellipse8Icon';
import { Ellipse9Icon } from './Ellipse9Icon';
import { Ellipse10Icon } from './Ellipse10Icon';
import { Ellipse12Icon } from './Ellipse12Icon';
import { Ellipse13Icon } from './Ellipse13Icon';
import { Ellipse14Icon } from './Ellipse14Icon';
import classes from './HomePage.module.css';
import { IcRoundHomeIcon } from './IcRoundHomeIcon';
import { MaterialSymbolsArrowLeftIcon } from './MaterialSymbolsArrowLeftIcon';
import { MaterialSymbolsArrowLeftIcon2 } from './MaterialSymbolsArrowLeftIcon2';
import { MaterialSymbolsArrowLeftIcon3 } from './MaterialSymbolsArrowLeftIcon3';
import { MaterialSymbolsArrowLeftIcon4 } from './MaterialSymbolsArrowLeftIcon4';
import { MaterialSymbolsArrowRightIcon } from './MaterialSymbolsArrowRightIcon';
import { MaterialSymbolsArrowRightIcon2 } from './MaterialSymbolsArrowRightIcon2';
import { MaterialSymbolsArrowRightIcon3 } from './MaterialSymbolsArrowRightIcon3';
import { MaterialSymbolsArrowRightIcon4 } from './MaterialSymbolsArrowRightIcon4';
import { MaterialSymbolsSearchIcon } from './MaterialSymbolsSearchIcon';
import { ProductCard } from './ProductCard/ProductCard';
import { TablerStarFilledIcon } from './TablerStarFilledIcon';
import { TablerStarFilledIcon2 } from './TablerStarFilledIcon2';
import { TablerStarFilledIcon3 } from './TablerStarFilledIcon3';
import { TablerStarFilledIcon4 } from './TablerStarFilledIcon4';
import { TablerStarFilledIcon5 } from './TablerStarFilledIcon5';
import { TablerStarFilledIcon6 } from './TablerStarFilledIcon6';
import { TablerStarFilledIcon7 } from './TablerStarFilledIcon7';
import { TablerStarFilledIcon8 } from './TablerStarFilledIcon8';
import { TablerStarFilledIcon9 } from './TablerStarFilledIcon9';
import { TablerStarFilledIcon10 } from './TablerStarFilledIcon10';
import { TablerStarFilledIcon11 } from './TablerStarFilledIcon11';
import { TablerStarFilledIcon12 } from './TablerStarFilledIcon12';
import { TablerStarFilledIcon13 } from './TablerStarFilledIcon13';
import { TablerStarFilledIcon14 } from './TablerStarFilledIcon14';
import { TablerStarFilledIcon15 } from './TablerStarFilledIcon15';
import { TablerStarFilledIcon16 } from './TablerStarFilledIcon16';
import { TablerStarFilledIcon17 } from './TablerStarFilledIcon17';
import { TablerStarFilledIcon18 } from './TablerStarFilledIcon18';
import { TablerStarFilledIcon19 } from './TablerStarFilledIcon19';
import { TablerStarFilledIcon20 } from './TablerStarFilledIcon20';
import { TablerStarFilledIcon21 } from './TablerStarFilledIcon21';
import { TablerStarFilledIcon22 } from './TablerStarFilledIcon22';
import { TablerStarFilledIcon23 } from './TablerStarFilledIcon23';
import { TablerStarFilledIcon24 } from './TablerStarFilledIcon24';
import { TablerStarFilledIcon25 } from './TablerStarFilledIcon25';
import { TablerStarFilledIcon26 } from './TablerStarFilledIcon26';
import { TablerStarFilledIcon27 } from './TablerStarFilledIcon27';
import { TablerStarFilledIcon28 } from './TablerStarFilledIcon28';
import { TablerStarFilledIcon29 } from './TablerStarFilledIcon29';
import { TablerStarFilledIcon30 } from './TablerStarFilledIcon30';
import { TablerStarFilledIcon31 } from './TablerStarFilledIcon31';
import { TablerStarFilledIcon32 } from './TablerStarFilledIcon32';
import { TablerStarFilledIcon33 } from './TablerStarFilledIcon33';
import { TablerStarFilledIcon34 } from './TablerStarFilledIcon34';
import { TablerStarFilledIcon35 } from './TablerStarFilledIcon35';
import { TablerStarFilledIcon36 } from './TablerStarFilledIcon36';
import { TablerStarFilledIcon37 } from './TablerStarFilledIcon37';
import { TablerStarFilledIcon38 } from './TablerStarFilledIcon38';
import { TablerStarFilledIcon39 } from './TablerStarFilledIcon39';
import { TablerStarFilledIcon40 } from './TablerStarFilledIcon40';
import { TablerStarFilledIcon41 } from './TablerStarFilledIcon41';
import { TablerStarFilledIcon42 } from './TablerStarFilledIcon42';
import { TablerStarFilledIcon43 } from './TablerStarFilledIcon43';
import { TablerStarFilledIcon44 } from './TablerStarFilledIcon44';
import { TablerStarFilledIcon45 } from './TablerStarFilledIcon45';
import { TablerStarFilledIcon46 } from './TablerStarFilledIcon46';
import { TablerStarFilledIcon47 } from './TablerStarFilledIcon47';
import { TablerStarFilledIcon48 } from './TablerStarFilledIcon48';
import { TablerStarFilledIcon49 } from './TablerStarFilledIcon49';
import { TablerStarFilledIcon50 } from './TablerStarFilledIcon50';
import { TablerStarFilledIcon51 } from './TablerStarFilledIcon51';
import { TablerStarFilledIcon52 } from './TablerStarFilledIcon52';
import { TablerStarFilledIcon53 } from './TablerStarFilledIcon53';
import { TablerStarFilledIcon54 } from './TablerStarFilledIcon54';
import { TablerStarFilledIcon55 } from './TablerStarFilledIcon55';
import { TablerStarFilledIcon56 } from './TablerStarFilledIcon56';
import { TablerStarFilledIcon57 } from './TablerStarFilledIcon57';
import { TablerStarFilledIcon58 } from './TablerStarFilledIcon58';
import { TablerStarFilledIcon59 } from './TablerStarFilledIcon59';
import { TablerStarFilledIcon60 } from './TablerStarFilledIcon60';
import { TablerStarFilledIcon61 } from './TablerStarFilledIcon61';
import { TablerStarFilledIcon62 } from './TablerStarFilledIcon62';
import { TablerStarFilledIcon63 } from './TablerStarFilledIcon63';
import { TablerStarFilledIcon64 } from './TablerStarFilledIcon64';
import { TablerStarFilledIcon65 } from './TablerStarFilledIcon65';
import { TablerStarFilledIcon66 } from './TablerStarFilledIcon66';
import { TablerStarFilledIcon67 } from './TablerStarFilledIcon67';
import { TablerStarFilledIcon68 } from './TablerStarFilledIcon68';
import { TablerStarFilledIcon69 } from './TablerStarFilledIcon69';
import { TablerStarFilledIcon70 } from './TablerStarFilledIcon70';

interface Props {
  className?: string;
}
/* @figmaId 5:2 */
export const HomePage: FC<Props> = memo(function HomePage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.materialSymbolsArrowRight}>
        <MaterialSymbolsArrowRightIcon className={classes.icon71} />
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.searchProductsBrands}>Search products &amp; brands</div>
      <div className={classes.adom}>Adom</div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.ellipse13}>
        <Ellipse13Icon className={classes.icon72} />
      </div>
      <div className={classes.text}>
        <div className={classes.textBlock}>
          <p></p>
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
        <div className={classes.textBlock3}>
          <p></p>
        </div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
        <div className={classes.textBlock5}>
          <p></p>
        </div>
      </div>
      <div className={classes.loremLpsumIsSimplyDummyTextOfT}>
        <div className={classes.textBlock6}>Lorem lpsum is simply dummy text of the printing and type-</div>
        <div className={classes.textBlock7}>setting industry. Lorem lpsumm has been the industry’s standard</div>
        <div className={classes.textBlock8}>dummy textt ever since the 1500s.</div>
      </div>
      <div className={classes.rectangle5}></div>
      <div className={classes.frame2}>
        <ProductCard
          classes={{ image: classes.image }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon className={classes.icon} />,
            tablerStarFilled2: <TablerStarFilledIcon2 className={classes.icon2} />,
            tablerStarFilled3: <TablerStarFilledIcon3 className={classes.icon3} />,
            tablerStarFilled4: <TablerStarFilledIcon4 className={classes.icon4} />,
            tablerStarFilled5: <TablerStarFilledIcon5 className={classes.icon5} />,
          }}
          text={{
            title: <div className={classes.title}>HP EliteBook 1040</div>,
            aLongDescriptionMustClipWhenIt: (
              <div className={classes.aLongDescriptionMustClipWhenIt}>
                G4 - 7th Gen. Intel Core i7 - 512GB SSD - 16GB RAM - 8GB Total Graphics - Keyboard Light - Touchscreen -
                HDMI.{' '}
              </div>
            ),
            price: <div className={classes.price}># 325,000</div>,
          }}
        />
        <ProductCard
          classes={{ image: classes.image2 }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon6 className={classes.icon6} />,
            tablerStarFilled2: <TablerStarFilledIcon7 className={classes.icon7} />,
            tablerStarFilled3: <TablerStarFilledIcon8 className={classes.icon8} />,
            tablerStarFilled4: <TablerStarFilledIcon9 className={classes.icon9} />,
            tablerStarFilled5: <TablerStarFilledIcon10 className={classes.icon10} />,
          }}
          text={{
            title: <div className={classes.title2}>Oraimo Powerbank </div>,
            aLongDescriptionMustClipWhenIt: <div className={classes.aLongDescriptionMustClipWhenIt2}>30000mAH</div>,
            price: <div className={classes.price2}># 17,840</div>,
          }}
        />
        <ProductCard
          classes={{ image: classes.image3 }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon11 className={classes.icon11} />,
            tablerStarFilled2: <TablerStarFilledIcon12 className={classes.icon12} />,
            tablerStarFilled3: <TablerStarFilledIcon13 className={classes.icon13} />,
            tablerStarFilled4: <TablerStarFilledIcon14 className={classes.icon14} />,
            tablerStarFilled5: <TablerStarFilledIcon15 className={classes.icon15} />,
          }}
          text={{
            title: <div className={classes.title3}>Samsung A13 </div>,
            aLongDescriptionMustClipWhenIt: (
              <div className={classes.aLongDescriptionMustClipWhenIt3}>4GB RAM 128gB</div>
            ),
            price: <div className={classes.price3}># 155,500</div>,
          }}
        />
        <ProductCard
          classes={{ image: classes.image4 }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon16 className={classes.icon16} />,
            tablerStarFilled2: <TablerStarFilledIcon17 className={classes.icon17} />,
            tablerStarFilled3: <TablerStarFilledIcon18 className={classes.icon18} />,
            tablerStarFilled4: <TablerStarFilledIcon19 className={classes.icon19} />,
            tablerStarFilled5: <TablerStarFilledIcon20 className={classes.icon20} />,
          }}
          text={{
            title: <div className={classes.title4}>Camry Muscle</div>,
            aLongDescriptionMustClipWhenIt: <div className={classes.aLongDescriptionMustClipWhenIt4}>2018 Model</div>,
            price: <div className={classes.price4}># 18,000,000</div>,
          }}
        />
        <ProductCard
          classes={{ image: classes.image5 }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon21 className={classes.icon21} />,
            tablerStarFilled2: <TablerStarFilledIcon22 className={classes.icon22} />,
            tablerStarFilled3: <TablerStarFilledIcon23 className={classes.icon23} />,
            tablerStarFilled4: <TablerStarFilledIcon24 className={classes.icon24} />,
            tablerStarFilled5: <TablerStarFilledIcon25 className={classes.icon25} />,
          }}
          text={{
            title: <div className={classes.title5}>Apple Iphone 12 Pro max</div>,
            aLongDescriptionMustClipWhenIt: (
              <div className={classes.aLongDescriptionMustClipWhenIt5}>
                Mini Digital Camera Canon 1100D Digital Camera +18 -...
              </div>
            ),
            price: <div className={classes.price5}># 799,500</div>,
          }}
        />
      </div>
      <div className={classes.frame3}>
        <ProductCard
          classes={{ image: classes.image6 }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon26 className={classes.icon26} />,
            tablerStarFilled2: <TablerStarFilledIcon27 className={classes.icon27} />,
            tablerStarFilled3: <TablerStarFilledIcon28 className={classes.icon28} />,
            tablerStarFilled4: <TablerStarFilledIcon29 className={classes.icon29} />,
            tablerStarFilled5: <TablerStarFilledIcon30 className={classes.icon30} />,
          }}
          text={{
            title: <div className={classes.title6}>Hp 15 </div>,
            aLongDescriptionMustClipWhenIt: (
              <div className={classes.aLongDescriptionMustClipWhenIt6}>
                intel celeron N4020 8GB 1TB HDD 15.6” Wins 10 + LED L...
              </div>
            ),
            price: <div className={classes.price6}># 197,000</div>,
          }}
        />
        <ProductCard
          classes={{ image: classes.image7 }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon31 className={classes.icon31} />,
            tablerStarFilled2: <TablerStarFilledIcon32 className={classes.icon32} />,
            tablerStarFilled3: <TablerStarFilledIcon33 className={classes.icon33} />,
            tablerStarFilled4: <TablerStarFilledIcon34 className={classes.icon34} />,
            tablerStarFilled5: <TablerStarFilledIcon35 className={classes.icon35} />,
          }}
          text={{
            title: <div className={classes.title7}>Infinix Hot 10 </div>,
            aLongDescriptionMustClipWhenIt: (
              <div className={classes.aLongDescriptionMustClipWhenIt7}>3GB RAM, 64GB storage space</div>
            ),
            price: <div className={classes.price7}># 87,000</div>,
          }}
        />
        <ProductCard
          classes={{ image: classes.image8 }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon36 className={classes.icon36} />,
            tablerStarFilled2: <TablerStarFilledIcon37 className={classes.icon37} />,
            tablerStarFilled3: <TablerStarFilledIcon38 className={classes.icon38} />,
            tablerStarFilled4: <TablerStarFilledIcon39 className={classes.icon39} />,
            tablerStarFilled5: <TablerStarFilledIcon40 className={classes.icon40} />,
          }}
          text={{
            title: <div className={classes.title8}>HP 348</div>,
            aLongDescriptionMustClipWhenIt: (
              <div className={classes.aLongDescriptionMustClipWhenIt8}>
                G4 - 7th Gen. Intel Core i5 - 500GB HDD - 8GB RAM - 4...
              </div>
            ),
            price: <div className={classes.price8}># 160,000</div>,
          }}
        />
        <ProductCard
          classes={{ image: classes.image9 }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon41 className={classes.icon41} />,
            tablerStarFilled2: <TablerStarFilledIcon42 className={classes.icon42} />,
            tablerStarFilled3: <TablerStarFilledIcon43 className={classes.icon43} />,
            tablerStarFilled4: <TablerStarFilledIcon44 className={classes.icon44} />,
            tablerStarFilled5: <TablerStarFilledIcon45 className={classes.icon45} />,
          }}
          text={{
            title: <div className={classes.title9}>Apple ipad </div>,
            aLongDescriptionMustClipWhenIt: (
              <div className={classes.aLongDescriptionMustClipWhenIt9}>
                G4 - 7th Gen. Intel Core i5 - 500GB HDD - 8GB RAM - 4...
              </div>
            ),
            price: <div className={classes.price9}># 990,000</div>,
          }}
        />
        <ProductCard
          classes={{ image: classes.image10 }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon46 className={classes.icon46} />,
            tablerStarFilled2: <TablerStarFilledIcon47 className={classes.icon47} />,
            tablerStarFilled3: <TablerStarFilledIcon48 className={classes.icon48} />,
            tablerStarFilled4: <TablerStarFilledIcon49 className={classes.icon49} />,
            tablerStarFilled5: <TablerStarFilledIcon50 className={classes.icon50} />,
          }}
          text={{
            title: <div className={classes.title10}>Acer Aspire </div>,
            aLongDescriptionMustClipWhenIt: (
              <div className={classes.aLongDescriptionMustClipWhenIt10}>
                G4 - 7th Gen. Intel Core i5 - 500GB HDD - 8GB RAM - 4...
              </div>
            ),
            price: <div className={classes.price10}># 343,000</div>,
          }}
        />
      </div>
      <div className={classes.rectangle8}></div>
      <div className={classes.copyright2023AllRightsReserved}>Copyright 2023. All Rights Reserved</div>
      <div className={classes.dealsOfTheDay}>
        <div className={classes.textBlock9}>Deals of</div>
        <div className={classes.textBlock10}>the Day</div>
      </div>
      <div className={classes.frame4}>
        <ProductCard
          classes={{ image: classes.image11 }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon51 className={classes.icon51} />,
            tablerStarFilled2: <TablerStarFilledIcon52 className={classes.icon52} />,
            tablerStarFilled3: <TablerStarFilledIcon53 className={classes.icon53} />,
            tablerStarFilled4: <TablerStarFilledIcon54 className={classes.icon54} />,
            tablerStarFilled5: <TablerStarFilledIcon55 className={classes.icon55} />,
          }}
          text={{
            title: <div className={classes.title11}>Oraimo FreedPods Pro</div>,
            aLongDescriptionMustClipWhenIt: (
              <div className={classes.aLongDescriptionMustClipWhenIt11}>
                G4 - 7th Gen. Intel Core i5 - 500GB HDD - 8GB RAM - 4...
              </div>
            ),
            price: <div className={classes.price11}># 47,000</div>,
          }}
        />
        <ProductCard
          classes={{ image: classes.image12 }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon56 className={classes.icon56} />,
            tablerStarFilled2: <TablerStarFilledIcon57 className={classes.icon57} />,
            tablerStarFilled3: <TablerStarFilledIcon58 className={classes.icon58} />,
            tablerStarFilled4: <TablerStarFilledIcon59 className={classes.icon59} />,
            tablerStarFilled5: <TablerStarFilledIcon60 className={classes.icon60} />,
          }}
          text={{
            title: <div className={classes.title12}>Apple ipad</div>,
            aLongDescriptionMustClipWhenIt: (
              <div className={classes.aLongDescriptionMustClipWhenIt12}>
                9th Gen 10.2 Wi-Fi Cellular - 256GB - Space Grey
              </div>
            ),
            price: <div className={classes.price12}># 500,000</div>,
          }}
        />
        <ProductCard
          classes={{ image: classes.image13 }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon61 className={classes.icon61} />,
            tablerStarFilled2: <TablerStarFilledIcon62 className={classes.icon62} />,
            tablerStarFilled3: <TablerStarFilledIcon63 className={classes.icon63} />,
            tablerStarFilled4: <TablerStarFilledIcon64 className={classes.icon64} />,
            tablerStarFilled5: <TablerStarFilledIcon65 className={classes.icon65} />,
          }}
          text={{
            title: <div className={classes.title13}>Canon Camera</div>,
            aLongDescriptionMustClipWhenIt: (
              <div className={classes.aLongDescriptionMustClipWhenIt13}>
                Mini Digital Camera Canon 1100D Digital Camera +18 -...
              </div>
            ),
            price: <div className={classes.price13}># 160,000</div>,
          }}
        />
        <ProductCard
          classes={{ image: classes.image14 }}
          swap={{
            tablerStarFilled: <TablerStarFilledIcon66 className={classes.icon66} />,
            tablerStarFilled2: <TablerStarFilledIcon67 className={classes.icon67} />,
            tablerStarFilled3: <TablerStarFilledIcon68 className={classes.icon68} />,
            tablerStarFilled4: <TablerStarFilledIcon69 className={classes.icon69} />,
            tablerStarFilled5: <TablerStarFilledIcon70 className={classes.icon70} />,
          }}
          text={{
            title: <div className={classes.title14}>Chupez Powerbank</div>,
            aLongDescriptionMustClipWhenIt: (
              <div className={classes.aLongDescriptionMustClipWhenIt14}>
                Mini Digital Camera Canon 1100D Digital Camera +18 -...
              </div>
            ),
            price: <div className={classes.price14}># 17,000</div>,
          }}
        />
      </div>
      <div className={classes.ellipse14}>
        <Ellipse14Icon className={classes.icon73} />
      </div>
      <div className={classes.ellipse10}>
        <Ellipse10Icon className={classes.icon74} />
      </div>
      <div className={classes.rectangle6}></div>
      <div className={classes.oxfordBrogueBrownShoe}>
        <div className={classes.textBlock11}>Oxford brogue</div>
        <div className={classes.textBlock12}>brown shoe</div>
      </div>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes._3324}>#3,324</div>
      <div className={classes.alRehabChocoMuskPerfume}>
        <div className={classes.textBlock13}>AlRehab,choco </div>
        <div className={classes.textBlock14}>Musk Perfume</div>
      </div>
      <div className={classes.rectangle9}></div>
      <div className={classes.sellOnShopioAdvertiseOnShopioM}>
        <div className={classes.textBlock15}>Sell on shopio</div>
        <div className={classes.textBlock16}>
          <p></p>
        </div>
        <div className={classes.textBlock17}>Advertise on shopio</div>
        <div className={classes.textBlock18}>
          <p></p>
        </div>
        <div className={classes.textBlock19}>Media Enquiries</div>
        <div className={classes.textBlock20}>
          <p></p>
        </div>
        <div className={classes.textBlock21}>Be an Affliate</div>
        <div className={classes.textBlock22}>
          <p></p>
        </div>
        <div className={classes.textBlock23}>Deaal of the Day</div>
      </div>
      <div className={classes.sUBSCRIBE}>SUBSCRIBE</div>
      <div className={classes.downloadApp}>Download App</div>
      <div className={classes.signUpLogin}>Sign up / Login</div>
      <div className={classes.rectangle13}></div>
      <div className={classes.buyNow}>Buy Now</div>
      <div className={classes.rectangle16}></div>
      <div className={classes.rectangle17}></div>
      <div className={classes.jBL}>JBL</div>
      <div className={classes.p07Headphone}>p07 headphone</div>
      <div className={classes.bestSelling}>Best selling</div>
      <div className={classes.rectangle18}></div>
      <div className={classes.rectangle19}></div>
      <div className={classes.rectangle20}></div>
      <div className={classes.rectangle21}></div>
      <div className={classes.rectangle22}></div>
      <div className={classes.loremLpsumIsSimplyDummyTextOfT2}>
        <div className={classes.textBlock24}>Lorem lpsum is simply dummy</div>
        <div className={classes.textBlock25}>text of the printing and types-</div>
        <div className={classes.textBlock26}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>etting industry</span>
            <span className={classes.label2}> </span>
          </p>
        </div>
      </div>
      <div className={classes.privacyPolicyTermsOfSaleTermsO}>
        <div className={classes.textBlock27}>Privacy Policy</div>
        <div className={classes.textBlock28}>
          <p></p>
        </div>
        <div className={classes.textBlock29}>Terms of sale</div>
        <div className={classes.textBlock30}>
          <p></p>
        </div>
        <div className={classes.textBlock31}>Terms of use</div>
        <div className={classes.textBlock32}>
          <p></p>
        </div>
        <div className={classes.textBlock33}>Report Abuse</div>
      </div>
      <div className={classes.pOLICYINFO}>POLICY INFO</div>
      <div className={classes.aDOM}>ADOM</div>
      <div className={classes.cOMPANY}>COMPANY</div>
      <div className={classes.aboutUsBlogSitemapFAQContactUs}>
        <div className={classes.textBlock34}>About Us</div>
        <div className={classes.textBlock35}>
          <p></p>
        </div>
        <div className={classes.textBlock36}>Blog</div>
        <div className={classes.textBlock37}>
          <p></p>
        </div>
        <div className={classes.textBlock38}>Sitemap</div>
        <div className={classes.textBlock39}>
          <p></p>
        </div>
        <div className={classes.textBlock40}>FAQ</div>
        <div className={classes.textBlock41}>
          <p></p>
        </div>
        <div className={classes.textBlock42}>Contact Us</div>
      </div>
      <div className={classes.bUSINESS}>BUSINESS</div>
      <div className={classes.rectangle24}></div>
      <div className={classes.yourEmailAdress}>Your email adress</div>
      <div className={classes.materialSymbolsSearch}>
        <MaterialSymbolsSearchIcon className={classes.icon75} />
      </div>
      <div className={classes.rectangle25}></div>
      <div className={classes.submit}>Submit</div>
      <div className={classes.popularProjects}>Popular Projects</div>
      <div className={classes.featuredProjects}>Featured Projects</div>
      <div className={classes._2340}>
        <div className={classes.textBlock43}>
          <p></p>
        </div>
        <div className={classes.textBlock44}>02:34:00</div>
      </div>
      <div className={classes.ellipse4}>
        <Ellipse4Icon className={classes.icon76} />
      </div>
      <div className={classes.ellipse6}>
        <Ellipse6Icon className={classes.icon77} />
      </div>
      <div className={classes.ellipse7}>
        <Ellipse7Icon className={classes.icon78} />
      </div>
      <div className={classes.ellipse8}>
        <Ellipse8Icon className={classes.icon79} />
      </div>
      <div className={classes.ellipse9}>
        <Ellipse9Icon className={classes.icon80} />
      </div>
      <div className={classes.ellipse12}>
        <Ellipse12Icon className={classes.icon81} />
      </div>
      <div className={classes.materialSymbolsArrowRight2}>
        <MaterialSymbolsArrowRightIcon2 className={classes.icon82} />
      </div>
      <div className={classes.materialSymbolsArrowLeft}>
        <MaterialSymbolsArrowLeftIcon className={classes.icon83} />
      </div>
      <div className={classes.materialSymbolsArrowLeft2}>
        <MaterialSymbolsArrowLeftIcon2 className={classes.icon84} />
      </div>
      <div className={classes.materialSymbolsArrowLeft3}>
        <MaterialSymbolsArrowLeftIcon3 className={classes.icon85} />
      </div>
      <div className={classes.materialSymbolsArrowRight3}>
        <MaterialSymbolsArrowRightIcon3 className={classes.icon86} />
      </div>
      <div className={classes.materialSymbolsArrowRight4}>
        <MaterialSymbolsArrowRightIcon4 className={classes.icon87} />
      </div>
      <div className={classes.materialSymbolsArrowLeft4}>
        <MaterialSymbolsArrowLeftIcon4 className={classes.icon88} />
      </div>
      <div className={classes.unnamed}>&gt;</div>
      <div className={classes.icRoundHome}>
        <IcRoundHomeIcon className={classes.icon89} />
      </div>
      <div className={classes.surfaceStudio}>Surface Studio</div>
    </div>
  );
});
