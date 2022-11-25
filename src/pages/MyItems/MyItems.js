import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
// import axiosPrivate from '../../api/axiosPrivate';
import auth from "../../firebase.init";
import { signOut } from 'firebase/auth';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';


import { Table, Tag, Space } from 'antd';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Button } from 'antd';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';


const { Column, ColumnGroup } = Table;



function MyItems() {

    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const [proceed,setProceed] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    // if(isModalVisible){
    //   return <ConfirmModal/>
    // }

    useEffect( () => {
        
        const getItems = async() =>{
            const email = user?.email;
            const url = `https://warehouse-serverside-537o.onrender.com/orders?email=${email}`;
            try{
                // const {data} = await axiosPrivate.get(url);
                await fetch(`${url}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                    })
                .then(res => res.json())
                .then(data => {
                    console.log("This is Data: ",data);
                    setItems(data);
                })
            }
            catch(error){
                console.log(error.message);
                console.log(error);
                signOut(auth);
                    navigate('/login')
                if(error.response?.status === 401 || error.response?.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getItems();

    }, [user])




    if(isModalVisible){
      // return <ConfirmModal setIsModalVisible={setIsModalVisible} setProceed={setProceed}/>
      Modal.confirm({
        title: 'Confirm',
        icon: <ExclamationCircleOutlined />,
        content: 'Do you want to delete this task?',
        okText: 'Yes',
        cancelText: 'No',
        onOk() {
            console.log('OK');
            // setProceed(true);
            setIsModalVisible(false);
            setProceed(true);
            },
    
            onCancel() {    console.log('Cancel');
          setIsModalVisible(false);
          },
            destroyOnClose: true,
      });
      // setIsModalVisible(false)
      return
    }

    const handleDelete = async (text, record) => {
        console.log("delete");
        // console.log(text, record);
        // Fetch to Delete an Item from the Inventory
        const proceed = window.confirm('Are you sure?');
        // let process =false

        // if(!proceed){
        //    setIsModalVisible(true);
        // }
        // console.log("Done")
        if(proceed){
       await  fetch('https://warehouse-serverside-537o.onrender.com/order/' + record._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                
            })

            // Filter the Inventory to remove the deleted item
            const filteredInventory = items.filter(inventory => inventory._id !== record._id);
            setItems(filteredInventory);
          }
          else{
            alert("You have cancelled the deletion");
          }

    }

    const handleStatus=(text, record, index)=> {
      if(record.paid === true){
        return <Tag color="green">Paid - Tx: {record.transactionId}</Tag>
      }
      else{
        return <Tag color="red">Not Paid</Tag>
      }
    }



console.log(items);

  return (
    <div className="pt-28 h-screen">
        <div className="flex justify-between items-center p-1 md:p-10">
        <div className="text-lg font-bold">
        <h1 className="text-orange-500">Total Items You Added/Have </h1>
      <PageTitle title="My Items"></PageTitle>
        <p>Total Item Count: <span className="text-orange-500">{items.length}</span></p>
        </div>
        {/* <button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/addinventory')}>Add More Items</button> */}
      </div>
        <Table bordered={true} scroll={{ x: 1500 }} dataSource={items} pagination={false}>
    <ColumnGroup title="Inventory Details">
    <Column title="Item ID" dataIndex="_id" key="_id" />

      <Column title="Item Name" dataIndex="itemName" key="itemName" />
      <Column title="Supplier Name" dataIndex="suppliername" key="suppliername" />
    {/* </ColumnGroup> */}
    <Column title="Price" dataIndex="price" key="price" />
    <Column title="quantity" dataIndex="minimumquantity" key="minimumquantity" />
    <Column title="Description" dataIndex="description" key="description" />
    <Column title="Paid Status" dataIndex="paid" key="paid" render={handleStatus}/>

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
          <Button disabled={record.paid?true:false} onClick={()=>navigate(`/payment/${record._id}`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Pay Money</Button>
          <Button disabled={record.paid?true:false} onClick={()=>handleDelete(text,record)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">DELETE ITEMS</Button>
        </Space>
      )}
    />
    </ColumnGroup>
  </Table>
  </div>
  )
}

export default MyItems