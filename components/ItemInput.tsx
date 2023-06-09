import { Task } from "@/app/page";

import { v4 } from "uuid";

interface Props {
  setTasks: (callback: (prevTasks: Task[]) => Task[]) => void;
}

const ItemInput = ({ setTasks }: Props) => {
  const handleAddItem = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const newItemTitle = event.currentTarget.value.trim();
      if (newItemTitle === "") return;

      const newItem = {
        id: v4(),
        title: newItemTitle,
        completed: false,
      };

      setTasks((prevTasks) => [...prevTasks, newItem]);

      event.currentTarget.value = "";
    }
  };

  return (
    <div className="mb-4 flex h-14 items-center rounded-md bg-white px-6 shadow-sm dark:bg-slate-700 dark:text-white">
      <input
        type="checkbox"
        className="h-6 w-6 rounded-full border-gray-300 dark:border-slate-600 dark:bg-slate-700"
        disabled
      />
      <input
        className="ml-4 w-full border-none text-sm ring-0 focus:outline-none dark:border-slate-600 dark:bg-slate-700"
        placeholder="Create a new todo..."
        onKeyDown={handleAddItem}
      />
    </div>
  );
};

export default ItemInput;
