import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Login from './Login';
import {selectUser} from './features/userSlice';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {auth} from './firebase';
import {login,logout } from './features/userSlice';

function App() {
  const dispatch=useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged( (authUser)=>{
        if (authUser) {
          //utente loggato
          dispatch(
            login({
              uid : authUser.uid,
              photo: authUser.photoURL,
              email: authUser.email,
              displayName: authUser.displayName
          }))
        } else {
          //utente non loggato
          dispatch(logout());
        }
    });
  }, [dispatch])
  return (
    <div className="app">
      {user ? (
        <>
        <Sidebar />
        <Chat />
        </>
      ):
      (
       <Login />
      )
      }

    </div>
  );
}

export default App;
