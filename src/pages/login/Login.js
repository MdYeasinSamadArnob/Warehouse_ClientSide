import React from 'react'
import LoginSection from '../../components/LoginSection/LoginSection'
import {useNavigate} from 'react-router-dom'
import auth from '../../firebase.init'
import { useAuthState} from 'react-firebase-hooks/auth';
import useToken from "../../hooks/useToken";
import PageTitle from '../../components/PageTitle/PageTitle';


function Login() {

  const navigate = useNavigate()
  const [user, loading] = useAuthState(auth);
  const [token] = useToken(user);

  if (user && token) {
    navigate('/')
  }


  return (
    <div>
        {/* <Navbar/> */}
        <PageTitle title="Login"></PageTitle>
        <LoginSection/>
        {/* <Footer/> */}
    </div>
  )
}

export default Login