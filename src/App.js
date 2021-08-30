import './App.css';
import Index from 'pages/Index';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Index />
			</Router>
		</div>
	);
};

export default App;
