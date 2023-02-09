import '../../App.css';
import ProjectsContext from "../../Contexts/ProjectsContext";
import AddProjectModal from '../AddProjectModal';
import Project from "../Project";
import { useContext,useState } from 'react';

function LeftNavSection({showAddButton, favoriteSection}) {
  const PContext = useContext(ProjectsContext);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [collapsedArrow, setCollapsedArrow] = useState('svg-gray cursor-pointer arrow display-none');
  const [collapsedSection, setCollapsedSection] = useState('project-section-collapsed');
  const addProjectModal = (event) => {
    event.preventDefault();
  }

  function handleProjectClick(project){
    PContext.setSelectedProject(project);
  }
  function toggleCollapse(){
    setCollapsedArrow(collapsedArrow == "svg-gray cursor-pointer arrow display-none" ? 'svg-gray cursor-pointer arrow-collapsed display-none' : 'svg-gray cursor-pointer arrow display-none');
    setCollapsedSection(collapsedSection == "project-section-collapsed" ? 'project-section' : 'project-section-collapsed');
    
  }
  return (
      <div className='projects-parent-div'>
         <div className='display-flex justify-space-between'>
              <span className='projects-label'>{favoriteSection ? "Favorites" : "Projects"}</span>
              <div>
                {showAddButton && <a href="#" onClick={addProjectModal}>
                  <svg onClick={(e) => { e.stopPropagation(); setAddModalOpen(true)}} className='svg-gray cursor-pointer display-none' xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </a>
                }
                <svg onClick={(e) => { e.stopPropagation(); toggleCollapse()}} className={collapsedArrow} width="14px" height="14px" viewBox="0 0 199.404 199.404" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <g>
                    <polygon points="199.404,63.993 171.12,35.709 99.702,107.127 28.284,35.709 0,63.993 99.702,163.695 	"/>
                  </g>
                </svg>
                
              </div>
            </div>
            <div className={collapsedSection}>
              {PContext.projects.map((project, index) => {
                if (favoriteSection && project.favorite) {
                  return <Project key={index} project={project} handleProjectClick={() => handleProjectClick(project)}></Project>
                }else if(!favoriteSection && !project.favorite){
                  return <Project key={index} project={project} handleProjectClick={() => handleProjectClick(project)}></Project>
                }
              })}
            </div>
       
          {isAddModalOpen && <AddProjectModal closeModal={() => setAddModalOpen(false)}></AddProjectModal>}
       </div>
       
  );
}
   
export default LeftNavSection;
    