"use client";

import Filter from "@/components/Filter";
import TaskItem from "@/components/TaskItem";
import { useEffect, useState } from "react";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export type FilterType = "all" | "active" | "completed";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

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
            <TaskItem key={task.id} task={task} setTasks={setTasks} />
          ))}

        <Filter
          tasks={tasks}
          setFilter={(filter: FilterType) => setFilter(filter as FilterType)}
          setTasks={setTasks}
        />
      </ul>
    </div>
  );
};

export default Home;
