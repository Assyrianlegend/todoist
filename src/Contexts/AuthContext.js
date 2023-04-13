import { createContext, useState } from 'react';
import { signup } from '../Api/Auth';
import {useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function AuthContext() {
  console.log('is this getting hit')
    const [authToken, setAuthToken] = useState(false);
    let navigate = useNavigate();

    const authenticate = () => {
        //setAuthToken(false);
      };
    
      const handleSignOut = () => {
        //setAuthToken(false);
      };

      const handleSignIn = (token) => {
        //setAuthToken(token);
      };

      const handleSignup = async(email, password) => {
        console.log('hitting')
        const token =  await signup(email, password);
        console.log('token' + token);
        setAuthToken(token);
        console.log('token222 '  + authToken);
      };

      const AContext = createContext({
        authToken, authenticate, handleSignOut,handleSignIn,handleSignup
     });

     useEffect(() => {
      if(authToken){
        console.log(authToken);
        navigate('/dashboard');
      }
    },[authToken])

    return AContext;

}
export default AuthContext;
