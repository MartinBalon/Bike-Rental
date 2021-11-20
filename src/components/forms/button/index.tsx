import { ButtonProps } from '../../../common/types';
import { StyledButton } from './styled';

const Button: React.FC<ButtonProps> = ({ title, onClick }: ButtonProps) => {
	return (
		<StyledButton onClick={(event) => onClick(event)} type='submit'>
			{title}
		</StyledButton>
	);
};

export default Button;
