import {Hours} from './logo/24hrs';
import {Stars} from './logo/stars';
import {Clock} from './logo/clock';
import {FullBase} from './logo/base';
import {ClockContainer} from './logo/clockContainer';
import {
	AbsoluteFill,
	Loop,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const FullLogo = ({positionY, introScale, intro}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const hoursRotate = spring({
		frame,
		fps,
		from: 20,
		to: 0,
		config: {
			mass: 5,
			stiffness: 100,
		},
		durationInFrames: 30,
	});

	const hoursOpacity = spring({
		frame,
		fps,
		config: {
			stiffness: 100,
		},
		durationInFrames: 15,
	});

	const clockScale = spring({
		frame,
		fps,
		config: {
			mass: 0.5,
			stiffness: 300,
		},
		durationInFrames: 30,
	});

	return (
		<AbsoluteFill
			style={{
				width: '100%',
				padding: '10rem',
				display: 'flex',
				height: '30rem',
				alignItems: 'center',
				transformOrigin: '84.2% 79.5%',
				transform: `translateY(${positionY}rem) translateX(-2rem) scale(${introScale})`,
			}}
		>
			<Sequence from={35} layout="none">
				<Stars />
				<Stars inverted={true} />
			</Sequence>

			<Sequence from={30} layout="none">
				<Hours
					style={{
						filter: 'drop-shadow(0px 15px 0px  black)',
						maxWidth: '100%',
					}}
				/>
			</Sequence>
			<FullBase />
			<Sequence from={20} layout="none">
				<ClockContainer />
			</Sequence>
		</AbsoluteFill>
	);
};
