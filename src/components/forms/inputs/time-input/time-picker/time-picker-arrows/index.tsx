import { ArrowContainer, Image } from './styled';
import upArrow from '../assets/upArrow.svg';
import downArrow from '../assets/downArrow.svg';
import { ArrowProps } from '../../../../../../common/types';

export const UpArrow = ({ onClick }: ArrowProps) => {
	return (
		<ArrowContainer onClick={() => onClick('up')}>
			<Image src={upArrow} alt='arrow up logo' />
		</ArrowContainer>
	);
};

export const DownArrow = ({ onClick }: ArrowProps) => {
	return (
		<ArrowContainer onClick={() => onClick('down')}>
			<Image src={downArrow} alt='arrow down logo' />
		</ArrowContainer>
	);
};
