import { createContext,useContext, useEffect, useState } from 'react';
import React from 'react';
import ProjectsContext from "./ProjectsContext";
import ToastContext from "./ToastContext";
const TContext = createContext();

function TasksContext({children}) {
  const PContext = useContext(ProjectsContext);
  const ToastCont = useContext(ToastContext);

  const [tasks, setTasks] = useState({"1": [{name: "Task 1", id: 22}]});
  const addEditTask = (task,activeTaskIndex) => {
    const t  = {...tasks};

    if(!t[PContext.selectedProject.id]){
      t[PContext.selectedProject.id] = []
    }
    if(!task.id){
      task.id = Math.floor(Math.random() * 100000);
      t[PContext.selectedProject.id].push({...task});
      ToastCont.addToast(1, PContext.selectedProject.id);
    }else{
      t[PContext.selectedProject.id][activeTaskIndex] = task;
    }
    setTasks(t);
  }
  const updateTask = (projectId,taskIndex, task) => {
    const t  = {...tasks};
    t[projectId][taskIndex] = {...task};
    setTasks(t);
    ToastCont.addToast(2, null)
  }
  const value = {
    tasks,
    addEditTask,
    updateTask
  }

  return <TContext.Provider value={value}>{children}</TContext.Provider>

}
export {TasksContext}
export default TContext;