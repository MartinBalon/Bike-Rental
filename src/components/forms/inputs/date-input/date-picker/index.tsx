import DatePickerList from './date-picker-list';
import { LeftArrow, RightArrow } from './date-picker-arrows';
import { useEffect, useState } from 'react';
import { MONTHS } from '../../../../../constants';
import DateAndTimePickerCard from '../../../date&time-picker-card';
import { DateWrapper, Day, DaysOfTheWeek, DisplayDate } from './styled';

const DatePicker: React.FC = () => {
	const [day, setDay] = useState(0);
	const [month, setMonth] = useState(0);
	const [year, setYear] = useState(0);

	const checkLeapYear = (year: number): boolean => {
		return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
	};

	const isLeapYear = checkLeapYear(year);

	useEffect(() => {
		const currentDate = new Date();
		setDay(currentDate.getDate());
		setMonth(currentDate.getMonth());
		setYear(currentDate.getFullYear());
	}, []);

	const onChangeMonthHandler = (changeMonth: string): void => {
		if (changeMonth === 'previousMonth') {
			setMonth((prevMonth) => {
				if (prevMonth === 0) {
					setYear((prevYear) => prevYear - 1);
					return 11;
				} else {
					return prevMonth - 1;
				}
			});
		} else {
			setMonth((prevMonth) => {
				if (prevMonth === 11) {
					setYear((prevYear) => prevYear + 1);
					return 0;
				} else {
					return prevMonth + 1;
				}
			});
		}
	};

	return (
		<DateAndTimePickerCard pickerType='datePicker'>
			<DateWrapper>
				<DisplayDate>{`${MONTHS[month]} ${year}`}</DisplayDate>
				<LeftArrow onClick={onChangeMonthHandler} />
				<RightArrow onClick={onChangeMonthHandler} />
			</DateWrapper>
			<DaysOfTheWeek>
				<Day>Mo</Day>
				<Day>Tu</Day>
				<Day>We</Day>
				<Day>Th</Day>
				<Day>Fr</Day>
				<Day>Sa</Day>
				<Day>Su</Day>
			</DaysOfTheWeek>
			<DatePickerList
				day={day}
				month={month}
				year={year}
				leapYear={isLeapYear}
			/>
		</DateAndTimePickerCard>
	);
};

export default DatePicker;
