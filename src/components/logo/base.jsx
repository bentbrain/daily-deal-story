import { Base } from './introBase';
import { Daily } from './daily';
import { Deal } from './deal';
import { ShootingStar } from './shootingStar';
import { useCurrentFrame, useVideoConfig, spring, Sequence, Audio } from 'remotion';
import pop from '../../audio/pop.wav'

export const FullBase = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const hoursRotate = spring({
		frame,
		fps,
		from: 20,
		to: 0,
		config: {
			mass: 5,
			stiffness: 100,
		},
		durationInFrames: 60,
	});

	const hoursOpacity = spring({
		frame,
		fps,
		config: {
			stiffness: 100,
		},
		durationInFrames: 30,
	});

	return (
		<>

			<div
				style={{
					position: 'absolute',
					inset: '0',
					display: 'flex',
					alignItems: 'center',
					padding: '10rem',
					flexDirection: 'column',
					transformOrigin: 'center 30rem',
					transform: `scale(${hoursOpacity}) rotate(${hoursRotate}deg)`,
				}}
			>
				<Base />
				<Sequence from={5} layout="none">
					<Daily />
				</Sequence>
				<Sequence from={10} layout="none">
					<Deal />
				</Sequence>
				<Audio
					src={pop}
					startFrom={0} // if composition is 30fps, then it will start at 2s
					endAt={30}
					volume={0.4} // if composition is 30fps, then it will end at 4s
				/>
			</div>
		</>
	);
};
