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

export default App;
