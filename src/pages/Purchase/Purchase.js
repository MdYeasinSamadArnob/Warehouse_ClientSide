import React,{useState} from 'react'
import useInventoryDetail from '../../hooks/useInventoryDetail'
import {useParams} from 'react-router-dom'
import { Table, Tag, Space } from 'antd';
import UpdateDetail from '../InventoryDetail/UpdateDetail/UpdateDetail';
// import { Button } from 'antd';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Button, Modal } from 'antd';
import OrderModal from './OrderModal';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';



const { Column, ColumnGroup } = Table;

function Purchase() {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const [inventory, setInventory] = useInventoryDetail(id);
    console.log(inventory);

    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    
    // 🚨 Preserving nested keys
// const objectToArray = Object.entries(inventory).map(entry => {
//     return {[entry[0]]: entry[1]};
//   });

//   console.log(objectToArray);

  let inventoryArray=[]
  if(inventory){
  inventoryArray.push(inventory);
  }

  console.log(inventoryArray);

  const handleDelivered= async (amount)=>{
      inventory["quantity"]=inventory["quantity"]-amount;
    await fetch('https://warehouse-serverside-537o.onrender.com/inventoryupdate/'+id,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(inventory)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            // setInventory(inventory)
            setInventory({...inventory});
            
        })


        setInventory({...inventory});
  }

  return (
    
    <div className="mx-5 md:mx-8 lg:mx-10 py-20 overflow-hidden flex flex-col flex-wrap ">
      <PageTitle title="Manage Inventories"></PageTitle>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <OrderModal handleOk={handleOk} handleDelivered={handleDelivered} name={user.displayName} email={user.email}  suppliername={inventory.supplierName} price={inventory.price} quantity={inventory.quantity} minimumquantity={inventory.minimumquantity} description={inventory.description} itemName={inventory.itemName}/>
      </Modal>
        <img src={inventoryArray[0].image} className="w-64 h-64 mx-auto mb-5" alt=""/>
        <Table scroll={{ x: 1500 }} dataSource={inventoryArray} pagination={false}>
      <ColumnGroup title="Inventory Details">
      <Column title="Item Name" dataIndex="itemName" key="itemName" />
      <Column title="Supplier Name" dataIndex="supplierName" key="supplierName" />
    {/* </ColumnGroup> */}
      <Column title="Price" dataIndex="price" key="price" />
      <Column title="quantity" dataIndex="quantity" key="quantity" />
      <Column title="Minimum quantity" dataIndex="minimumquantity" key="minimumquantity" />
      <Column title="Description" dataIndex="description" key="description" />

    {/* <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    /> */}
        <Column
        // fixed="right"
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              {/* <a>Invite {record.lastName}</a> */}
            {record.quantity<=0? <Button type="primary" disabled>Make Order </Button>: <button onClick={showModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Make Order</button>}
            </Space>
          )}
        />
  </ColumnGroup>
  </Table>
  {/* <h2>Restock Inventory Item:</h2>
    <UpdateDetail info={inventory} updateInfo={setInventory} /> */}
    <ToastContainer />
    </div>
    
  )
}

export default Purchase