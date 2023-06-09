"use client";

import { useState } from "react";

const Home = () => {
  const dummyTasks = [
    {
      id: 1,
      title: "Buy groceries",
      completed: false,
    },
    {
      id: 2,
      title: "Do laundry",
      completed: false,
    },
    {
      id: 3,
      title: "Walk the dog",
      completed: true,
    },
    {
      id: 4,
      title: "Clean the house",
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState(dummyTasks);

  const handleAddItem = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const newItemTitle = event.currentTarget.value || "";
      if (newItemTitle === "") return;

      const newItem = {
        id: tasks[tasks.length - 1].id + 1,
        title: newItemTitle,
        completed: false,
      };
      setTasks([...tasks, newItem]);
      event.currentTarget.value = "";
    }
  };

  const handleDeleteItem = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="w-1/3 mx-auto">
      <div className="flex justify-between">
        <h1>TODO</h1>
        <input type="checkbox" />
      </div>

      <div className="flex mb-4">
        <input type="checkbox" />
        <input
          className="w-full"
          type="text"
          placeholder="Create a new todo..."
          onKeyDown={handleAddItem}
        />
      </div>

      <ul>
        {tasks.map((task) => {
          return (
            <div className="flex" key={task.id}>
              <input type="checkbox" />
              <li className="flex-grow">{task.title}</li>
              <button
                className="bg-red-300"
                onClick={() => handleDeleteItem(task.id)}
              >
                delete icon
              </button>
            </div>
          );
        })}

        <div className="flex justify-between my-10">
          <p>{tasks.length} items left</p>
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <button>Clear Completed</button>
        </div>
      </ul>
    </div>
  );
};

export default Home;
