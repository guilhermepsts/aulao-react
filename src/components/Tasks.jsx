import { ChevronRightIcon, TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
	const navigate = useNavigate();

	function onSeeDetailsClick(task) {
		const query = new URLSearchParams();
		query.set('title', task.title);
		query.set('description', task.description);
		navigate(`/task?${query.toString()}`);
	}

	return (
		<ul className="bg-slate-500 p-6 rounded-md space-y-4 shadow-lg">
			{tasks.map((task) => (
				<li key={task.id} className="flex gap-2">
					<button
						onClick={() => {
							onTaskClick(task.id);
						}}
						className={`bg-slate-200 p-2 rounded-md w-full text-left text-black font-medium ${
							task.isCompleted && 'line-through'
						}`}
					>
						{task.title}
					</button>
					<button
						onClick={() => onSeeDetailsClick(task)}
						className="bg-slate-400 p-2 rounded-md text-white"
					>
						<ChevronRightIcon />
					</button>
					<button
						onClick={() => {
							onDeleteTaskClick(task.id);
						}}
						className="bg-slate-400 p-2 rounded-md text-white"
					>
						<TrashIcon />
					</button>
				</li>
			))}
		</ul>
	);
}
export default Tasks;
