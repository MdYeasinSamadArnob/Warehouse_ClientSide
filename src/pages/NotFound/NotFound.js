import React from 'react'
import { Result, Button } from 'antd';
import {useNavigate} from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate();
  return (
    <div className="p-20">
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button onClick={()=>navigate("/")} className="bg-blue-500 text-white hover:text-black">Back Home</Button>}
  />
  </div>
  )
}

export default NotFound