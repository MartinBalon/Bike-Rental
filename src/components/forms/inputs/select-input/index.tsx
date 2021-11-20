import React from 'react';
import { InputProps } from '../../../../common/types';
import { StyledLabel, StyledSelect } from './styled';

const SelectInput: React.FC<InputProps> = ({ name, title, options }) => {
	return (
		<>
			<StyledLabel htmlFor={name}>{title}</StyledLabel>

			{options && options.length > 0 && (
				<StyledSelect id={name} name={name}>
					<option></option>
					{options.map((option) => (
						<option key={option}>{option}</option>
					))}
				</StyledSelect>
			)}
		</>
	);
};

export default SelectInput;
