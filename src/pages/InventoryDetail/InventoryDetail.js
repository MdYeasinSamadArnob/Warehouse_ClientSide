import React,{useState} from 'react'
import useInventoryDetail from '../../hooks/useInventoryDetail'
import {useParams} from 'react-router-dom'
import { Table, Tag, Space } from 'antd';
import UpdateDetail from './UpdateDetail/UpdateDetail';
import { Button } from 'antd';
import PageTitle from '../../components/PageTitle/PageTitle';


const { Column, ColumnGroup } = Table;

function InventoryDetail() {
    const { id } = useParams();
    const [inventory, setInventory] = useInventoryDetail(id);
    console.log(inventory);
    
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

  const handleDelivered= async ()=>{
      inventory["quantity"]=inventory["quantity"]-1;
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

        // setInventory({...inventory});
  }

  return (
    
    <div className="mx-5 md:mx-8 lg:mx-10 py-20 overflow-hidden flex flex-col flex-wrap ">
      <PageTitle title="Manage Inventories"></PageTitle>
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
            {record.quantity<=0? <Button type="primary" disabled>Delivered Button</Button>: <button onClick={handleDelivered} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delivered Button</button>}
            </Space>
          )}
        />
  </ColumnGroup>
  </Table>
  <h2>Restock Inventory Item:</h2>
    <UpdateDetail info={inventory} updateInfo={setInventory} />
    </div>
    
  )
}

export default InventoryDetail


// tailwind css delivered button css 
// https://tailwindcss.com/docs/components/buttons/
//<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delivered</button>
