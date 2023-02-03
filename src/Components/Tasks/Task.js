import '../../App.css';
import {useContext } from 'react';
import TContext from "../../Contexts/TasksContext";
import PContext from "../../Contexts/ProjectsContext";

function Task({taskIndex, task}) {
  const TasksContext = useContext(TContext);
  const ProjectsContext = useContext(PContext);

  function markTaskCompleted(){
      task.date_completed = new Date();
      TasksContext.updateTask(ProjectsContext.selectedProject.id,taskIndex, task)
  };
  return (
    <div className='task-main-div'>
      <div onClick={(e) => { e.stopPropagation(); markTaskCompleted(task)}} className='customRadio'>
        <svg className='checkSvg' fill="#5f5f5f"
          width="30px" height="30px" viewBox="0 0 78.369 78.369"
          xmlSpace="preserve">
          <g>
          <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704
            c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704
            C78.477,17.894,78.477,18.586,78.049,19.015z"/>
          </g>
        </svg>
      </div>
      <div className='display-flex flex-column'>
        <span>{task.name}</span>
        <span>Jan 7 9:00 AM</span>    
      </div>
     
    </div>
  );
}
   
export default Task;
    