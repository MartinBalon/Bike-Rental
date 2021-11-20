import Button from '../button';
import Input from '../inputs/select-input';

const ContactUsForm: React.FC = () => {
	const onSubmitHandler = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
	};

	return (
		<article>
			<h3>Contact us</h3>
			<form>
				<Input title='First name' name='firstName' type='text' />
				<Input title='Last name' name='lastName' type='text' />
				<Input title='Email' name='email' type='email' />

				<label htmlFor='message'>Message</label>
				<textarea name='message' id='message' rows={8}></textarea>

				<Button title='SEND MESSAGE' onClick={onSubmitHandler} />
			</form>
		</article>
	);
};

export default ContactUsForm;
