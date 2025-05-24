import React, { use } from 'react';
import { Authcontext } from '../Layout/Context/Authcontext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
     const {user} =use(Authcontext)
     if(user){
        return children
     }
     return <Navigate to={'/login'}> </Navigate>
     
};

export default PrivateRoute;