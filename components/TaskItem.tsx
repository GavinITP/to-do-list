import { Task } from "@/app/page";
import Image from "next/image";

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
    <div className="border-1 border-grey-300 flex h-14 items-center border-solid bg-white px-6">
      <input
        type="checkbox"
        className="h-6 w-6 rounded-full border-gray-300"
        onChange={() => handleCheck(task.id)}
        checked={task.completed}
      />
      <div
        className={`ml-4 w-full flex-grow border-none text-sm ring-0 focus:outline-none ${
          task.completed && "line-through"
        } `}
      >
        {task.title}
      </div>
      <button onClick={() => handleDeleteItem(task.id)}>
        <Image
          src="icons/icon-cross.svg"
          width={20}
          height={20}
          alt="delete item"
        />
      </button>
    </div>
  );
};

export default TaskItem;
