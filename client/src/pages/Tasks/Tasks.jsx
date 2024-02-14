import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Tasks.scss";

const Tasks = () => {
  const [data, setData] = useState(() => {
    // Load tasks from local storage on component mount
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState({
    taskName: "",
    status: "To Do",
    dueDate: new Date(),
    assignee: "",
    priority: "Low",
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Save tasks to local storage whenever data changes
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleCreateTask = () => {
    const id = data.length + 1;
    const task = {
      id,
      ...newTask,
    };
    setData((prevData) => [...prevData, task]);
    setNewTask({
      taskName: "",
      status: "To Do",
      dueDate: new Date(),
      assignee: "",
      priority: "Low",
    });
    setShowForm(false); // Hide the form after creating a task
  };

  const handleDeleteTask = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleEditTask = (id) => {
    const task = data.find((item) => item.id === id);
    setNewTask(task);
    setShowForm(true);
  };

  return (
    <div>
      {!showForm && (
        <button className="button" onClick={() => setShowForm(true)}>
          Create Task
        </button>
      )}
      {showForm && (
        <div className="create-task">
          <h2>Create Task</h2>
          <div className="input-group">
            <label>Task Name:</label>
            <input
              type="text"
              name="taskName"
              value={newTask.taskName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Status:</label>
            <select
              name="status"
              value={newTask.status}
              onChange={handleInputChange}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="input-group">
            <label>Due Date:</label>
            <DatePicker
              selected={newTask.dueDate}
              onChange={(date) => {
                const formattedDate = date.toISOString().split("T")[0]; // Convert to yyyy-MM-dd format
                setNewTask((prevState) => ({
                  ...prevState,
                  dueDate: formattedDate,
                }));
              }}
              dateFormat="yyyy-MM-dd"
            />
          </div>
          <div className="input-group">
            <label>Assignee:</label>
            <input
              type="text"
              name="assignee"
              value={newTask.assignee}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Priority:</label>
            <select
              name="priority"
              value={newTask.priority}
              onChange={handleInputChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button onClick={handleCreateTask}>Create Task</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      )}
      <br />
      <br />
      <table className="editable-table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Assignee</th>
            <th>Priority</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.taskName}</td>
              <td>{item.status}</td>
              <td>
                {item.dueDate instanceof Date
                  ? item.dueDate.toLocaleDateString()
                  : item.dueDate}
              </td>

              <td>{item.assignee}</td>
              <td>{item.priority}</td>
              <td>
                <button onClick={() => handleDeleteTask(item.id)}>
                  Delete
                </button>
                <button
                  className="task-button"
                  onClick={() => handleEditTask(item.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
