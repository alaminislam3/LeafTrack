import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import {createUserWithEmailAndPassword,   GoogleAuthProvider,   onAuthStateChanged,   signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.init';
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    const [plants,setPlants]=useState([])
    
    //  create user (singup)/Registration
    const createUser =(email,password)=> {
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
  } 

      // user info (photo)
    const updateUser=(updateData)=> {
        return updateProfile(auth.currentUser,updateData)
    }
    
    // login users 
    const loginUser = (email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password) 
    }
    //  logout user 
   const logout = () => {
    return signOut (auth).then(()=> {
       //   console.log("logout successfully");
    }).catch(error => {
       console.log(error);
    })
 }

    // google singin
    const provider = new GoogleAuthProvider();
   const googleSing= ()=> {
       return signInWithPopup(auth,provider)
       .then((result)=> {
         // console.log(result);
       }).catch(error=> {
         console.log(error);
       })
   }
   // loading data and will send it 3 page 
   useEffect(()=>{
      fetch('http://localhost:3000/addplant')
      .then(res=> res.json())
      .then(data=> setPlants(data))
      .catch(error=> {console.log(error)})
   },[])



   // user observation
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
          setUser(currentUser);
          setLoading(false)
    })
    return unsubscribe 
},[])



    const userInfo = {
        createUser,
        loginUser,
        loading,
        googleSing,
        user,
        logout,
        updateUser,
        setUser,
        plants
    }
    return (
        <Authcontext value={userInfo}> 
           {children}
        </Authcontext>
    );
};

export default AuthProvider;