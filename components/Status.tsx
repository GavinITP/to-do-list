import { Task } from "@/app/page";

interface Props {
  tasks: Task[];
  setTasks: (callback: (prevTasks: Task[]) => Task[]) => void;
}

const Status = ({ tasks, setTasks }: Props) => {
  const handleClearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  return (
    <div className="flex h-14 items-center justify-between bg-white px-6 text-sm text-gray-500">
      <p>{tasks.filter((task) => !task.completed).length} items left</p>
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  );
};

export default Status;
