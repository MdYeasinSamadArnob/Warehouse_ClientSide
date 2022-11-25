import React from 'react'
import { Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

function RateUs() {
  return (
    <div>
      <div>
      <h1 className="font-extrabold text-2xl text-center mb-3"> Rate US </h1>
      </div>
      
     <p className="flex flex-col justify-center items-center my-5">
        
    <Rate className="text-orange-500 text-3xl" defaultValue={2} character={({ index }) => index + 1} />
    <br />
    <Rate className="text-orange-500 text-3xl"   defaultValue={3} character={({ index }) => customIcons[index + 1]} />
    </p>
    
   
    </div>
    
  )
}

export default RateUs