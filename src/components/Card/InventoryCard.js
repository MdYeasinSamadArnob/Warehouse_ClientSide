import React from 'react'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const { Meta } = Card;

function InventoryCard({value}) {

    const navigate = useNavigate();

  const navigateToInventoryDetail = id =>{
    navigate(`/purchase/${id}`);
}
  return (
    <div className="md:mx-5 my-5 ">
    <Card
    hoverable
    style={{ width: 370, margin: '5px 10px' , padding: '10px 5px',height:575}}
    cover={
      <img
        alt="example"
        src={value.image}
        className="w-48 mx-auto h-56"
        />
    }
    actions={[
    //   <SettingOutlined key="setting" />,
    <div onClick={()=>navigateToInventoryDetail(value._id)} className="h-8 ">
      <EditOutlined style={{ fontSize: '20px', color: '#08c' }} key="edit" />
      </div>
    //   <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
    //   avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={value.itemName}
      
      description={value.description.length > 200 ? value.description.slice(0, 200)+"...": value.description}
      className="h-36"
    />
    <div className="text-lg font-bold pt-3 text-center">
    <p>Quantity : {value?.quantity} units</p>
    <p>Minimum Quantity: {value?.minimumquantity}</p>
    <p>Price : {value?.price}  $</p>
    </div>
  </Card>
  </div>
  )
}

export default InventoryCard