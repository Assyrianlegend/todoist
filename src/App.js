import './App.css';
import LeftNav from "./Components/Nav/LeftNav";
import MainView from './Components/MainView';
import { createContext,useContext, useEffect, useState } from 'react';
import ProjectContext from "./Contexts/ProjectsContext";

function App() {
  return (
    <div className="main-container">
        <LeftNav></LeftNav>
        <MainView></MainView>
    </div>
  );
}
   
export default App;
