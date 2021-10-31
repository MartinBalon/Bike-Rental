const ContactUsForm: React.FC = () => {
	return (
		<article>
			<h3>Contact us</h3>
			<form>
				<label htmlFor='firstName'>First name</label>
				<input type='text' name='firstName' id='firstName' />
			</form>
			;
		</article>
	);
};

export default ContactUsForm;
