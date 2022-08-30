import {
    AbsoluteFill,
    Loop,
    useCurrentFrame,
    useVideoConfig,
    spring,
    Sequence,
    interpolate,
    Easing,
    Img,
    staticFile
} from 'remotion';
import { FullLogo } from './components/fullLogo';
import { ProductPage } from './components/productPage';
import './style.css'

export const Test = (props = { heroImg, brandImg, productTitle, salePriceDollars, salePriceCents, papDollars, papCents, endDate, timeZone, firstImg }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const foldUp = interpolate(frame, [0, 235, 250], [99.5, 99.5, 0], {
        easing: Easing.bezier(0.73, 0.02, 0.3, 0.98),
        extrapolateRight: 'clamp',
    });

    const introScale = interpolate(frame, [0, 65, 90], [1, 1, 100], {
        easing: Easing.bezier(0.73, 0.02, 0.3, 0.98),
        extrapolateRight: 'clamp',
    });

    const fadeOpacity = interpolate(frame, [0, 65, 80], [1, 1, 0], {
        easing: Easing.bezier(0.73, 0.02, 0.3, 0.98),
        extrapolateRight: 'clamp',
    });

    const pdpSwipe = interpolate(frame, [0, 220, 230, 245], [0, 0, -3, 100], {
        easing: Easing.bezier(0.73, 0.02, 0.3, 0.98),
        extrapolateRight: 'clamp',
    });

    return (
        <AbsoluteFill
            style={{
                background: 'white',
                padding: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >

            <Sequence from={235}>
                <AbsoluteFill style={{
                    perspective: '800px'
                }}>
                    <Img style={{
                        width: '40rem',
                        height: 'max-content',
                        objectFit: 'contain',
                        margin: 'auto',
                        transformOrigin: 'bottom center',
                        transform: `rotateX(${foldUp}deg)`,
                    }} src={staticFile('assets/logo-stacked.png')} />
                </AbsoluteFill>
            </Sequence>

            <Sequence from={65}>
                <AbsoluteFill style={{
                    transform: `translateY(${pdpSwipe}%)`
                }}>
                    <ProductPage {...props} />
                </AbsoluteFill>
            </Sequence>

            <Sequence from={0} to={80}>
                <div
                    style={{
                        opacity: fadeOpacity,
                        background: 'white',
                        inset: 0,
                        position: 'absolute'
                    }}
                >
                    <FullLogo positionY={30} introScale={introScale} intro={true} />
                </div>
            </Sequence>


        </AbsoluteFill>
    );
};
