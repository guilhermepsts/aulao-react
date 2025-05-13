import { useState } from 'react';

function App() {
	const [message, setMessage] = useState('Olá, mundo!');

	const [contador, setContador] = useState(0);

	// State
	return (
		<div>
			<h1>{message}</h1>
			<button
				onClick={() => {
					setMessage('Foi clicado');
				}}
			>
				Mudar mensagem
			</button>

			<p>{contador}</p>
			<button
				onClick={() => {
					setContador(contador + 1);
				}}
			>
				Adicionar
			</button>
			<button
				onClick={() => {
					setContador(0);
				}}
			>
				Zerar
			</button>
		</div>
	);
}

export default App;
