import '../../App.css';
import ProjectsContext from "../../Contexts/ProjectsContext";
import LeftNavSection from "../Nav/LeftNavSection"
import { useContext,useState } from 'react';

function LeftNav() {
  return (
    <div className='left-nav'>
        <LeftNavSection showAddButton={false} favoriteSection={true}></LeftNavSection>
        <LeftNavSection showAddButton={true} favoriteSection={false}></LeftNavSection>
    
    </div>
  );
}
   
export default LeftNav;
    