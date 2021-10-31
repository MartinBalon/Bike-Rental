import Input from '../input';
import { locations } from '../../../constants/locations';

type RentFormValues = {
	pickUpLocation: string;
	returnLocation: string;
	pickUpDate: string;
	pickUpTime: string;
	returnDate: string;
	returnTime: string;
	category: string;
	size: string;
	wheelSize: number;
	suspension: string;
	brand?: string;
	model?: string;
	material?: string;
};

const HomePageRentForm: React.FC = () => {
	return (
		<article>
			<h3>Contact us</h3>

			<datalist id='locations'>{locations}</datalist>

			<form>
				<Input
					title='Pick-up location'
					id='pickUpLocation'
					inputType='text'
					dataList='locations'
				/>

				<Input
					title='Return location'
					id='returnLocation'
					inputType='text'
					dataList='locations'
				/>

				<label htmlFor='pickUpDate'>Pick-up date</label>
				<input type='date' name='pickUpDate' id='pickUpDate' />

				<label htmlFor='pickUpTime'>Pick-up time</label>
				<input type='time' name='pickUpTime' id='pickUpTime' />

				<label htmlFor='returnDate'>Return date</label>
				<input type='date' name='returnDate' id='returnDate' />

				<label htmlFor='returnTime'>Return time</label>
				<input type='time' name='returnTime' id='returnTime' />

				<label htmlFor='category'>Category</label>
				<input type='text' name='category' id='category' />

				<label htmlFor='size'>Size</label>
				<input type='text' name='size' id='size' />

				<label htmlFor='wheelSize'>Wheel size</label>
				<input type='number' name='wheelSize' id='wheelSize' />

				<label htmlFor='suspension'>Suspension</label>
				<input type='text' name='suspension' id='suspension' />

				<label htmlFor='brand'>Brand</label>
				<input type='text' name='brand' id='brand' />

				<label htmlFor='model'>Model</label>
				<input type='text' name='model' id='model' />

				<label htmlFor='material'>Material</label>
				<input type='text' name='material' id='material' />

				<button type='submit'>SHOW BIKES</button>
			</form>
		</article>
	);
};

export default HomePageRentForm;
