import './App.css';
import LeftNav from "./Components/Nav/LeftNav";
import MainView from './Components/MainView';
import Toast from "./Components/Toast";
import { createContext,useContext, useEffect, useState } from 'react';
import {ProjectsContext} from "./Contexts/ProjectsContext";
import {TasksContext} from "./Contexts/TasksContext";
import {ToastsContext} from "./Contexts/ToastContext";

function App() {
  return (
    <ToastsContext>
      <ProjectsContext>
        <TasksContext>
          <div className="main-container">
            <LeftNav></LeftNav>
            <MainView></MainView>
            <Toast></Toast>
          </div>
        </TasksContext>
      </ProjectsContext>
    </ToastsContext>
  );
}
   
export default App;
