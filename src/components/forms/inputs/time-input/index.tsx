import React, { useState } from 'react';
import { InputProps } from '../../../../common/types';
import { StyledInput, StyledLabel } from '../basic-input/styled';
import TimePicker from './time-picker';

const TimeInput: React.FC<InputProps> = ({ name, title }) => {
	const [showTimePicker, setTimePicker] = useState(false);

	const showDatePickerHandler = () => {
		setTimePicker((prevState) => !prevState);
	};

	return (
		<>
			<StyledLabel htmlFor={name}>{title}</StyledLabel>
			<StyledInput onClick={showDatePickerHandler} />
			{showTimePicker && <TimePicker />}
		</>
	);
};

export default TimeInput;
