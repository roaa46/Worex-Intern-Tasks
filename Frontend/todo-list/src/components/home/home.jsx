import { useState } from "react";
import Task from "../task/task";
import "./home.css";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTitleOfTask] = useState("");

  const onAdd = () => {
    if(!newTaskTitle.trim()) {
      alert("Task title is required");
      return;
    }
    const newTask = {
      id: Date.now(),
      title: newTaskTitle
    };
    setTasks([...tasks, newTask]);
    setNewTitleOfTask("");
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };
  return (
    <div className="home-container">
      <h1 className="home-title">Track your tasks</h1>
      <div className="input-container">
        <input type="text" value={newTaskTitle} onChange={(e) => setNewTitleOfTask(e.target.value)}
          placeholder="Enter new task..." className="task-input"/>
        <button onClick={onAdd} className="add-button"> Add Task </button>
      </div>
      <div className="tasks-container">
        {tasks.length === 0 ? (<div className="empty-list"> No tasks yet. Add your first task above! </div>) :
        (
          tasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              onDelete={() => {
              deleteTask(task.id);
              }}
            />
          ))
        )
        }
      </div>
    </div>
  );
}

export default Home;
