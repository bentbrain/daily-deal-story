import {
	Img,
	staticFile,
	interpolate,
	useCurrentFrame,
	Loop,
	useVideoConfig,
	Easing,
} from 'remotion';
import {ClockArm} from './clockArm';

export const Clock = ({style}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const rotate = interpolate(
		frame,
		[0, 5, 10, 15, 20, 25, 30],
		[-10, 20, -15, 30, -15, 20, -10],
		{
			easing: Easing.bezier(0.51, 0, 0.51, 0.99),
			extrapolateRight: 'clamp',
		}
	);

	return (
		<>
			<div
				style={{
					right: '4rem',
					transformOrigin: '50% calc(50% + 12px)',
					transform: `rotate(${rotate}deg) `,
				}}
			>
				<Img
					style={{
						maxWidth: '14rem',
					}}
					src={staticFile('assets/Clock_Base_NoArms.png')}
				/>
				<Loop durationInFrames={30} layout="none">
					<ClockArm />
				</Loop>
			</div>
		</>
	);
};
