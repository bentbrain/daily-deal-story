import {Img, staticFile, interpolate, useCurrentFrame} from 'remotion';
export const ClockArm = () => {
	const frame = useCurrentFrame();
	const rotate = interpolate(frame, [0, 30], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<Img
				style={{
					maxWidth: '14rem',
					maxHeight: '5rem',
					position: 'absolute',
					top: '50%',
					right: '48%',
					transformOrigin: 'center calc(100% - 5px)',
					transform: `translateY(-77%) rotate(${rotate * 360}deg)`,
				}}
				src={staticFile('assets/Clock_Arms.png')}
			/>
		</>
	);
};
