import React from 'react'
import { Table, Tag, Space } from 'antd';
import useInventory from '../../hooks/useInventory';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';

const { Column, ColumnGroup } = Table;


function ManageItems() {

    const [inventories, setInventories] = useInventory()
    const navigate = useNavigate()

    console.log(inventories);

    const handleDelete = async (text, record) => {
        console.log("delete");
        // console.log(text, record);
        // Fetch to Delete an Item from the Inventory
        const proceed = window.confirm('Are you sure to Delete it?');
        if (proceed) {
       await  fetch('https://warehouse-serverside-537o.onrender.com/inventory/' + record._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                
            })

            // Filter the Inventory to remove the deleted item
            const filteredInventory = inventories.filter(inventory => inventory._id !== record._id);
            setInventories(filteredInventory);

          }else{
            alert("You have cancelled the deletion");
          }

    }


  return (
    <div className="pt-28 h-screen">
      <div className="flex justify-between items-center p-1 md:p-10">
        <div className="text-lg font-bold">
          <PageTitle title="Manage Items"></PageTitle>
        <h1 className="text-orange-500">Total Items Are Displayed </h1>
        <p>Total Item Count: <span className="text-orange-500">{inventories.length}</span></p>
        </div>
        {/* <button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/addinventory')}>Add More Items</button> */}
      </div>
        <Table bordered={true} scroll={{ x: 1500 }} dataSource={inventories} pagination={false}>
    <ColumnGroup title="Inventory Details">
    <Column title="Item ID" dataIndex="_id" key="_id" />

      <Column  title="Item Name" dataIndex="itemName" key="itemName" />
      <Column title="Supplier Name" dataIndex="supplierName" key="supplierName" />
    {/* </ColumnGroup> */}
    <Column title="Price" dataIndex="price" key="price" />
    <Column title="quantity" dataIndex="quantity" key="quantity" />
    <Column title="Minimum quantity" dataIndex="minimumquantity" key="minimumquantity" />
    <Column title="Description" dataIndex="description" key="description" />

    
    <Column
    // fixed="right"
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          {/* <a>Invite {record.lastName}</a> */}
          <button onClick={()=>navigate(`/inventory/${record._id}`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">UPDATE ITEMS</button>
          <button onClick={()=>handleDelete(text,record)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">DELETE ITEMS</button>
        </Space>
      )}
    />
    </ColumnGroup>
  </Table>
    </div>
  )
}

export default ManageItems




  