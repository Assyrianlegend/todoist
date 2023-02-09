import '../../App.css';
import Task from "./Task"
import AddEditTask from "./AddEditTask";
import {useState,useContext } from 'react';
import TasksContext from "../../Contexts/TasksContext";
import ProjectsContext from "../../Contexts/ProjectsContext";
function Tasks() {
  const ProjectTasks = useContext(TasksContext).tasks;
  const PContext = useContext(ProjectsContext);
  const [activeTaskIndex, setActiveTaskIndex] = useState(null);
  function setTask(index){
    setActiveTaskIndex(index)
  }
  return (
    <div>
        {ProjectTasks[PContext.selectedProject.id] && ProjectTasks[PContext.selectedProject.id].map((task, index) => {
            if(!task.date_completed && (activeTaskIndex != index)){
              return <Task key={index} task={task} taskIndex={index} editTask={() => {setTask(index)}}></Task>
            }else if(!task.date_completed && activeTaskIndex == index){
              return <AddEditTask  key={index} activeTaskIndex={activeTaskIndex} resetIndex={() => {setActiveTaskIndex(null)}}></AddEditTask>
            }
         })}
        <AddEditTask activeTaskIndex={null} resetIndex={() => {setActiveTaskIndex(null)}}></AddEditTask>
    </div>
  );
}
   
export default Tasks;
    