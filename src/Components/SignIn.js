import '../App.css';
import './SignIn.css';

import {useState,useContext } from 'react';
function SignIn() {
  return (
    <div className='h-100-vw display-flex flex-column justify-content-center login-div'>
       <h2 className='text-color-light'>Login</h2>
       <div className='input-group'>
        <span className='text-color-light'>
          Email
        </span>
        <input type="text" className='form-input margin-sm-y signup-input' placeholder='Enter Your Email...'/>
       </div>
       <div className='input-group margin-y'>
        <span className='text-color-light'>
          Password
        </span>
        <input type="password" className='form-input margin-sm-y signup-input' placeholder='Enter Your Password...'/>
       </div>
       <button className='btn btn-primary'>Log In</button>
       <span className='text-color-light sign-up-text margin-y'>Don't have an account? <a className='text-color-light' href='/signup'>Sign Up</a> </span>
    </div>
  );
}
   
export default SignIn;
    