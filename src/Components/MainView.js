import '../App.css';
import Tasks from "./Tasks/Tasks"
import ProjectContext from "../Contexts/ProjectsContext";
import { useContext } from 'react';

function MainView() {
  const selectedProject = useContext(ProjectContext).selectedProject;
  console.log('main nav');
  console.log(selectedProject)
  return (
    <div className='main-div'>
        <h3>{selectedProject.name}</h3>
        <Tasks></Tasks>    
    </div>
  );
}
   
export default MainView;
    