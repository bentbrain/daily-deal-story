import { Clock } from './clock';

import { Loop, useCurrentFrame, useVideoConfig, spring, Audio } from 'remotion';
import pop from '../../audio/pop.wav'

export const ClockContainer = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

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
		<div
			style={{
				position: 'absolute',
				right: '4rem',
				transform: `translateY(40%) scale(${clockScale})`,
			}}
		>
			<Loop durationInFrames={30} layout="none">
				<Clock />
			</Loop>
			<Audio
				src={pop}
				startFrom={0} // if composition is 30fps, then it will start at 2s
				endAt={30}
				volume={0.3} // if composition is 30fps, then it will end at 4s
			/>
		</div>
	);
};
