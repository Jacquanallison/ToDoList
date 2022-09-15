import "./App.css";
import { useState } from "react";
import {Task} from "./Task"

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value)
  };

  const addTask = () => {
    const newToDoList = [...toDoList, newTask];
    setToDoList(newToDoList, task)
    const task  = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
    }

  };
};
const DeleteTask = (id) => {
      setToDoList(toDoList.filter((task) => task.id !== id))


    return (
      <div className="App">
        <div className="addTask">
          <input onChange={handleChange} />
          <button onClick={addTask}>Add task</button>
          </div>
        <div className="List">
        {toDoList.map((Task) => {
        return <Task taskName={task.taskName} id={task.id} DeleteTask={DeleteTask} />;
        })}
        </div>
        </div>
  );
 };

  export default App;