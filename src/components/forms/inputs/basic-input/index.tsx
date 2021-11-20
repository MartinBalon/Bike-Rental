import React from 'react';
import { InputProps } from '../../../../common/types';
import { StyledInput, StyledLabel } from './styled';

const Input: React.FC<InputProps> = ({ name, title, type }) => {
	return (
		<>
			<StyledLabel htmlFor={name}>{title}</StyledLabel>
			<StyledInput type={type} name={name} id={name} />
		</>
	);
};

export default Input;
