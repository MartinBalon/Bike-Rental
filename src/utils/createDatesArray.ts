import { MONTHS_LENGTH } from '../constants';

type DateObject = {
	id: number;
	dayOfTheMonth: number;
	currentDay: boolean;
	currentMonth: boolean;
	month: number;
};

export const createDatesArray = (
	day: number,
	month: number,
	year: number,
	leapYear: boolean
): DateObject[] => {
	const datesArray: DateObject[] = [];
	const date = new Date();
	const firstDayOfMonth = new Date(year, month, 1).getDay();

	// calculate number of days in previous, current, and following month
	let daysInMonth: number;
	let daysInPreviousMonth: number;
	if (leapYear && month === 1) {
		daysInMonth = 29;
		daysInPreviousMonth = MONTHS_LENGTH[0];
	} else {
		daysInMonth = MONTHS_LENGTH[month];
		if (month === 2 && leapYear) {
			daysInPreviousMonth = 29;
		} else if (month === 0) {
			daysInPreviousMonth = MONTHS_LENGTH[11];
		} else {
			daysInPreviousMonth = MONTHS_LENGTH[month - 1];
		}
	}

	let previousMonthDaysToDisplay: number;
	if (firstDayOfMonth === 0) {
		previousMonthDaysToDisplay = 6;
	} else {
		previousMonthDaysToDisplay = firstDayOfMonth - 1;
	}

	for (let i = 1; i <= 42; i++) {
		let dayOfTheMonth: number;
		let currentDay = false;
		let currentMonth: boolean;
		let monthNumber: number;

		if (i <= previousMonthDaysToDisplay) {
			// rest of the days from previous months
			dayOfTheMonth = daysInPreviousMonth - (previousMonthDaysToDisplay - i);
			currentMonth = false;
			if (month === 0) {
				monthNumber = 11;
			} else {
				monthNumber = month;
			}
		} else if (
			i > previousMonthDaysToDisplay &&
			i <= daysInMonth + previousMonthDaysToDisplay
		) {
			// current month
			dayOfTheMonth = i - previousMonthDaysToDisplay;
			currentMonth = true;
			monthNumber = month + 1;
			if (day === dayOfTheMonth && date.getMonth() === month) {
				currentDay = true;
			} else {
				currentDay = false;
			}
		} else {
			// beginning of the next month
			dayOfTheMonth = i - (daysInMonth + previousMonthDaysToDisplay);
			currentMonth = false;
			if (month === 11) {
				monthNumber = 0;
			} else {
				monthNumber = month + 2;
			}
		}

		datesArray.push({
			id: i,
			dayOfTheMonth,
			currentDay,
			currentMonth,
			month: monthNumber,
		});
	}

	return datesArray;
};
