import '../App.css';
import './SignIn.css';
import {useState,useContext } from 'react';
import AuthContext from "../Contexts/AuthContext";

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const a = AuthContext();
  const AuthContextProvider = useContext(a);

  const signUpClick = () => {
    AuthContextProvider.handleSignup(email, password);
  }
  return (
    <div className='h-100-vw display-flex flex-column justify-content-center login-div'>
       <h2 className='text-color-light'>Sign Up</h2>
       <div className='input-group'>
        <span className='text-color-light'>
          Email
        </span>
        <input type="text" className='form-input margin-sm-y signup-input' value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Your Email...'/>
       </div>
       <div className='input-group margin-y'>
        <span className='text-color-light'>
          Password
        </span>
        <input type="password" className='form-input margin-sm-y signup-input' value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Your Password...'/>
       </div>
       <button className='btn btn-primary' onClick={signUpClick}>Sign up with Email</button>
       <span className='text-color-light sign-up-text margin-y'>Already Signed up? <a className='text-color-light' href='/signin'>Go To Login</a> </span>
    </div>
  );
}
   
export default SignUp;
    