import { createContext,useContext, useEffect, useState } from 'react';
import React from 'react';
import ProjectsContext from "./ProjectsContext";
import ToastContext from "./ToastContext";
const TContext = createContext();

function TasksContext({children}) {
  const PContext = useContext(ProjectsContext);
  const ToastCont = useContext(ToastContext);

  const [tasks, setTasks] = useState({"1": [{name: "Task 1", id: "22"}]});
  const addTask = (task) => {
    task.id = Math.floor(Math.random() * 100000);

    const t  = {...tasks};
    if(!t[PContext.selectedProject.id]){
      t[PContext.selectedProject.id] = []
    }
    t[PContext.selectedProject.id].push({...task});
    setTasks(t);
    ToastCont.addToast(1, PContext.selectedProject.id);
  }
  const updateTask = (projectId,taskIndex, task) => {
    const t  = {...tasks};
    t[projectId][taskIndex] = {...task};
    setTasks(t);
    ToastCont.addToast(2, null)
  }
  const value = {
    tasks,
    addTask,
    updateTask
  }

  return <TContext.Provider value={value}>{children}</TContext.Provider>

}
export {TasksContext}
export default TContext;