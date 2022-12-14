import { useCurrentFrame, interpolate } from 'remotion';

export const Star = ({ color, style, reverse, svgStyle }) => {
	const frame = useCurrentFrame();

	const rotate = interpolate(frame, [0, 90], [0, 1], {
		extrapolateRight: 'clamp',
	});

	var reverseSpin = 1;
	if (reverse) {
		reverseSpin = -1;
	}

	return (
		<div style={Object.assign(style)}>
			<svg
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 575.51 553"
				style={{
					transform: `rotate(${rotate * 360 * reverseSpin}deg)`,
					transformOrigin: 'calc(50% )  calc(50% - 3px) ',
				}}
			>
				<path
					style={Object.assign(
						{
							fill: color,
						},
						svgStyle
					)}
					d="M289.73,553h-10.49c0-.77-.68-.58-1.07-.69-8.86-2.39-14.94-7.93-18.84-16.17-12.55-26.56-25.19-53.07-37.79-79.6-8.93-18.79-17.83-37.59-26.79-56.36-4.33-9.08-11.56-14.41-21.45-16.09-5.66-.96-11.34-1.77-17-2.68-23.39-3.76-46.79-7.54-70.18-11.31-20.85-3.35-41.72-6.59-62.55-10.06-11.52-1.92-18.86-8.86-22.37-19.92-.47-1.49-.72-3.06-1.07-4.59-.17-2.18-.19-4.35,.07-6.52,1.19-7.67,5.17-13.6,10.77-18.88,35.92-33.87,71.7-67.88,107.55-101.83,7.58-7.18,10.68-15.85,8.97-26.2-.72-4.35-1.37-8.72-2.04-13.07-2.4-15.46-4.8-30.92-7.21-46.38-2.25-14.39-4.54-28.77-6.79-43.16-2.42-15.46-4.76-30.93-7.25-46.38-2.12-13.19,4.69-25.61,16.99-30.71,2.17-.9,4.45-1.34,6.69-1.96,1.43,.22,2.79-.55,4.2-.39,4.91,.57,9.58,1.8,13.99,4.21,34.74,19,69.53,37.92,104.3,56.87,9.35,5.1,18.67,10.25,28.05,15.28,8.68,4.65,17.49,4.76,26.33,.4,2.09-1.03,4.15-2.11,6.23-3.16,29-14.72,57.99-29.45,86.99-44.17,14.16-7.19,28.27-14.51,42.52-21.52,10.27-5.05,20.3-3.99,29.35,2.95,8.9,6.83,12.37,16.15,10.37,27.19-4.25,23.5-8.71,46.96-13.09,70.44-4.8,25.77-9.54,51.55-14.44,77.29-2.08,10.94,.59,20.22,8.62,28,4.84,4.69,9.53,9.55,14.29,14.33,23.21,23.3,46.43,46.59,69.64,69.9,7.4,7.43,14.79,14.88,22.19,22.33,3.47,3.5,6,7.57,7.15,12.39,.92,3.87,1.29,7.8,.52,11.76-1.51,10.72-9.55,19.72-20.1,22.52-2.91,.77-5.9,1.02-8.86,1.42-13.36,1.76-26.73,3.45-40.09,5.2-17.16,2.25-34.31,4.53-51.46,6.78-17.82,2.34-35.63,4.67-53.45,6.98-10.19,1.32-17.58,6.6-22.25,15.73-18.38,35.94-36.75,71.89-55.13,107.84-4.51,8.82-9.03,17.63-13.53,26.46-4.15,8.16-10.62,13.29-19.62,15.14-.33,.07-.65,.14-.86,.43Z"
				/>
			</svg>
		</div>
	);
};
