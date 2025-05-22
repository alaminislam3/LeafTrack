import React, { useState } from 'react';
import { Authcontext } from './Authcontext';
import {createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.init';
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    
    //  create user (singup)/Registration
    const createUser =(email,password)=> {
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
  
      } 
    
    // login users 
    const loginUser = (email,password)=> {
        return signInWithEmailAndPassword (auth,email,password) 
    }



    const userInfo = {
        createUser,
        loginUser
    }
    return (
        <Authcontext value={userInfo}> 
           {children}
        </Authcontext>
    );
};

export default AuthProvider;