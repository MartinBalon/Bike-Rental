import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string;
	id: string;
	inputType: string;
	dataList?: string;
}

const Input: React.FC<InputProps> = ({ id, title, inputType, dataList }) => {
	return (
		<>
			<label htmlFor={id}>{title}</label>
			<input type={inputType} name={id} id={id} list={dataList} />
		</>
	);
};

export default Input;
