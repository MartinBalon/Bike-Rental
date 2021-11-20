import styled from 'styled-components';
import { fontColor, fontSize, robotFont } from '../../../common/theme';
import PhoneBackgroundImage from './assets/phoneBackground.jpg';

export const StyledArticle = styled.article`
	background-image: url(${PhoneBackgroundImage});
	background-position: center;
	background-size: cover;
	color: ${fontColor.light};
	font-family: ${robotFont};
	position: relative;
`;

export const StyledHeading = styled.h1`
	text-align: center;
	font-size: ${fontSize.xxLarge};
`;

export const StyledParagraph = styled.p`
	text-align: center;
	font-size: ${fontSize.small};
`;
