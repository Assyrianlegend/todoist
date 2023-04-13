import '../../App.css';
import './AddTask.css';
import { useState,useContext,useEffect } from 'react';
import TasksContext from "../../Contexts/TasksContext";
import ProjectsContext from "../../Contexts/ProjectsContext";
import Project from "../Project";
import ProjectSelect from '../Projects/ProjectSelect';
function AddEditTask({activeTaskIndex,resetIndex}) {
    const defaultTask = {name:"", description:""};
    const TContext = useContext(TasksContext);
    const PContext = useContext(ProjectsContext);
    const [task, setTask] = useState({...defaultTask});
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [addingTaskExpanded, setAddingTaskExpanded] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    
    //if we are editing a task, setIt
    useEffect(() => {
        if(activeTaskIndex !== null){
            setAddingTaskExpanded(true);
            setTask(TContext.tasks[PContext.selectedProject.id][activeTaskIndex]);
            setButtonDisabled(false);
        }       
      },[activeTaskIndex]);
    useEffect(() => {
        if(PContext.selectedProject.name){
         setSelectedProject(PContext.selectedProject)
        }       
    },[PContext.selectedProject.name]);
    const setName = (e) => {
        task.name = e.target.value;
        setTask({...task});
        !task.name.length ?setButtonDisabled(true) : setButtonDisabled(false);
    }
    const setDescription = (e) => {
        setTask({...task, description: e.target.value});
    }
    function addEditNewTask() {
        TContext.addEditTask(task, activeTaskIndex);
        setTask({...defaultTask});
        setButtonDisabled(true);
        resetIndex();
    }
    return (
        <div className='margin-y'>
            {!addingTaskExpanded &&
            <div className='padding-y display-flex align-items-center cursor-pointer add-task-collapsed-main' onClick={(e) => {e.stopPropagation(); setAddingTaskExpanded(true); setTask({...defaultTask})}}>
                <svg className='plus-red feather feather-plus ' xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <span className='addTaskText' >Add Task</span> 
            </div>}
            {addingTaskExpanded && 
            <div>
                <div className='addingTaskExpandedMain'>
                    <input className='add-task-input' type="text" placeholder='Task Name' value={task.name} onChange={(e) => { setName(e)}} />
                    <input className='add-task-input' type="text" placeholder='Description' value={task.description} onChange={(e) => { setDescription(e)}}/>
                    <div>
                        <button className='btn-default'>Due Date</button>
                        <button className='btn-default margin-sm-x'>Priority</button>
                    </div>
                </div>
                <div className='display-flex justify-space-between padding-1 bottom-task-controls'>
                    {selectedProject && <ProjectSelect selectedProject={selectedProject} setTaskProject={(project) => setSelectedProject(project)}></ProjectSelect>}
                    <div>
                        <button onClick={(e) => {e.stopPropagation(); setAddingTaskExpanded(false);resetIndex()}} className="btn-secondary">Cancel</button>
                        <button className='btn-primary margin-sm-x' disabled={buttonDisabled} onClick={(e) => {e.preventDefault(); addEditNewTask()}}>{!task.id ? "Add" : "Save"}</button>
                    </div>
                </div>
            </div>
            }
        
        </div>
    );
    }
   
export default AddEditTask;
    