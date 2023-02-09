import '../App.css';
import {useState,useContext } from 'react';
import ColorDot from './ColorDot';
import TContext from "../Contexts/TasksContext";
function Project({project,handleProjectClick, hideTaskCount= false}) {
  const TasksContext = useContext(TContext);

  return (
    <div onClick={handleProjectClick} className='project-div'>
        <div>
          <ColorDot color={project.color}></ColorDot>
          <span>{project.name}</span>
        </div>
        {(TasksContext.tasks[project.id] && !hideTaskCount) && 
          <span>{TasksContext.tasks[project.id].filter(task => task.date_completed == null).length}</span>         
        }
    </div>
  );
}
   
export default Project;
    