import {useContext, useEffect } from 'react';
import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Dashboard from './Pages/Dashboard';
import {Routes, Route,useNavigate, useLocation } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
      <Routes>
          <Route exact path="/" element={<SignIn/>} />
          <Route exact path="/signin" element={<SignIn/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact element={<PrivateRoutes/>}>
            <Route exact element={<Dashboard/>} path="/dashboard"></Route>
          </Route>
      </Routes>
  );
}
   
export default App;

/*
function App() {
  const a = AuthContext();
  const AuthContextProvider = useContext(a);
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
     if(!AuthContextProvider.authToken && (!AuthContextProvider.authToken && location.pathname != "/signup")){
      let didCancel = false;
      const goToSignIn = () => navigate('/signin');
      if (!didCancel) { goToSignIn(); }
      return () => { didCancel = true; };
    }
   }, [AuthContextProvider.authToken]);
  return (
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/signin" element={<SignIn/>} />
          <Route exact path="/signup" element={<SignUp/>} />
      </Routes>
  );
}

     <PublicRoute restricted={false} component={SignIn} path="/signin" exact />
          <PublicRoute restricted={false} component={SignUp} path="/signup" exact />
          <PrivateRoute restricted={true} component={Dashboard} path="/dashboard" exact />
*/ 