import '../App.css';
import react from 'react';
import { createContext,useContext, useEffect, useState } from 'react';
import ProjectContext from "../Contexts/ProjectsContext";
import ColorDot from "../Components/ColorDot";
function AddProjectModal({closeModal}) {
  const projects = useContext(ProjectContext);

  const colorConstant = {
    Charcoil: "#808080"
  };

  const colors = [
    {color: colorConstant.Charcoil, name: "Charcoal"},
    {color: "#b8256f", name: "Berry Rad"},
    {color: "#db4035", name: "Red"},
    {color: "#ff9933", name: "Orange"},
    {color: "#fad100", name: "Yellow"},
    {color: "#b0b83b", name: "Olive Green"},
    {color: "#7ecc48", name: "Lime Green"},
    {color: "#289438", name: "Green"},
    {color: "#6bccbc", name: "Mint Green"},
    {color: "#1490ad", name: "Teal"},
    {color: "#18aaf5", name: "Sky Blue"},
    {color: "#18aaf5", name: "Light Blue"},
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState({name: "", color: colorConstant.Charcoil, favorite: 0});

  const selectColor = (color) => {
    activeProject.color = color.color;
    setActiveProject(activeProject);
    setIsOpen(false);
  }
  const setFavorite = () =>  {
    activeProject.favorite = activeProject.favorite ? 0 : 1;
    setActiveProject(activeProject);
    console.log(activeProject);
  }
  const setName = (e) => {
    e.preventDefault();
    activeProject.name = e.target.value; 
    setActiveProject(activeProject);
  }

  function doAddNewProject(){
    closeModal();
    activeProject.id = Math.random(1,10000000);
    projects.addProject(activeProject);
  }


  return (
    <div className="modal">
    <div className="modal-content">
        <div className='padding-1 modal-name-div'>
            <span className='modal-name'>Add Project</span>
        </div>
        <div className='padding-1'>
            <label className='form-label'>Name</label>
            <input className='form-input' type="text" onChange={(e) => { setName(e)}}/>
        </div>
        <div className='padding-1'>
          <label className='form-label'>Color</label>
          <div className='dropDown'>
            <button 
              className="dropdown-button"
              onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen)}}
            >
              <ColorDot color={activeProject.color}></ColorDot>Figure this shit out later
            </button>
            {isOpen && (
              <ul className="dropdown-content">
                {colors.map((color, key) => {
                  return <li className='color-picker-li' onClick={(e) => { e.stopPropagation(); selectColor(color)}} key={key}><ColorDot color={color.color}></ColorDot>{color.name}</li>
                })}
              </ul>
            )}
          </div>
        </div>
        <div className='padding-1 display-flex align-items-center'>
          <label onClick={(e) => { e.stopPropagation(); setFavorite()}} className="switch">
            <input type="checkbox" defaultChecked={activeProject.favorite}></input>
            <span className="slider round"></span>
          </label>           
          Add to Favorites
        </div>
        <div className='padding-1 modal-footer-div'>
            <button onClick={(e) => { e.stopPropagation(); closeModal()}} className="btn-secondary">Cancel</button>
            <button className='btn-primary' onClick={(e) => { e.stopPropagation(); doAddNewProject()}}>Add</button>
        </div>
    </div>
  </div>
  );
}
   
export default AddProjectModal;
    