import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';
import LoadingSpener from '../sharedfile/LoadingSpener';

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const auth = getAuth(app);
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <LoadingSpener></LoadingSpener>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;