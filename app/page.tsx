const Home = () => {
  const tasks = [
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
        />
      </div>

      <ul>
        {tasks.map((task) => {
          return (
            <div className="flex" key={task.id}>
              <input type="checkbox" />
              <li className="flex-grow">{task.title}</li>
              <button className="bg-red-300">delete icon</button>
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
