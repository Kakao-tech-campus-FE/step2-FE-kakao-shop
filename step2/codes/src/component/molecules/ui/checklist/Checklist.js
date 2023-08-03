import React, { useState } from 'react';
import './checklist.css';

const Checklist = () => {
    const [tasks, setTasks] = useState([
      { id: 1, description: 'Task 1', completed: false },
      { id: 2, description: 'Task 2', completed: false },
      { id: 3, description: 'Task 3', completed: false }
    ]);
  
    const listCheck = (taskId) => {
      setTasks(tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }));
    };
  
    return (
      <div class = 'checklistcontainer'>
        <h1>Checklist</h1>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <input type="checkbox" checked={task.completed} onChange={() => listCheck(task.id)}/>{task.description}</li>
          ))}
        </ul>
      </div>
    );
  };


// const Checklist = (number) => {
//     const [check, setCheck] = useState(false);

//     const handleChecklist = () => {
//         setCheck((prev) => !prev)
//     };
    
//     return(
//         <div class = 'container' style={}>
//             <div class = {`check_cover${number}`}>
//             <button class = {`check ${check ? 'on' : 'off'}`} onClick = {handleChecklist}></button></div>
//         </div>
//     )
// }

export default Checklist