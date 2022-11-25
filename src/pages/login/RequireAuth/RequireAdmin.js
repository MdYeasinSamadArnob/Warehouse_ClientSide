import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
// import Loading from '../Shared/Loading';
import useAdmin from '../../../hooks/useAdmin';
import { signOut } from 'firebase/auth';
import Spinner from '../../../components/Spinner/Spinner';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if(loading || adminLoading){
        // return <Loading></Loading>
        return <Spinner/>
    }

    if(admin){
        localStorage.setItem('admin', true);
    }

    if(!user || !admin){
        // signOut(auth);
        localStorage.setItem('admin', false);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;