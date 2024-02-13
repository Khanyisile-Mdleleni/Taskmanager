import React, { useState } from 'react';
import Tasks from '../Tasks/Tasks'
import './Board.scss'; 

const Board = () => {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: 'Task 1', status: 'In Progress', dueDate: new Date('2024-02-12'), assignee: 'John Doe', priority: 'High' },
  ]);

  // Function to categorize tasks into different sections
  const categorizeTasks = () => {
    const categorizedTasks = {
      todo: [],
      inProgress: [],
      completed: [],
    };

    tasks.forEach(task => {
      switch (task.status) {
        case 'To Do':
          categorizedTasks.todo.push(task);
          break;
        case 'In Progress':
          categorizedTasks.inProgress.push(task);
          break;
        case 'Completed':
          categorizedTasks.completed.push(task);
          break;
        default:
          break;
      }
    });

    return categorizedTasks;
  };

  const categorizedTasks = categorizeTasks();

  return (
    <div className="board-page">
      <div className="board-column todo-column">
        <h3>To Do ({categorizedTasks.todo.length})</h3>
        <ul>
          {categorizedTasks.todo.map(task => (
            <li key={task.id}>{task.taskName} - {task.dueDate.toLocaleDateString()} - {task.assignee} - {task.priority}</li>
          ))}
        </ul>
      </div>
      <div className="board-column inprogress-column">
        <h3>In Progress ({categorizedTasks.inProgress.length})</h3>
        <ul>
          {categorizedTasks.inProgress.map(task => (
            <li key={task.id}>{task.taskName} - {task.dueDate.toLocaleDateString()} - {task.assignee} - {task.priority}</li>
          ))}
        </ul>
      </div>
      <div className="board-column completed-column">
        <h3>Completed ({categorizedTasks.completed.length})</h3>
        <ul>
          {categorizedTasks.completed.map(task => (
            <li key={task.id}>{task.taskName} - {task.dueDate.toLocaleDateString()} - {task.assignee} - {task.priority}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Board;
