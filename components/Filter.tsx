import { Task } from "@/app/page";
import { FilterType } from "@/app/page";

interface Props {
  tasks: Task[];
  setFilter: (filter: FilterType) => void;
  setTasks: (callback: (prevTasks: Task[]) => Task[]) => void;
}

const Filter = ({ tasks, setFilter, setTasks }: Props) => {
  const handleClearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  return (
    <div className="my-10 flex justify-between text-sm">
      <p>{tasks.filter((task) => !task.completed).length} items left</p>
      <div className="gap-10">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  );
};

export default Filter;
