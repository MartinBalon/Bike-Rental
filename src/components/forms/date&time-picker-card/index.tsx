import { Container, ArrowUp, Wrapper } from './styled';

type DateAndTimePickerCardProps = React.PropsWithChildren<{
	children: JSX.Element[] | JSX.Element;
	pickerType: string;
}>;

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
