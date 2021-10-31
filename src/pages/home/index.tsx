import ContactUsForm from '../../components/forms/contact-us-form';
import AboutUs from '../../components/home-page/about-us';
import AboveFold from '../../components/home-page/above-fold';
import Locations from '../../components/home-page/locations';

const HomePage: React.FC = () => {
	return (
		<main>
			<AboveFold />
			<AboutUs />
			<Locations />
			<ContactUsForm />
		</main>
	);
};

export default HomePage;
