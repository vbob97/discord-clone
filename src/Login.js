import React from 'react';
import { Button } from '@mui/material';

import {auth,provider} from './firebase';
import {signInWithPopup} from "firebase/auth";
import './Login.css';

function Login() {
    const signin =  () => {
      signInWithPopup(auth,provider).catch((error)=>alert(error.message))
    };
  return (
    <div className='login'>
       <h2> é la login page!</h2>

        <div className='login__logo'>
            <img alt='' src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png'/>
        </div>
        <Button onClick={signin}>Sign In</Button>
    </div>
    
  )
}

export default Login