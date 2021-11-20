import { InputHTMLAttributes } from 'react';

export type RentFormValues = {
	pickUpLocation: string;
	returnLocation: string;
	pickUpDate: string;
	pickUpTime: string;
	returnDate: string;
	returnTime: string;
	category: string;
	size: string;
	wheelSize: number;
	suspension: string;
	brand?: string;
	model?: string;
	material?: string;
};

export type ButtonProps = {
	title: string;
	onClick: React.MouseEventHandler;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string;
	name: string;
	type?: string;
	options?: string[] | number[];
}

export type DateObject = {
	id: number;
	dayOfTheMonth: number;
	currentDay: boolean;
	currentMonth: boolean;
	month: number;
};

export type DatePickerListProps = {
	day: number;
	month: number;
	year: number;
	leapYear: boolean;
};
export type ArrowProps = {
	onClick: (paramater: string) => void;
};
