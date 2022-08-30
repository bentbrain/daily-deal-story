import { Composition } from 'remotion';
import { Test } from './Test';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.jsx <id> out/video.mp4
				id="Test"
				component={Test}
				durationInFrames={10 * 30}
				fps={30}
				width={1080}
				height={1920}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					brandImg: "https://assets.kogan.com/files/brand-logos/fortis-rev2.png?auto=webp&height=50&quality=90",
					firstImg: "https://gorgeous-selkie-5dd26b.netlify.app/assets/free-shipping-exclusive-prices.png",
					heroDimensions: "196.921875, -43.828125, 1",
					heroImg: "https://assets.kogan.com/files/product/2021/FS700CALTHA/FS700CALTHA_Feed.jpg?auto=webp&canvas=1080%2C1920&fit=bounds&height=1920&quality=75&width=1080",
					papCents: "",
					papDollars: "499",
					productTitle: "Fortis Mountian Bike",
					salePriceCents: "",
					salePriceDollars: "399",
					simpleDate: "(AEST) 30 August 2022"
				}}
			/>
		</>
	);
};
