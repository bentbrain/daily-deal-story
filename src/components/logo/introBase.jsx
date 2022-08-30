import {Img, staticFile} from 'remotion';
export const Base = () => {
	return (
		<>
			<Img
				style={{
					maxWidth: 'min(40rem, 100%)',
					filter: 'drop-shadow(0px 15px 0px  black)',
				}}
				src={staticFile('assets/logo.png')}
			/>
		</>
	);
};
