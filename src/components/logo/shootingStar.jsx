import { Star } from './star';
import stars from '../../audio/stars.wav'
import {
	useCurrentFrame,
	useVideoConfig,
	spring,
	interpolate,
	Easing,
	Audio
} from 'remotion';

export const ShootingStar = ({ color, reverse, rotate, scale }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const hoursRotate = spring({
		frame,
		fps,
		from: 0,
		to: 24,
		config: {
			mass: 0.5,
			stiffness: 50,
		},
		durationInFrames: 30,
	});

	const starScale = spring({
		frame,
		fps,
		from: 0,
		to: 1.5,
		config: {
			mass: 0.5,
			stiffness: 50,
		},
		durationInFrames: 30,
	});

	const starOpacity = interpolate(frame, [0, 5, 20], [0, 1, 0], {
		easing: Easing.bezier(0.51, 0, 0.51, 0.99),
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				position: 'absolute',
				top: '25rem',
				transform: `rotate(${rotate}deg) scale(${scale})`,
			}}
		>
			<Star
				style={{
					width: '5rem',
					transform: `translateY(-${hoursRotate}rem) scale(${starScale}) rotate(50deg)`,
					opacity: starOpacity,
				}}
				color={color}
				reverse={reverse}
			/>
			<Audio
				src={stars}
				startFrom={0} // if composition is 30fps, then it will start at 2s
				endAt={300}
				volume={0.1} // if composition is 30fps, then it will end at 4s
			/>
		</div>
	);
};
