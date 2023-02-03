import { createContext,useContext, useEffect, useState } from 'react';
import React from 'react';
const PContext = createContext();
function ProjectsContext({children}) {
  const [projects, setProjects] = useState([{id: 1, name: "Project 1"}]);
  const [selectedProject, setSelectedProject] = useState({});
 
  if(!selectedProject.id && projects.length){
    setSelectedProject(projects[0])
  }
  const addProject = (param) => {
    param.id = Math.floor(Math.random() * 100000);
    projects.push(param);
    setProjects(projects);
    if(projects.length == 1){
      setSelectedProject(param);
    }
  }
  
  const value = {
    projects,selectedProject,setProjects,setSelectedProject,addProject
  }
  return <PContext.Provider value={value}>{children}</PContext.Provider>
}
export {ProjectsContext};
export default PContext;