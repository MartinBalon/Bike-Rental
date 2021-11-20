export const gradients = {
	buttonGradient: 'linear-gradient(0deg, #E02B36, #E05F3C)',
	backgroundGradient: '',
};

export const radius = {
	buttonRadius: '5px',
};

export const shadow = '0px 6px 12px -5px rgba(80,80,80,0.9)';

export const fontSize = {
	small: '0.85rem',
	normal: '1rem',
	medium: '1.2rem',
	large: '1.4rem',
	xLarge: '1.6em',
	xxLarge: '1.8rem',
};

export const robotFont = 'Roboto, sans-serif';

export const fontColor = {
	buttonColor: 'rgb(240,240,240)',
	light: 'rgb(240,240,240)',
	dark: 'rgb(60,60,60)',
};

export const colors = {
	primary: '',
	secondary: 'rgb(240,240,240)',
	detail: '#BE313A',
};

export const bottomBorder = `1px solid ${colors.secondary}`;

export const inputStyle = `
	width: 100%;
	display: block;
	background: none;
	border: none;
	border-bottom: ${bottomBorder};
	border-radius: 0;
	outline: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;
	color: ${colors.secondary};
	font-family: ${robotFont};
	font-size: ${fontSize.small};
`;
