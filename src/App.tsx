import HomePage from './pages/home';

import Header from './components/header';
import Footer from './components/footer';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<HomePage />
			<Footer />
		</>
	);
};

export default App;
