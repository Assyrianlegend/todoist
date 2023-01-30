import '../../App.css';
import Task from "./Task"
import AddTask from "./AddTask";
import {useState } from 'react';
function Tasks() {
  const [addingTaskExpanded, setAddingTaskExpanded] = useState(false);
  return (
    <div >
        <Task></Task>
        <AddTask cancel={() => setAddingTaskExpanded(false)}></AddTask>
    </div>
  );
}
   
export default Tasks;
    