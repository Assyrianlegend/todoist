import '../../App.css';
import ProjectsContext from "../../Contexts/ProjectsContext";
import AddProjectModal from '../AddProjectModal';
import Project from "../Project";
import { useContext,useState } from 'react';

function LeftNav() {
  const PContext = useContext(ProjectsContext);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const addProjectModal = (event) => {
    event.preventDefault();
  }

  function handleProjectClick(project){
    PContext.setSelectedProject(project);
  }

  return (
    <div className='left-nav'>
        <div className='projects-parent-div'>
          <div className='display-flex justify-space-between'>
            <span className='projects-label'>Favorites</span>
            <svg className='svg-gray cursor-pointer' width="14px" height="14px" viewBox="0 0 199.404 199.404" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <g>
                  <polygon points="199.404,63.993 171.12,35.709 99.702,107.127 28.284,35.709 0,63.993 99.702,163.695 	"/>
                </g>
            </svg>
          </div>
            {PContext.projects.map((project, index) => {
            if (project.favorite) {
              return <Project key={index} project={project} handleProjectClick={() => handleProjectClick(project)}></Project>
            }
            })}
         
        </div>
        <div className='projects-parent-div'>
            <div className='display-flex justify-space-between'>
              <span className='projects-label'>Projects</span>
              <div>
                <a href="#" onClick={addProjectModal}>
                  <svg onClick={(e) => { e.stopPropagation(); setAddModalOpen(true)}} className='svg-gray' xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </a>
                <svg className='svg-gray cursor-pointer' width="14px" height="14px" viewBox="0 0 199.404 199.404" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <g>
                    <polygon points="199.404,63.993 171.12,35.709 99.702,107.127 28.284,35.709 0,63.993 99.702,163.695 	"/>
                  </g>
                </svg>
              </div>
            </div>
            
            {PContext.projects.map((project, index) => {
            if (!project.favorite) {
              return <Project key={index} project={project} handleProjectClick={() => handleProjectClick(project)}></Project>
            }
            })}
        </div>
        {isAddModalOpen && <AddProjectModal closeModal={() => setAddModalOpen(false)}></AddProjectModal>}
    </div>
  );
}
   
export default LeftNav;
    