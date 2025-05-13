import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useEffect, useState } from 'react';

function App() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem('tasks')) || [],
	);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	// useEffect(() => {
	// 	const fetchTasks = async () => {
	// 		const response = await fetch(
	// 			'https://jsonplaceholder.typicode.com/todos?_limit=10',
	// 			{ method: 'GET' },
	// 		);

	// 		const data = await response.json();
	// 		console.log(data);

	// 		setTasks(data);
	// 	};

	// 	// fetchTasks();
	// }, []);

	function onTaskClick(taskId) {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) {
				return { ...task, isCompleted: !task.isCompleted };
			}
			return task;
		});

		setTasks(newTasks);
	}

	function onDeleteTaskClick(taskId) {
		const newTasks = tasks.filter((task) => task.id != taskId);
		setTasks(newTasks);
	}

	function onAddTaskSubmit(title, description) {
		const newTasks = {
			id: tasks.length + 1,
			title,
			description,
			isCompleted: false,
		};
		setTasks([...tasks, newTasks]);
	}

	return (
		<div className="w-screen h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex justify-center p-6">
			<div className="w-[500px] space-y-4">
				<h1 className="font-bold text-3xl text-white drop-shadow-lg font-sans text-center">
					Task Manager
				</h1>
				<AddTask onAddTaskSubmit={onAddTaskSubmit} />
				<Tasks
					tasks={tasks}
					onTaskClick={onTaskClick}
					onDeleteTaskClick={onDeleteTaskClick}
				/>
			</div>
		</div>
	);
}

export default App;
