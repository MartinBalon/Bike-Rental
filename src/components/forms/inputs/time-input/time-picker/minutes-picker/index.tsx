import { useState } from 'react';
import { DownArrow, UpArrow } from '../time-picker-arrows';
import { ArrowContainer, Edge, Middle, Wrapper } from './styled';

const MinutesPicker = () => {
	const [minutes, setMinutes] = useState([15, 20, 25, 30, 35, 40]);

	const onChangeMinuteHandler = (changeMinute: string): void => {
		if (changeMinute === 'up') {
			setMinutes((prevMinutes: number[]) => {
				const changedMinutesArray: number[] = [];
				for (let i = 0; i < 6; i++) {
					if (prevMinutes[i] === 0) {
						changedMinutesArray.push(55);
					} else {
						changedMinutesArray.push(prevMinutes[i] - 5);
					}
				}
				return changedMinutesArray;
			});
		} else {
			setMinutes((prevMinutes: number[]) => {
				const changedMinutesArray: number[] = [];
				for (let i = 0; i < 6; i++) {
					if (prevMinutes[i] === 55) {
						changedMinutesArray.push(0);
					} else {
						changedMinutesArray.push(prevMinutes[i] + 5);
					}
				}
				return changedMinutesArray;
			});
		}
	};

	return (
		<Wrapper>
			<div>
				<Edge>{minutes[0] < 10 ? `0${minutes[0]}` : minutes[0]}</Edge>
				<Middle>{minutes[1] < 10 ? `0${minutes[1]}` : minutes[1]}</Middle>
				<div>{minutes[2] < 10 ? `0${minutes[2]}` : minutes[2]}</div>
				<Middle>{minutes[3] < 10 ? `0${minutes[3]}` : minutes[3]}</Middle>
				<Edge>{minutes[4] < 10 ? `0${minutes[4]}` : minutes[4]}</Edge>
			</div>
			<ArrowContainer>
				<UpArrow onClick={onChangeMinuteHandler} />
				<DownArrow onClick={onChangeMinuteHandler} />
			</ArrowContainer>
		</Wrapper>
	);
};

export default MinutesPicker;
