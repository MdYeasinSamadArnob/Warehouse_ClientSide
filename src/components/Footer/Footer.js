import React from 'react'
import {useNavigate} from "react-router-dom"

function Footer() {

    const navigate = useNavigate()

  return (
    <footer className="h-[345px] w-full bg-gray-800">
        <div className=" bg-gray-800 mx-auto h-full w-full lg:w-3/5 flex flex-col justify-center items-center">
         <div className="w-full flex justify-start items-center mt-3 px-4 lg:px-0">
                <p onClick={()=>navigate("/")} className="text-left text-white text-xs lg:text-base font-medium mr-8 cursor-pointer">Home</p>
                <p className="text-left text-white text-xs lg:text-base font-medium mr-8 cursor-pointer">Community</p>
                <p className="text-left text-white text-xs lg:text-base font-medium mr-8 cursor-pointer">Careers</p>
                <p className="text-left text-white text-xs lg:text-base font-medium mr-5 cursor-pointer">Help</p>
                <p className="text-left text-white text-xs lg:text-base font-medium mr-5 cursor-pointer">Privacy</p>

         </div>
         <div className='w-full'>
             <hr className="w-full bg-[#475467] mt-16 h-0" />
         </div>
         <div className='w-full flex justify-between items-center mt-4'>
                <p className="text-center text-white text-[9px] lg:text-base font-normal mt-4">© 2022 ElectroManufacturer, All rights reserved.</p>
                <div className="flex justify-center items-center">
                <p className="text-center text-white text-[9px] lg:text-base font-normal mt-4 mx-2 cursor-pointer">Terms</p>
                <p className="text-center text-white text-[9px] lg:text-base font-normal mt-4 mx-2 cursor-pointer">Privacy</p>
                <p className="text-center text-white text-[9px] lg:text-base font-normal mt-4 mx-2 cursor-pointer">Cookies</p>
                </div>
         </div>
        </div>
           
    </footer>
  )
}

export default Footer