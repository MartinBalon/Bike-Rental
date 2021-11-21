import { useState } from 'react';
import { DownArrow, UpArrow } from '../time-picker-arrows';
import { OPENING_HOURS } from '../../../../../../constants';
import {
	Wrapper,
	ArrowContainer,
	ColonContainer,
	Edge,
	Middle,
} from './styled';

const HoursPicker = () => {
	const [hours, setHours] = useState([8, 9, 10, 11, 12]);

	const onChangeHourHandler = (changeHour: string): void => {
		if (changeHour === 'up') {
			setHours((prevHours: number[]) => {
				const changedHoursArray: number[] = [];
				// stop cycling through hours when opening hour is reached
				if (prevHours[2] === OPENING_HOURS[0]) {
					return prevHours;
				}
				for (let i = 0; i < 5; i++) {
					changedHoursArray.push(prevHours[i] - 1);
				}
				return changedHoursArray;
			});
		} else {
			setHours((prevHours: number[]) => {
				const changedHoursArray: number[] = [];
				// stop cycling through hours when closing hour is reached
				if (prevHours[2] === OPENING_HOURS[1]) {
					return prevHours;
				}
				for (let i = 0; i < 5; i++) {
					changedHoursArray.push(prevHours[i] + 1);
				}
				return changedHoursArray;
			});
		}
	};

	return (
		<Wrapper>
			<ArrowContainer>
				<UpArrow onClick={onChangeHourHandler} />
				<DownArrow onClick={onChangeHourHandler} />
			</ArrowContainer>
			<div>
				<Edge>{hours[0] < 10 ? `0${hours[0]}` : hours[0]}</Edge>
				<Middle>{hours[1] < 10 ? `0${hours[1]}` : hours[1]}</Middle>
				<div>{hours[2] < 10 ? `0${hours[2]}` : hours[2]}</div>
				<Middle>{hours[3] < 10 ? `0${hours[3]}` : hours[3]}</Middle>
				<Edge>{hours[4] < 10 ? `0${hours[4]}` : hours[4]}</Edge>
			</div>
			<ColonContainer>:</ColonContainer>
		</Wrapper>
	);
};

export default HoursPicker;
