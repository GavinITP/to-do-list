"use client";

import Filter from "@/components/Filter";
import ItemInput from "@/components/ItemInput";
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

  return (
    <div className="mx-auto w-1/3">
      <div className="flex justify-between">
        <h1>TODO</h1>
        <input type="checkbox" />
      </div>

      <ItemInput tasks={[]} setTasks={setTasks} />

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
