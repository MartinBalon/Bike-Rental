import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string;
	name: string;
	inputType?: string;
	dataList?: string;
	options?: string[] | number[];
}

const Input: React.FC<InputProps> = ({
	name,
	title,
	inputType = 'text',
	dataList,
	options,
}) => {
	return (
		<>
			<label htmlFor={name}>{title}</label>
			{inputType !== 'select' && (
				<input type={inputType} name={name} id={name} list={dataList} />
			)}
			{options && options.length > 0 && (
				<select id={name} name={name}>
					<option></option>
					{options.map((option) => (
						<option key={option}>{option}</option>
					))}
				</select>
			)}
		</>
	);
};

export default Input;
