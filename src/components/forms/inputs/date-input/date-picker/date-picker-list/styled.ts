import styled from 'styled-components';
import { colors } from '../../../../../../common/theme';

export const DateListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const DateContainer = styled.div`
	text-align: center;
	flex-grow: 1;
	width: 35px;
	height: 35px;
	line-height: 35px;
	cursor: pointer;
	&:hover {
		background: rgb(250, 250, 250);
		border-bottom: 2px solid ${colors.detail};
	}
`;
