import { createContext,useContext, useEffect, useState } from 'react';

class ProjectsContext {

  constructor(){
    this.projects = [];
    this.selectedProject = {};
    this.initiate();
  }
  initiate(){
    let p = [
        {name: "Project 1", favorite: 1},
        {name: "Project 2", favorite: 1},
        {name: "Project 3", favorite: 0},
        {name: "Project 4", favorite: 0},
        {name: "Project 5", favorite: 1},
        {name: "Project 6", favorite: 0},

    ];
    this.projects = p;
    this.selectedProject = this.projects[0];
  }

  addProject(param){
    this.projects.push(param);
  }
  
  setSelectedProject(param){

    this.selectedProject = {...param};
    console.log(this.selectedProject)
  }
}
const PContext = createContext(new ProjectsContext());

export default PContext;