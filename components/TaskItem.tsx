import { Task } from "@/app/page";

interface Props {
  key: number;
  task: Task;
  handleCheck: (id: number) => void;
  handleDeleteItem: (id: number) => void;
}

const TaskItem = ({ key, task, handleCheck, handleDeleteItem }: Props) => {
  return (
    <div className="flex" key={key}>
      <input
        type="checkbox"
        onClick={() => handleCheck(task.id)}
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
