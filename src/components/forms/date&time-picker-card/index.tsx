import { DateAndTimePickerCardProps } from '../../../common/types';
import { Container, ArrowUp, Wrapper } from './styled';

const DateAndTimePickerCard = ({
	children,
	pickerType,
}: DateAndTimePickerCardProps) => {
	return (
		<Container pickerType={pickerType}>
			<ArrowUp />
			<Wrapper>{children}</Wrapper>
		</Container>
	);
};

export default DateAndTimePickerCard;
