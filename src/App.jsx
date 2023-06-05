import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleOnChange = (e) => {
    setTasks([...tasks, e.target.value]);
  };

  return (
    <main className="h-full">
      <div className="m-auto max-w-6xl w-full">
        <div className="flex row gap-3 py-2  px-4 border-2 bg-gray-100 justify-center rounded-md items-center w-1/3 m-auto shadow-md">
          <input
            type="text"
            placeholder="Type here..."
            onChange={(e) => handleOnChange(e)}
            className="outline-none bg-transparent w-full"
          />
          <FaSearch className="cursor-pointer text-[19px]" />
        </div>
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}

export default App;
