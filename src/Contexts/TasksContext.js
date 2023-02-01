import { createContext,useContext, useEffect, useState } from 'react';
import React from 'react';
import ProjectsContext from "./ProjectsContext";
import ToastContext from "./ToastContext";
const TContext = createContext();

function TasksContext({children}) {
  const PContext = useContext(ProjectsContext);
  const ToastCont = useContext(ToastContext);

  const [tasks, setTasks] = useState({});
  const addTask = (task) => {
    const t  = {...tasks};
    if(!t[PContext.selectedProject.id]){
      t[PContext.selectedProject.id] = []
    }
    t[PContext.selectedProject.id].push({...task});
    setTasks(t);
    ToastCont.addToast(1, PContext.selectedProject.id);
  }
  const value = {
    tasks,
    addTask
  }

  return <TContext.Provider value={value}>{children}</TContext.Provider>

}
export {TasksContext}
export default TContext;