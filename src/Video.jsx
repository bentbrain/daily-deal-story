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
					productTitle: 'Test Product',
				}}
			/>
		</>
	);
};
