import React from 'react';
import '../App.css'

const TaskCounter = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <div className="task-counter box">
      {/* <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p> */}
      <p id='counter'>{completedTasks}/{totalTasks} Task Completed</p>
    </div>
  );
};

export default TaskCounter;
