import { createContext,useContext, useEffect, useState } from 'react';
import React from 'react';
import ProjectsContext from "./ProjectsContext";
const TContext = createContext();

function ToastsContext({children}) {
  const PContext = useContext(ProjectsContext);
  const [toasts, setToasts] = useState([]);
  const [classes, setClasses] = useState('toast-div');
  const addToast = (toastType, projectId) => {
    //Added new Task toast
    let tt;
    if(toastType == 1){
         tt = {text: "Task added to", projectId: projectId}
    }else if(toastType == 2){
        tt = {text: "1 Task Completed", projectId: projectId}
    }
    toasts.push({...tt});
    setToasts([...toasts]);
    setClasses('toast-div slide-in-animation')
    const myTimeout = setTimeout(() => {
        clearToast(0,'slide-out');
    }, 3000);


  }

  const clearToast = (index,closeStyle) => {
    if(closeStyle == 'slide-out'){
      setClasses('toast-div slide-out-animation')
    }else if (closeStyle == "fade-out"){
      setClasses('toast-div fade-out-animation')
    }
    const myTimeout = setTimeout(() => {
        const t = [...toasts];
        t.splice(index,1)
        setToasts([...t]);
     }, 600);
  }

  const value = {
    toasts,
    classes,
    addToast,
    clearToast
  }

  return <TContext.Provider value={value}>{children}</TContext.Provider>

}
export {ToastsContext}
export default TContext;