import {
	Img,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
	Easing,
} from 'remotion';
export const Daily = (style) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const wipe = interpolate(frame, [0, 10], [0, 100], {
		easing: Easing.bezier(0.51, 0, 0.51, 0.99),
		extrapolateRight: 'clamp',
	});
	return (
		<>
			<Img
				style={{
					position: 'absolute',
					maxWidth: '100%',
					width: '33rem',
					top: '13rem',
					clipPath: `polygon(0 0, ${wipe}% 0, ${wipe}% 100%, 0% 100%)`,
				}}
				src={staticFile('assets/Daily.png')}
			/>
		</>
	);
};
