import { Task } from "@/app/page";

interface Props {
  task: Task;
  setTasks: (callback: (prevTasks: Task[]) => Task[]) => void;
}

const TaskItem = ({ task, setTasks }: Props) => {
  const handleDeleteItem = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleCheck = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex">
      <input
        type="checkbox"
        onChange={() => handleCheck(task.id)}
        checked={task.completed}
      />
      <li className={`flex-grow ${task.completed && "line-through"}`}>
        {task.title}
      </li>
      <button className="bg-red-300" onClick={() => handleDeleteItem(task.id)}>
        delete icon
      </button>
    </div>
  );
};

export default TaskItem;
