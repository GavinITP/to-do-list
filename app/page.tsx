"use client";

import Filter from "@/components/Filter";
import ItemInput from "@/components/ItemInput";
import TaskItem from "@/components/TaskItem";
import Image from "next/image";
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
    <div className="mx-auto min-h-screen px-8 py-14">
      <div className="mb-10 flex items-baseline justify-between">
        <h1 className="text-3xl font-bold tracking-[0.5rem] text-white">
          TODO
        </h1>
        <button>
          <Image
            src="icons/icon-moon.svg"
            width={22}
            height={22}
            alt="toggle theme button"
          />
        </button>
      </div>

      <ItemInput tasks={tasks} setTasks={setTasks} />

      <div>
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
      </div>
    </div>
  );
};

export default Home;
