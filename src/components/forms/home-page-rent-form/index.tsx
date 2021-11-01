import Input from '../input';
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
		<form>
			<datalist id='locations'>{LOCATIONS}</datalist>
			<fieldset>
				<Input
					title='Pick-up location'
					name='pickUpLocation'
					dataList='locations'
				/>
				<Input
					title='Return location'
					name='returnLocation'
					dataList='locations'
				/>
			</fieldset>
			<fieldset>
				<Input title='Pick-up date' name='pickUpDate' inputType='date' />
				<Input title='Pick-up time' name='pickUpTime' inputType='time' />
				<Input title='Return date' name='returnDate' inputType='date' />
				<Input title='Return time' name='returnTime' inputType='time' />
			</fieldset>
			<fieldset>
				<Input
					title='Category'
					name='category'
					options={CATEGORIES}
					inputType='select'
				/>
				<Input
					title='Size'
					name='size'
					options={FRAME_SIZES}
					inputType='select'
				/>
				<Input
					title='Wheel size'
					name='wheelSize'
					options={WHEEL_SIZES}
					inputType='select'
				/>
				<Input
					title='Suspension'
					name='suspension'
					options={SUSPENSION}
					inputType='select'
				/>
			</fieldset>
			<Button title='SHOW BIKES' onClick={onSubmitHandler} />
		</form>
	);
};

export default HomePageRentForm;
