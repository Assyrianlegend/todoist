import '../App.css';
import ColorDot from './ColorDot';
function Project(props) {
  return (
    <div onClick={props.handleProjectClick} className='project-div'>
        <div>
          <ColorDot color={props.project.color}></ColorDot>
          <span>{props.project.name}</span>
        </div>
        <span>14</span>         
    </div>
  );
}
   
export default Project;
    