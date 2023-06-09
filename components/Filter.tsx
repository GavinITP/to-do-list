import { FilterType } from "@/app/page";

interface Props {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const Filter = ({ filter, setFilter }: Props) => {
  return (
    <div className="my-4 flex h-14 items-center justify-center rounded-md bg-white px-6 text-base font-bold text-gray-400 dark:bg-slate-700 dark:text-slate-400">
      <button
        className={`focus:text-blue active:text-blue mx-3 ${
          filter === "all" ? "text-blue-500" : ""
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`focus:text-blue active:text-blue mx-3 ${
          filter === "active" ? "text-blue-500" : ""
        }`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={`focus:text-blue active:text-blue mx-3 ${
          filter === "completed" ? "text-blue-500" : ""
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
