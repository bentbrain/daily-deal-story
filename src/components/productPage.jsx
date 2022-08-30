
import { FullLogo } from './fullLogo';
import { AbsoluteFill, Img, staticFile, Sequence } from 'remotion';


export const PdpLogo = () => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        transform: 'translateX(-15rem) translateY(-12rem) scale(0.7)',
      }}
    >
      <FullLogo />
    </div>
  );
};

export const ProductPage = ({ heroImg, brandImg, productTitle, salePriceDollars, salePriceCents, papDollars, papCents, endDate, timeZone, firstImg, heroX, heroY }) => {
  return <AbsoluteFill
    style={{
      background: 'white',
      overflow: 'hidden'
    }}
  >

    <div style={{ isolation: 'isolate' }} className="product">
      <Img style={{ position: 'absolute', top: '8rem', right: '2rem', width: '20rem', height: '20rem', objectFit: 'contain', objectPosition: 'center right' }} className='brand-logo' src={brandImg} />
      <Img style={{ position: 'absolute', inset: '0', objectFit: 'contain', objectPosition: 'center right', zIndex: -1, transform: `translateX(${heroX}px) translateY(${heroY}px)` }} className='brand-logo' src={heroImg} />
      <div className="product-info">
        <p className="productTitle">{productTitle}</p>
        <Img className='firstImg' src={firstImg} />
        <div className="redblock">
          <p class='salePrice'>${salePriceDollars}<span className='cents' >.{salePriceCents}</span></p>
          <div className="bottomText">
            <p>PRICE AFTER<br />PROMOTION</p>
            <p className='papPrice' >${papDollars}<span className='cents' >.{papCents}</span></p>
          </div>
        </div>
      </div>
    </div>
    <p className='disclaimer'>Hurry, offer ends 11:59PM ({timeZone}) {endDate} unless extended. All other offers are while stocks last. Prices, availability and shipping are correct at the time of send and are subject to change. </p>
    <Sequence from={10} >
      <PdpLogo />
    </Sequence>
  </AbsoluteFill>;
};
