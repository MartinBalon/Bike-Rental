import HomePageRentForm from '../../forms/home-page-rent-form';
import { StyledArticle, StyledHeading, StyledParagraph } from './styled';

const AboveFold: React.FC = () => {
	return (
		<StyledArticle>
			<StyledHeading>Rent a bike</StyledHeading>
			<HomePageRentForm />
			<StyledParagraph>scroll down</StyledParagraph>
		</StyledArticle>
	);
};

export default AboveFold;
