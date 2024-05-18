<<<<<<< HEAD
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Footer />
        </div>
    );
}
=======
import React, {useState} from 'react';
import Form from './Form.js';

function App() {
	const[sala, setDados] = useState({sala: ''});
	
	const handleFormSubmit = (formData) => {
		setDados(formData);
	};

	return (
		<div>
			<Form onSubmit={handleFormSubmit}/>
		</div>
	);
};
>>>>>>> 5e45e67b84822d9df4155a2e4e8e834988e7aa00

export default App;
