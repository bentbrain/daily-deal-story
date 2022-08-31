import {
	Img,
	staticFile,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Audio
} from 'remotion';
import pop from '../../audio/pop.wav'
export const Hours = (style) => {
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
	return (
		<>
			<div
				style={{
					position: 'absolute',
					maxWidth: '100%',
					zIndex: 999,
					width: '26rem',
					top: '34rem',
					opacity: hoursOpacity,
					transform: `translateX(5rem) rotate(${hoursRotate}deg) scale(${hoursOpacity})`,
				}}
			>
				<Img style={style.style} src={staticFile('assets/24HRs.png')} />
				<Audio
					src={pop}
					startFrom={5} // if composition is 30fps, then it will start at 2s
					endAt={30}
					volume={0.3} // if composition is 30fps, then it will end at 4s
				/>
			</div>
		</>
	);
};
