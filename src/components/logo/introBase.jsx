import { Img, staticFile } from 'remotion';
export const Base = () => {
	return (
		<>
			<Img
				style={{
					maxWidth: 'min(40rem, 100%)',
				}}
				src={staticFile('assets/logo.png')}
			/>
		</>
	);
};
