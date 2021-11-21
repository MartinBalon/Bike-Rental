import React, { useState } from 'react';
import { InputProps } from '../../../../common/types';
import { StyledInput, StyledLabel } from '../basic-input/styled';
import DatePicker from './date-picker';

const DateInput: React.FC<InputProps> = ({ name, title }) => {
	const [showDatePicker, setShowDatePicker] = useState(false);

	const datePickerHandler = () => {
		setShowDatePicker((prevState) => !prevState);
	};

	return (
		<>
			<StyledLabel htmlFor={name}>{title}</StyledLabel>
			<StyledInput onClick={datePickerHandler} />
			{showDatePicker && <DatePicker closeDatePicker={datePickerHandler} />}
		</>
	);
};

export default DateInput;
