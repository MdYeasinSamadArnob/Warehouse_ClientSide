import React from 'react'
import { FlagOutlined, SaveOutlined,UsergroupAddOutlined,SmileOutlined } from '@ant-design/icons';

function TrustSection() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center w-full h-full my-10">
        <h1 className="text-center font-bold text-3xl my-3">Million Business Trust Us</h1>
        <p className="text-xl font-bold text-[#28AAA9] my-3 mb-8 text-center">We Try to understant User Expectations</p>
    <div className="flex flex-wrap justify-center items-center mx-auto">
        <div className="flex flex-col justify-center items-center mx-8 my-5">
        <FlagOutlined style={{ fontSize: '32px', color:"#28AAA9" }} />
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">72</h1>
            <p className="text-xl font-bold text-[#28AAA9]">Countries</p>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-8 my-5">
        <SaveOutlined  style={{ fontSize: '32px', color:"#28AAA9" }} />
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">535+</h1>
            <p className="text-xl font-bold text-[#28AAA9]">Complete Projects</p>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-8 my-5">
        <UsergroupAddOutlined   style={{ fontSize: '32px', color:"#28AAA9" }} />
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">237+</h1>
            <p className="text-xl font-bold text-[#28AAA9]">Happy Clients</p>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-8 my-5">
        <SmileOutlined    style={{ fontSize: '32px', color:"#28AAA9" }} />
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">400+</h1>
            <p className="text-xl font-bold text-[#28AAA9]">Feedbacks</p>
            </div>
        </div>
        
        

    </div>
    </div>
  )
}

export default TrustSection