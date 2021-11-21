import styled from 'styled-components';
import { fontSize } from '../../../../../../common/theme';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	font-size: ${fontSize.large};
`;

export const ArrowContainer = styled.div`
	width: 40px;
	padding-left: 5px;
`;

export const ColonContainer = styled.div`
	width: 20px;
`;

export const Edge = styled.div`
	font-size: ${fontSize.small};
	color: lightgrey;
`;

export const Middle = styled.div`
	font-size: ${fontSize.normal};
	color: grey;
`;
