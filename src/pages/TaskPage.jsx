import { ChevronLeftIcon } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function TaskPage() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const title = searchParams.get('title');
	const description = searchParams.get('description');
	return (
		<div className="w-screen h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center p-6">
			<div className="w-[500px] space-y-4">
				<div className="flex space-x-2 justify-center relative mb-6">
					<button
						onClick={() => navigate(-1)}
						className="text-white absolute left-0 bottom-0 bg-slate-500 rounded-full p-1"
					>
						<ChevronLeftIcon />
					</button>
					<h1 className="font-bold text-3xl text-white drop-shadow-lg font-sans text-center">
						Task Details
					</h1>
				</div>

				<div className="bg-slate-500 p-6 rounded-md space-y-4 shadow-lg">
					<h2 className="text-2xl w-full text-left text-white font-bold">
						{title}
					</h2>
					<p className="w-full text-left text-white font-normal">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default TaskPage;
