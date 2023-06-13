import { FilterType, Task } from "@/app/page";
import Filter from "./Filter";

interface Props {
  tasks: Task[];
  setTasks: (callback: (prevTasks: Task[]) => Task[]) => void;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const Status = ({ tasks, setTasks, filter, setFilter }: Props) => {
  const handleClearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  return (
    <div className="flex h-14 items-center justify-between bg-white px-6 text-sm text-gray-500 dark:bg-slate-700 dark:text-slate-400">
      <p>{tasks.filter((task) => !task.completed).length} items left</p>
      <div className="hidden md:block">
        <Filter
          filter={filter}
          setFilter={(filter: FilterType) => setFilter(filter as FilterType)}
        />
      </div>
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  );
};

export default Status;
