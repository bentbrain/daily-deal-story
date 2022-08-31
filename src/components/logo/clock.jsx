import {
	Img,
	staticFile,
	interpolate,
	useCurrentFrame,
	Loop,
	useVideoConfig,
	Easing,
	Audio
} from 'remotion';
import { ClockArm } from './clockArm';
import timer from './../../audio/timer2.wav'


export const Clock = ({ style }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
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
				<Audio
					src={timer}
					startFrom={0} // if composition is 30fps, then it will start at 2s
					endAt={300}
					volume={1} // if composition is 30fps, then it will end at 4s
				/>

			</div>
		</>
	);
};
