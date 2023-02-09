import '../../App.css';
import './ProjectSelect.css';
import { useContext,useState,useEffect } from 'react';
import PContext from "../../Contexts/ProjectsContext";
import Project from "../Project";

function ProjectSelect(props) {
const ProjectContexts = useContext(PContext);
const [selectedProject, setSelectedProject] = useState({});
useEffect(() => {
    if(ProjectContexts.selectedProject.name){
     setSelectedProject(ProjectContexts.selectedProject)
    }       
},[ProjectContexts.selectedProject.name]);

  return (
     <div >
      <label className='dropdown'>
        <div className='select-project-button'>
          {selectedProject.name && <Project project={selectedProject} handleProjectClick={() =>{}} hideTaskCount={true}></Project>}
          <svg width="10px" height="10px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/></svg>
        </div>
        <input type="checkbox" className="dd-input" id="test"></input>
        <ul className="dd-menu">
          <input className='search-input' type="text" placeholder='Type a project'/>
          {ProjectContexts.projects.map((project, index) => {
            return <Project key={index} project={project} ></Project>  
          })
          }
        </ul>
      </label>
       
    </div>

  );
}
   
export default ProjectSelect;
    