"use client";

import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

type Filter = "all" | "active" | "completed";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  // Get tasks when opening the app
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  // Save when tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const handleClearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
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
        {tasks
          .filter((task) => {
            if (filter === "active") return !task.completed;
            if (filter === "completed") return task.completed;
            return task;
          })
          .map((task) => (
            <div className="flex" key={task.id}>
              <input
                type="checkbox"
                onClick={() => handleCheck(task.id)}
                checked={task.completed}
              />
              <li className={`flex-grow ${task.completed && "line-through"}`}>
                {task.title}
              </li>
              <button
                className="bg-red-300"
                onClick={() => handleDeleteItem(task.id)}
              >
                delete icon
              </button>
            </div>
          ))}

        <div className="flex justify-between my-10">
          <p>{tasks.filter((task) => !task.completed).length} items left</p>
          <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
          </div>
          <button onClick={handleClearCompleted}>Clear Completed</button>
        </div>
      </ul>
    </div>
  );
};

export default Home;
