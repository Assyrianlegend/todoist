import { createContext,useContext, useEffect, useState } from 'react';
import React from 'react';
import ProjectsContext from "./ProjectsContext";
const TContext = createContext();

function ToastsContext({children}) {
  const PContext = useContext(ProjectsContext);
  const [toasts, setToasts] = useState([]);

  const addToast = (toastType, projectId) => {
    //Added new Task toast
    let tt;
    if(toastType == 1){
         tt = {text: "Task added to", projectId: projectId}
    }
    toasts.push({...tt});
    setToasts({...toasts});
  }
  const value = {
    toasts,
    addToast
  }

  return <TContext.Provider value={value}>{children}</TContext.Provider>

}
export {ToastsContext}
export default TContext;