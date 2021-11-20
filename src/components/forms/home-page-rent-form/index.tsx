import SelectInput from '../inputs/select-input';
import DateInput from '../inputs/date-input';
import TimeInput from '../inputs/time-input';
import { StyledFieldSet, StyledForm } from './styled';
import Button from '../button';
import {
	LOCATIONS,
	CATEGORIES,
	WHEEL_SIZES,
	FRAME_SIZES,
	SUSPENSION,
} from '../../../constants';

const HomePageRentForm: React.FC = () => {
	const onSubmitHandler = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
	};

	return (
		<StyledForm>
			<StyledFieldSet>
				<SelectInput
					title='Pick-up location'
					name='pickUpLocation'
					options={LOCATIONS}
				/>
				<SelectInput
					title='Return location'
					name='returnLocation'
					options={LOCATIONS}
				/>
			</StyledFieldSet>
			<StyledFieldSet>
				<DateInput title='Pick-up date' name='pickUpDate' />
				<TimeInput title='Pick-up time' name='pickUpTime' />
				<DateInput title='Return date' name='returnDate' />
				<TimeInput title='Return time' name='returnTime' />
			</StyledFieldSet>
			<StyledFieldSet>
				<SelectInput title='Category' name='category' options={CATEGORIES} />
				<SelectInput title='Size' name='size' options={FRAME_SIZES} />
				<SelectInput
					title='Wheel size'
					name='wheelSize'
					options={WHEEL_SIZES}
				/>
				<SelectInput
					title='Suspension'
					name='suspension'
					options={SUSPENSION}
				/>
			</StyledFieldSet>
			<Button title='SHOW BIKES' onClick={onSubmitHandler} />
		</StyledForm>
	);
};

export default HomePageRentForm;
