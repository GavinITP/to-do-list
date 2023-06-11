"use client";

import { useEffect, useState } from "react";

import ItemInput from "@/components/ItemInput";
import Status from "@/components/Status";
import TaskItem from "@/components/TaskItem";
import Filter from "@/components/Filter";
import Header from "@/components/Header";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export type FilterType = "all" | "active" | "completed";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }

    const theme = localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }
    if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  return (
    <div className="mx-auto min-h-screen px-8 py-14">
      <Header />

      <ItemInput tasks={tasks} setTasks={setTasks} />

      <div className="overflow-hidden rounded-md">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} setTasks={setTasks} />
        ))}
        <Status
          tasks={tasks}
          setTasks={setTasks}
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      <div className="md:hidden">
        <Filter filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
};

export default Home;
