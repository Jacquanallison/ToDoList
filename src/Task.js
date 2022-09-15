export const Task = (props) => {
    return (<div className="task">
      <h1>{props.taskName}</h1>
      <button>Completed</button>
      <button onClick={() => props.DeleteTask(props.id)}>Delete</button>
      </div>
    );
};