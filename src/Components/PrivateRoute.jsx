import React, { use } from 'react';
import { Authcontext } from '../Layout/Context/Authcontext';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';

const PrivateRoute = ({children}) => {
    const location =useLocation();
     const {user,loading} =use(Authcontext)
     if(loading){
        return <Loading> </Loading>
    }
     if(user){
        return children
     }
     return <Navigate state={location.pathname} to={'/login'}> </Navigate>
     
};

export default PrivateRoute;