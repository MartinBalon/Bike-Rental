import styled from 'styled-components';
import {
	gradients,
	radius,
	fontSize,
	robotFont,
	fontColor,
} from '../../../common/theme';

export const StyledButton = styled.button`
	display: block;
	background: ${gradients.buttonGradient};
	border: none;
	border-radius: ${radius.buttonRadius};
	color: ${fontColor.buttonColor};
	font-weight: 500;
	letter-spacing: 1px;
	padding: 0.5rem 2rem;
	margin: 0 auto;
	margin-top: 1rem;
	font-size: ${fontSize.normal};
	font-family: ${robotFont};
`;
