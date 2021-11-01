type ButtonProps = {
	title: string;
	onClick: React.MouseEventHandler;
};

const Button: React.FC<ButtonProps> = ({ title, onClick }: ButtonProps) => {
	return (
		<button onClick={(event) => onClick(event)} type='submit'>
			{title}
		</button>
	);
};

export default Button;
