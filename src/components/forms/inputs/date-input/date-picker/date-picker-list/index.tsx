import { useLayoutEffect, useState } from 'react';
import { createDatesArray } from '../../../../../../utils/createDatesArray';
import {
	DateObject,
	DatePickerListProps,
} from '../../../../../../common/types';
import { fontColor, colors } from '../../../../../../common/theme';
import { DateContainer, DateListContainer } from './styled';

const DatePickerList = ({
	day,
	month,
	year,
	leapYear,
}: DatePickerListProps) => {
	const [dates, setDates] = useState<DateObject[]>([]);

	useLayoutEffect(() => {
		setDates(createDatesArray(day, month, year, leapYear));
	}, [month, day, year, leapYear]);

	return (
		<DateListContainer>
			{dates.map((date: DateObject) => (
				<DateContainer
					key={date.id}
					style={{ color: date.currentMonth ? fontColor.dark : 'lightgrey' }}
				>
					{date.currentDay && (
						<span style={{ color: colors.detail }}>{date.dayOfTheMonth}</span>
					)}
					{!date.currentDay && date.dayOfTheMonth && (
						<span>{date.dayOfTheMonth}</span>
					)}
				</DateContainer>
			))}
		</DateListContainer>
	);
};

export default DatePickerList;
