import React, { useState } from 'react';
import '../App.css';
import { IoTrashOutline } from "react-icons/io5";

const TaskList = (props) => {
  const [isChecked, setIsChecked] = useState(props.task.isCompleted);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    props.onStatusChange(props.id, !isChecked);
  };

  const handleDelete = () => {
    props.onDelete(props.id);
    
  };

  return (
    <div className='item'>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={handleCheckboxChange} 
      />
      <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
        {props.task.content} <IoTrashOutline onClick={handleDelete}/>
      </p>
      
    </div>
  );
};

export default TaskList;
