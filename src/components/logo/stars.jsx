import {Star} from './star';
import {Loop, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Stars = ({inverted}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const value = spring({
		frame,
		fps,
		config: {
			stiffness: 100,
		},
		durationInFrames: 60,
	});

	var primary = '#ed193a';
	var secondary = '#3a3a3c';
	var divStyles = {transform: `translateY(${5.5 + value * -6}rem)`};

	if (inverted) {
		var primary = '#3a3a3c';
		var secondary = '#ed193a';
		var divStyles = {
			transform: `translateY(${-6 + value * 5.5}rem) rotate(180deg)`,
			position: 'absolute',
			top: '48.5rem',
			left: '52%',
		};
	}

	return (
		<Loop durationInFrames={90} layout="none">
			<div style={divStyles}>
				<Star
					color={primary}
					reverse={true}
					style={{
						aspectRation: '1',
						width: '5rem',
						position: 'absolute',
						maxWidth: '5rem',
						transform: 'translateX(-5rem) translateY(-0.5rem)',
					}}
				/>
				<Star
					color={secondary}
					style={{
						aspectRation: '1',
						width: '5rem',
						position: 'absolute',
						maxWidth: '5rem',
						transform: 'translateX(-9.3rem) translateY(2.7rem) scale(0.6)',
					}}
				/>
				<Star
					color={secondary}
					style={{
						aspectRation: '1',
						width: '5rem',
						position: 'absolute',
						maxWidth: '5rem',
						transform: 'translateX(0rem) translateY(0.7rem) scale(0.6)',
					}}
				/>
			</div>
		</Loop>
	);
};
