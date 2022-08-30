import {Clock} from './clock';

import {Loop, useCurrentFrame, useVideoConfig, spring} from 'remotion';

export const ClockContainer = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

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
		</div>
	);
};
