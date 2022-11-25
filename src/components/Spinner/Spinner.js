import React from 'react'
import { Spin,Alert } from 'antd';


function Spinner() {
  return (
    <div className="example">
    <Spin tip="Loading..." >
    <Alert
      message="Please Wait while Loaging In"
      description="Once Logged In you Can Get Manage Items And add Items Update it and Delete it, Thank You"
      type="info"
    />
    </Spin>
  </div>
  )
}

export default Spinner