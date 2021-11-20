import styled from 'styled-components';
import { fontColor, robotFont } from '../../../common/theme';

type ContainerProps = {
	pickerType: string;
};

export const Container = styled.div<ContainerProps>`
	position: absolute;
	width: 260px;
	height: ${(props) => (props.pickerType === 'datePicker' ? '290px' : '140px')};
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
`;

export const ArrowUp = styled.div`
	position: absolute;
	width: 10px;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-bottom: 10px solid white;
	top: 0px;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
`;

export const Wrapper = styled.div`
	background: white;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 10px;
	padding: 10px 5px;
	color: ${fontColor.dark};
	font-family: ${robotFont};
	font-weight: 500;
	border-radius: 10px;
`;
