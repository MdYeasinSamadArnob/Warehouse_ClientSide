import React,{useEffect,useState} from 'react'
import { TailwindNavbar } from "tailwind-navbar-react";
import "./tailwind-pre-build.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
import { signOut } from 'firebase/auth';
import {useNavigate,Link} from "react-router-dom"

function Header() {

    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const [signedIn,setSignedIn] = useState(false)


  useEffect(()=>{
    if(user){
        setSignedIn(true)
        console.log('user signed Up ', user);  
   
     if(user?._tokenResponse?.isNewUser){
        // values.user["name"]=user.displayName;
        // values.user["email"]=user.email;
        let values={
            name: user.displayName,
            email: user.email,
            role:"none"

        }
        
        fetch('https://warehouse-serverside-537o.onrender.com/updateuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
    
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            // setInitialValue(result)
            // alert('Profile Updated Successfully');
          })

     }
    }
    else{
        setSignedIn(false)
    }
    },[user])


    console.log(user)




    const links = [
        {
          name: "Blogs",
          link: "/blogs",
          _id:"1"
        },
        {
          name: "My PortFolio",
          link: "/myportfolio",
          _id:"2"
        },
        {
          name: "Log IN",
          link: "/login",
          _id:"3"
        },
        
      ];


    const handleSignOut = () => {
      signOut(auth)
      
      .then(() => {
        localStorage.setItem('admin', false);
        navigate("/login")
      })
      .catch(error => {
        console.log(error)
      })
    }


      const handleLogin = () => {
          return (
              <div className="flex flex-col lg:flex-row">
                  {/* <Link
                    className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400 transition-all duration-200"
                    to="/manageinventory"
                  >
                    Manage Items
                  </Link> */}
                  {/* <Link
                    className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400 transition-all duration-200"
                    to="/addinventory"
                  >
                    Add Items
                  </Link> */}
                  {/* <Link
                    className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400 transition-all duration-200"
                    to="/myitems"
                  >
                    My Items
                  </Link> */}
                  <Link
                    className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400 transition-all duration-200"
                    to="/dashboard/myprofile"
                  >
                    Dashboard
                  </Link>
              <div className="flex justify-center items-center">
                  
          <p onClick={handleSignOut} className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400 transition-all duration-200 cursor-pointer">Log OUT</p>
          {user?.photoURL && <img src={ user?.photoURL} className="rounded-full w-10 h-10 mx-2 lg:mx-1" alt="User profile" />}
          </div>
          </div>
          )
        }


  return (
    <TailwindNavbar
        
        brand={
          <p onClick={()=>navigate("/")} className="text-xl font-bold italic ">⚡ElectroManufacturer</p>
        }
        className="py-1 bg-gray-800"
      >
        <nav>
          <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
            {links.map(link => {
              // It should be noted that here we would normally use <Link> or
              // whatever other link JSX element your router uses; since all our
              // links are external here we just use <a>
              return (
                <li key={link._id}>
                  {link.name==="Log IN" && signedIn?handleLogin():<Link
                    className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400 transition-all duration-200"
                    to={link.link}
                  >
                    {link.name}
                  </Link>}
                </li>
              );
            })}
           
            {/* {signedIn && <img src={user.photoURL} className="rounded-full w-8 h-8" alt="User profile" />} */}
           
          </ul>
        </nav>
      </TailwindNavbar>
  )
}

export default Header