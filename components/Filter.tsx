import { Task } from "@/app/page";
import { FilterType } from "@/app/page";

interface Props {
  tasks: Task[];
  setFilter: (filter: FilterType) => void;
  handleClearCompleted: () => void;
}

const Filter = ({ tasks, setFilter, handleClearCompleted }: Props) => {
  return (
    <div className="flex justify-between my-10">
      <p>{tasks.filter((task) => !task.completed).length} items left</p>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  );
};

export default Filter;
