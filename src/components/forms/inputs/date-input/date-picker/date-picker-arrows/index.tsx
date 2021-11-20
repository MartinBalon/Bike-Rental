import LeftArrowLogo from '../assets/leftArrow.svg';
import RightArrowLogo from '../assets/rightArrow.svg';
import { ArrowContainer, Image } from './styled';
import { ArrowProps } from '../../../../../../common/types';

export const LeftArrow = ({ onClick }: ArrowProps) => {
	return (
		<ArrowContainer onClick={() => onClick('previousMonth')}>
			<Image src={LeftArrowLogo} alt='left arrow logo' />
		</ArrowContainer>
	);
};

export const RightArrow = ({ onClick }: ArrowProps) => {
	return (
		<ArrowContainer onClick={() => onClick('nextMonth')}>
			<Image src={RightArrowLogo} alt='right arrow logo' />
		</ArrowContainer>
	);
};
