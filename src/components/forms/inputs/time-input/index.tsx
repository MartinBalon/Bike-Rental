import React, { useState } from 'react';
import { InputProps } from '../../../../common/types';
import { StyledInput, StyledLabel } from '../basic-input/styled';
import TimePicker from './time-picker';

const TimeInput: React.FC<InputProps> = ({ name, title }) => {
	const [showTimePicker, setShowTimePicker] = useState(false);

	const timePickerHandler = () => {
		setShowTimePicker((prevState) => !prevState);
	};

	return (
		<>
			<StyledLabel htmlFor={name}>{title}</StyledLabel>
			<StyledInput onClick={timePickerHandler} />
			{showTimePicker && <TimePicker closeTimePicker={timePickerHandler} />}
		</>
	);
};

export default TimeInput;
