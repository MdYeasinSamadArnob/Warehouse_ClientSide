import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../../../components/Spinner/Spinner';
import useAdmin from '../../../hooks/useAdmin';

// import { Spin } from 'antd';
// import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if(user){
        console.log(user)
    }

    if (loading) {
        // return <Loading></Loading>
        return <Spinner></Spinner>
    }

    if (admin) {
        localStorage.setItem('admin', true);
    }

    if (!user && !loading) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // if(user.emailVerified) {
    //       return <Navigate to={location} state={{ from: location }} replace />
    // }


    // This part is for email verification

    // if (!user?.emailVerified && !loading) {
    //     return <div className='text-center  h-screen'>
    //         <h3 className='text-red-600 pt-28'>Your Email is not verified!!</h3>
    //         <h5 className='text-blue-600'> Please Verify your email address</h5>
    //         <button
    //         className='text-center text-white font-bold rounded py-2 w-2/12 focus:outline-none bg-gray-900 border-2 border-indigo-400'
    //             onClick={async () => {
    //                 await sendEmailVerification();
    //                 toast('Sent email');
    //             }}
    //         >
    //             Send Verification Email Again
    //         </button>
           
    //          {/* {loading && <Spinner></Spinner>} */}
    //          {sending && <Spinner></Spinner>}
    //         <ToastContainer></ToastContainer>
    //     </div>
    // }

    return children;
};

export default RequireAuth;