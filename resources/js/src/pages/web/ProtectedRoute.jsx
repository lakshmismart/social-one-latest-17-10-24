import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children})=>{
    const token = sessionStorage.getItem('authtoken');
    console.log("get token : ", token)

    if(!token){
        <Navigate to="/login"/>
    }

    return children;
}

export default ProtectedRoute;