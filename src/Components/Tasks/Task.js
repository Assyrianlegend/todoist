import '../../App.css';
import {useContext } from 'react';
import TContext from "../../Contexts/TasksContext";
import PContext from "../../Contexts/ProjectsContext";

function Task({taskIndex, task,editTask}) {
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
      <div className='task-actions'>
          <svg onClick={(e) => {e.preventDefault(); editTask()}} className='svg-gray display-none cursor-pointer' width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.7,5.2a1.024,1.024,0,0,1,0,1.448L18.074,9.276l-3.35-3.35L17.35,3.3a1.024,1.024,0,0,1,1.448,0Zm-4.166,5.614-3.35-3.35L4.675,15.975,3,21l5.025-1.675Z"/></svg>
          <svg className='svg-gray display-none cursor-pointer' width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"/>
            <path d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"/>
            <path d="M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z" />
          </svg>
      </div>
    </div>
  );
}
   
export default Task;
    