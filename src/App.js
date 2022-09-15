import "./App.css";
import { useState } from "react";
import {Task} from "./Task";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    
    
    const task  = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
      
    }
    setToDoList(task.taskName!==""?  [...toDoList, task] :toDoList)
  };
const DeleteTask = (id) => {
      setToDoList(toDoList.filter((task) => task.id !== id))

}
const completeTask = (id) => {
  setToDoList(toDoList.map((task) => {
    if (task.id === id) {
      return {...task, completed: true}
  } else {
    return task;
  }
  })
  );
};
    return (
      <div className="App">
        <div className="addTask">
          <input onChange={handleChange} />
          <button onClick={addTask}>Add task</button>
          </div>
        <div className="List">
        {toDoList.map((task) => {
        return <Task taskName={task.taskName} id={task.id} completed={task.completed} DeleteTask={DeleteTask} completeTask={completeTask} />;
        })}
        </div>
        </div>
  );
 
};

  export default App;