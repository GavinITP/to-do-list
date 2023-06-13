"use client";

import { useEffect, useState } from "react";

import ItemInput from "@/components/ItemInput";
import Status from "@/components/Status";
import TaskItem from "@/components/TaskItem";
import Filter from "@/components/Filter";
import Header from "@/components/Header";
import Image from "next/image";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export type FilterType = "all" | "active" | "completed";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));

    const theme = localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const handleDragStart = (event: React.DragEvent, taskId: string) => {
    event.dataTransfer.setData("taskId", taskId);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault(); // enables the target element to accept the dropped content
  };

  const handleDrop = (event: React.DragEvent, targetId: string) => {
    event.preventDefault();

    const sourceId = event.dataTransfer.getData("taskId");

    if (sourceId !== targetId) {
      const sourceIndex = tasks.findIndex((task) => task.id === sourceId);
      const targetIndex = tasks.findIndex((task) => task.id === targetId);

      const updatedTasks = [...tasks];
      const [removedTask] = updatedTasks.splice(sourceIndex, 1);
      updatedTasks.splice(targetIndex, 0, removedTask);

      setTasks(updatedTasks);
    }
  };

  return (
    <>
      <div className="absolute z-[-1] h-[220px] w-full">
        <div className="relative h-full">
          <Image
            src="/background/bg-mobile-light.jpg"
            alt="background"
            className="h-full w-full object-cover"
            fill={true}
          />
        </div>
      </div>

      <div className="mx-auto min-h-screen px-8 py-14">
        <Header />

        <ItemInput setTasks={setTasks} />

        <div className="overflow-hidden rounded-md shadow-sm">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              draggable
              onDragStart={(event) => handleDragStart(event, task.id)}
              onDragOver={(event) => handleDragOver(event)}
              onDrop={(event) => handleDrop(event, task.id)}
            >
              <TaskItem task={task} setTasks={setTasks} />
            </div>
          ))}
          <Status
            tasks={tasks}
            setTasks={setTasks}
            filter={filter}
            setFilter={setFilter}
          />
        </div>

        <div className="shadow-sm md:hidden">
          <Filter filter={filter} setFilter={setFilter} />
        </div>

        <p className="mt-12 text-center text-base text-gray-400">
          Drag and drop to reorder list
        </p>
      </div>
    </>
  );
};

export default Home;
