import { createContext,useContext, useEffect, useState } from 'react';

class TasksContext {
  //const TaskContext = createContext();

  constructor(){
    this.tasks = {};
  }

  addTask(param){
    this.tasks.push({name: 'Name 1'});
  }

}
const TContext = createContext(new TasksContext());

export default TContext;