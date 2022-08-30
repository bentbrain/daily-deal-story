import {Base} from './introBase';
import {Daily} from './daily';
import {Deal} from './deal';
import {ShootingStar} from './shootingstar';
import {useCurrentFrame, useVideoConfig, spring, Sequence} from 'remotion';

export const FullBase = () => {
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
			<Sequence layout="none" from={2}>
				<ShootingStar color="#ed193a" rotate={-35} scale={0.9} reverse={true} />
			</Sequence>
			<Sequence layout="none" from={4}>
				<ShootingStar color="#3a3a3c" rotate={-20} scale={0.7} />
			</Sequence>
			<Sequence layout="none" from={6}>
				<ShootingStar color="#ed193a" rotate={0} scale={0.9} reverse={true} />
			</Sequence>
			<Sequence layout="none" from={2}>
				<ShootingStar color="#3a3a3c" rotate={180} scale={0.7} reverse={true} />
			</Sequence>
			<Sequence layout="none" from={4}>
				<ShootingStar color="#ed193a" rotate={160} scale={0.9} />
			</Sequence>
			<Sequence layout="none" from={6}>
				<ShootingStar color="#3a3a3c" rotate={140} scale={0.8} reverse={true} />
			</Sequence>
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
			</div>
		</>
	);
};
