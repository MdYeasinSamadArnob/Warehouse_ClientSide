import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import InventoryCard from '../Card/InventoryCard';
import {useNavigate} from 'react-router-dom'

function InventoryItem() {
    const [inventoryItems, setInventoryItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(  ()=>{
        const getData= async ()=>{ 
          await fetch('https://warehouse-serverside-537o.onrender.com/inventoryitems')
        .then(res => res.json())
        .then(data => {
          setInventoryItems(data)
          setIsLoading(false)
        });
      }


      getData();
        // setIsLoading(false)
    }, [])
  return (
    <div>
      <h1 className="font-extrabold text-2xl text-center mb-3"> Popular Inventories </h1>
     
    <div className="flex flex-wrap justify-center items-center w-full md:w-3/4 mx-auto">
      
      {/* <div className="flex flex-wrap md:w-3/4 w-full mx-auto"> */}
        {isLoading?<Spin tip="Please wait Data is Loading..."></Spin>:inventoryItems.slice(0, 6).map(inventoryItem => <InventoryCard key={inventoryItem._id} value={inventoryItem}></InventoryCard>)}
    {/* </div> */}
    {isLoading?"":<button onClick={()=>navigate("/dashboard/myprofile")} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Manage All Items...</button>}
    </div>
    </div>
  )
}

export default InventoryItem