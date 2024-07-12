import React, { useState } from 'react'



const TaskForm = (props) => {
const [task, setTask] = useState("");

  function handleChange(ev){
    setTask(ev.target.value);
    }

  function submitTask(ev){
    if (task.trim()) {
      props.onAdd(task);
      setTask("");
    }
    ev.preventDefault();
  }

  return (
    <div >
        <form action="">
        <input type="text" placeholder="Add task here.." value={task} onChange={handleChange}  />
        <button className='add' onClick={submitTask}>+</button>
        </form>
    </div>
  )
}

export default TaskForm