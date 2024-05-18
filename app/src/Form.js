import React, {useState} from 'react';

function Form({onSubmit}){
	const [sala, setSala] = useState('');
	
	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit({sala}); //Envia dados para componente pai (lifting_state_up)
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="cod">Sala:</label>
				<input
					type="text"
					id="sala"
					value={sala}
					onChange={(e) => setSala(e.target.value)}
				/>
			</div>
			<div>
				<button type="submit">Enviar</button>
			</div>
			
		</form>
	);
}

export default Form;
