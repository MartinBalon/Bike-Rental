import { TimePickerProps } from '../../../../../common/types';
import Button from '../../../button';
import DateAndTimePickerCard from '../../../date&time-picker-card';
import HoursPicker from './hours-picker';
import MinutesPicker from './minutes-picker';
import { Wrapper } from './styled';

const TimePicker = ({ closeTimePicker }: TimePickerProps) => {
	return (
		<DateAndTimePickerCard pickerType='timePicker'>
			<Wrapper>
				<HoursPicker />
				<MinutesPicker />
			</Wrapper>
			<Button title='OK' onClick={closeTimePicker} />
		</DateAndTimePickerCard>
	);
};

export default TimePicker;
