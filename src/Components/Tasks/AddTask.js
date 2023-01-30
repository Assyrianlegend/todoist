import '../../App.css';
import './AddTask.css';
import { useState } from 'react';
import TasksContext from "../../Contexts/TasksContext";

function AddTask() {
const [newTask, setNewTask] = useState({name:"", description:""});
const [buttonDisabled, setButtonDisabled] = useState(true);
const [addingTaskExpanded, setAddingTaskExpanded] = useState(false);

const setName = (e) => {
    e.preventDefault();
    newTask.name = e.target.value; 
    setNewTask(newTask)
    !newTask.name.length ?setButtonDisabled(true) : setButtonDisabled(false);
  
}
const setDescription = (e) => {
    e.preventDefault();
    newTask.description = e.target.value; 
    setNewTask(newTask);
}
const addNewTask = (e) => {

}
return (
    <div>
        {!addingTaskExpanded &&
        <div className='padding-y display-flex align-items-center cursor-pointer add-task-collapsed-main' onClick={(e) => {e.stopPropagation(); setAddingTaskExpanded(true)}}>
            <svg className='plus-red feather feather-plus ' xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <span className='addTaskText' >Add Task</span> 
        </div>}
        {addingTaskExpanded && 
        <div>
            <div className='addingTaskExpandedMain'>
                <input className='add-task-input' type="text" placeholder='Task Name' onChange={(e) => { setName(e)}}/>
                <input className='add-task-input' type="text" placeholder='Description' onChange={(e) => { setDescription(e)}}/>
                <div>
                    <button className='btn-default'>Due Date</button>
                    <button className='btn-default margin-sm-x'>Priority</button>
                </div>
            </div>
            <div className='display-flex justify-content-end padding-y'>
                <button onClick={(e) => {e.stopPropagation(); setAddingTaskExpanded(false)}} className="btn-secondary">Cancel</button>
                <button className='btn-primary margin-sm-x' disabled={buttonDisabled} onClick={(e) => {e.preventDefault(); addNewTask()}}>Add</button>
            </div>
        </div>
        }
       
    </div>
  );
}
   
export default AddTask;
    