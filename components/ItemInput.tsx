import { Task } from "@/app/page";

interface Props {
  tasks: Task[];
  setTasks: (callback: (prevTasks: Task[]) => Task[]) => void;
}

const ItemInput = ({ tasks, setTasks }: Props) => {
  const handleAddItem = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const newItemTitle = event.currentTarget.value.trim();
      if (newItemTitle === "") return;

      const newItem = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title: newItemTitle,
        completed: false,
      };

      setTasks((prevTasks) => [...prevTasks, newItem]);

      event.currentTarget.value = "";
    }
  };

  return (
    <div className="flex mb-4">
      <input type="checkbox" />
      <input
        className="w-full"
        type="text"
        placeholder="Create a new todo..."
        onKeyDown={handleAddItem}
      />
    </div>
  );
};

export default ItemInput;
