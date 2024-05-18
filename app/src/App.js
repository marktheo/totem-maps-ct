import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Form from './Form.js';
import Footer from './Footer';

function App() {
	const[sala, setDados] = useState({sala: ''});
	
	const handleFormSubmit = (formData) => {
		setDados(formData);
	};

	return (
		<div className="App">
			<Header />
			<Form onSubmit={handleFormSubmit}/>
            <Footer />
		</div>
	);
};

export default App;
