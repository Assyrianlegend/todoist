import '../App.css';
import {ProjectsContext} from "../Contexts/ProjectsContext";
import {TasksContext} from "../Contexts/TasksContext";
import {ToastsContext} from "../Contexts/ToastContext";
import LeftNav from "../Components/Nav/LeftNav";
import MainView from '../Components/MainView';
import Toast from "../Components/Toast";

function Dashboard() {
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
   
export default Dashboard;
    