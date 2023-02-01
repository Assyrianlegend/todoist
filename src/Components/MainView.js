import '../App.css';
import Tasks from "./Tasks/Tasks"
import ProjectsContext from "../Contexts/ProjectsContext";
import { useContext } from 'react';

function MainView() {
  const selectedProject = useContext(ProjectsContext).selectedProject;
  return (
    <div className='main-div'>
        {selectedProject.name &&
          <div>
          <h3>{selectedProject.name}</h3>
          <Tasks></Tasks>    
        </div>
        }
        {!selectedProject.name &&
        <div className='display-flex align-items-center justify-content-center h-100'>
          <span>Add a project to continue!</span>
        </div>
        }
    </div>
  );
}
   
export default MainView;
    