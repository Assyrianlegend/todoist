import '../../App.css';
import Task from "./Task"
import AddTask from "./AddTask";
import {useState,useContext } from 'react';
import TasksContext from "../../Contexts/TasksContext";
import ProjectsContext from "../../Contexts/ProjectsContext";
function Tasks() {
  const ProjectTasks = useContext(TasksContext).tasks;
  const PContext = useContext(ProjectsContext);

  const [addingTaskExpanded, setAddingTaskExpanded] = useState(false);
  return (
    <div >
        {ProjectTasks[PContext.selectedProject.id] && ProjectTasks[PContext.selectedProject.id].map((task, index) => {
            return <Task key={index} task={task}></Task>
         })}
        <AddTask cancel={() => setAddingTaskExpanded(false)}></AddTask>
    </div>
  );
}
   
export default Tasks;
    