import React,{useState,useEffect} from 'react'
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { MailOutlined  } from '@ant-design/icons';
import { Checkbox } from 'antd';
import styles from "./Login.module.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import socialIcon from "../../images/SocialIconGoogle.svg"
import useToken from '../../hooks/useToken';
import Spinner from '../Spinner/Spinner';
// import { Spin } from 'antd';





function LoginSection(props) {

    const navigate= useNavigate()
    const location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user1,loading1, error1] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail,sending] = useSendPasswordResetEmail(auth);

    
    
    const [token] = useToken(user);
    const [token2] = useToken(user1);


    let from = location.state?.from?.pathname || "/";

    
    if (token || token2) {
        navigate(from, { replace: true });
    }

    let errorElement;

    // if (user || user1) {
    //     console.log('user', user);  
    //     console.log('user signed Up ', user);  
    //  console.log('user1 signed Up ', user1);
    //  if(user1._tokenResponse.isNewUser){
    //     // values.user["name"]=user.displayName;
    //     // values.user["email"]=user.email;
    //     let values={
    //         name: user1.displayName,
    //         email: user1.email,
    //         role:"none"

    //     }
        
    //     fetch('https://warehouse-serverside-537o.onrender.com/updateuser', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(values),
    //     })
    
    //       .then((res) => res.json())
    //       .then((result) => {
    //         console.log(result);
    //         // setInitialValue(result)
    //         // alert('Profile Updated Successfully');
    //       })

    //  }
    //    }

    // if (error || error1) {
    //     errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    // }

    

    // if (user || user1) {
    //     navigate('/');
    // }
    

   


    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [valid,setValid]=useState(true)
    const [validPassword,setValidPassword]=useState(true)
    const [validEmail,setValidEmail]=useState(true)


    console.log(props)

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }


      const resetPassword = async () => {
        
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }


      const handlePasswordCheck = e => {
        setPassword(e.target.value);
      };

      const handleSubmit = e => {
        e.preventDefault();
        
        console.log(`password = ${password}`);

      

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            console.log("Email is correct");
            setValidEmail(true)
        }else{
            setValidEmail(false)
    alert("You have entered an invalid email address!")
        }

        //Check Password is minimum 8 characters
        if (password.length < 8) {
            setValidPassword(false)
            alert("Password must be at least 8 characters long.");
           
        }   else{
            setValidPassword(true)
        }

        if(validEmail && validPassword ){
            //do stuffs
            signInWithEmailAndPassword(email,password)
        }

    // }
        };

        const handleEmail= e => {
            setEmail(e.target.value);
        }

  return (
    <div className=" bg-no-repeat h-screen   bg-[length:200px_400px] md:bg-[length:15%_120%] bg-[position:0%_50%] lg:bg-[position:0%_10%] ">
     <div className=" bg-no-repeat md:bg-auto h-full bg-right-bottom bg-[length:30%]">
         <section className="md:w-1/2 w-11/12 mx-auto flex flex-col justify-start pt-10 md:pt-0 md:justify-center items-center h-full space-y-4">

             <h1 className="font-semibold text-3xl mb-0 mt-12 lg:mt-0">Log in to your account</h1>
             <p className="font-normal text-base mt-3">Welcome back! Please enter your details.</p>
             <form onSubmit={handleSubmit} className="space-y-5">
             <div id='email' className="flex flex-col">
                 <label className="font-normal text-sm text-gray-700">Email</label>
             <Input status={valid?"":"error"} onChange={handleEmail} required id="emailInput" className=" rounded-lg w-[360px] h-[44px] " placeholder="Enter your email" prefix={<MailOutlined className="text-[#667085] mr-2  font-normal text-lg pb-1" />}/>
             </div>
             <div id='email' className="flex flex-col">
             <label className="font-normal text-sm text-gray-700">Password</label>
             <Input.Password
             required
             id="passwordInput"
             status={valid?"":"error"}
             className=" rounded-lg w-[360px] h-[44px] "
             placeholder="Enter your password"
             onChange={handlePasswordCheck}
             iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
            
            {!valid && <p className="text-red-500 text-xs italic">User Does not exist,Please Enter a Valid Password or Email</p>}
            {/* {errorElement && <p className="text-red-500 text-xs italic">User Does not exist,Please Enter a Valid Password or Email</p>} */}
             </div>
             <div className="flex justify-between items-center w-[360px]">
             <Checkbox id="checkbox" onChange={onChange}><span className="font-medium text-sm">Remember for 30 days</span></Checkbox>
             <p onClick={()=>resetPassword()} className="mb-0 font-medium text-sm text-[#0273CE] cursor-pointer">Forgot password</p>
             </div>
             {/* {accountError?<p className="text-red-500 text-xs italic">{accountError}</p>:""} */}
             <div className="w-[360px]">
             <button  type="submit" className={`bg-gray-800 text-white ${styles.signup} max-w-[360px]   w-full font-medium text-base`}>Login</button>
             </div >
             </form>
             <div className="w-[360px]">
             <button onClick={() => signInWithGoogle()} className={` border border-[#D0D5DD] ${styles.signup} max-w-[360px]   w-full font-medium text-base flex justify-center items-center bg-white`}>
                 <img src={socialIcon} width={25} height={25} /> 
                 <span className="ml-2">Log in with Google</span>
                 </button>
             </div >
             <div className="w-[360px]">
                 <p className="text-center">Don’t have an account? <span className="mb-0 font-medium text-sm text-[#0273CE] cursor-pointer " onClick={()=>navigate("/signup")}>Sign up</span></p>
                 
             </div>
             {loading1 && <Spinner></Spinner>}
             {loading && <Spinner></Spinner>}
             {sending && <Spinner></Spinner>}


             </section>
             
             <ToastContainer />
         </div>
            
    </div>
  )
}

export default LoginSection