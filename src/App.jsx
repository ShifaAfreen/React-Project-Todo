import React, { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Heading from './components/Heading';
import TaskCounter from './components/TaskCounter';
import { v4 as uuidv4 } from 'uuid'; 
import Footer from './components/Footer';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleAdd(taskContent) {
    const newTask = { id: uuidv4(), content: taskContent, isCompleted: false };
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  }

  function handleStatusChange(id, isCompleted) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function handleDelete(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  const getHeading = () => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    if (totalTasks === 0) {
      return 'My Task';
    } else if (completedTasks === totalTasks) {
      return 'You Crushed It!';
    } else {
      return 'You\'re Almost There!';
    }
  };

  return (
    <div>
      <Heading heading={getHeading()} /> 
      <TaskCounter tasks={tasks} />
      <div className="box">
        <TaskForm onAdd={handleAdd} />
        {
          tasks.map((task) => {
            return (
              <TaskList 
                key={task.id} 
                id={task.id} 
                task={task} 
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
              />
            )
          })
        }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
