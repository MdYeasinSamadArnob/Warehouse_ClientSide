import { useEffect, useState } from "react";



function useInventory() {
    const [inventories, setInventories] = useState([]);

    useEffect( ()=>{
        fetch('https://warehouse-serverside-537o.onrender.com/inventoryitems')
        .then(res => res.json())
        .then(data => setInventories(data));
    }, []);
    return [inventories, setInventories]
  
}

export default useInventory