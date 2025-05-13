import { useState } from 'react';
import Input from './Input';

function AddTask({ onAddTaskSubmit }) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	return (
		<div className="bg-slate-500 p-6 rounded-md space-y-4 shadow-lg flex flex-col">
			<Input
				type="text"
				placeholder="Task Title"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<Input
				type="text"
				placeholder="Task Description"
				value={description}
				onChange={(event) => setDescription(event.target.value)}
			/>
			<button
				onClick={() => {
					// Verificar se o Title e o Description estão escritos
					if (!title.trim() || !description.trim()) {
						return alert('Type Title and Description');
					}
					onAddTaskSubmit(title, description);
					setTitle('');
					setDescription('');
				}}
				className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium"
			>
				Add
			</button>
		</div>
	);
}

export default AddTask;
