import "./task.css";

function Task(props) {
  return (
    <div className="task-item">
      <h6 className="task-title">{props.title}</h6>
      <div className="task-actions">
        <button onClick={props.onDelete} className="delete-button">Delete</button>
      </div>
    </div>
  );
}

export default Task;
