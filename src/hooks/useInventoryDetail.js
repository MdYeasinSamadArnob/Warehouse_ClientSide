import React,{useState,useEffect} from 'react'

function useInventoryDetail(inventoryID) {
    const [inventory, setInventory] = useState({});

    useEffect( () =>{
        const url = `https://warehouse-serverside-537o.onrender.com/inventory/${inventoryID}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setInventory(data));

    }, [inventoryID]);
    return [inventory, setInventory]

}

export default useInventoryDetail