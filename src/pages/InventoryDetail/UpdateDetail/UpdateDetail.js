import React from 'react'
import {useNavigate} from 'react-router-dom';
// import auth from "../../../firebase.init"
// import { useAuthState } from 'react-firebase-hooks/auth';



function UpdateDetail({info,updateInfo}) {


    // const [user, loading] = useAuthState(auth);
    console.log("The info is --",info);
    const navigate = useNavigate();
    

   

    const handleUpdate= async (event)=>{
        event.preventDefault();
        let newData={
            itemName:event.target.itemName.value,
            supplierName:event.target.supplierName.value,
            price:parseFloat(event.target.price.value),
            quantity:parseFloat(event.target.quantity.value),
            minimumquantity:parseFloat(event.target.minimumquantity.value),

            description:event.target.description.value,
            image:event.target.image.value,
            

        }

        await fetch('https://warehouse-serverside-537o.onrender.com/inventoryupdate/'+info._id,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newData)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    
        console.log("Info and Newdata are:")
        console.log(info,newData);
        updateInfo({...info,...newData});
        alert("Item Updated Successfully")
        event.target.quantity.value = ""
    }


    


  return (
    <form onSubmit={handleUpdate} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
            Item Name
        </label>
        <input required defaultValue={info.itemName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="itemName" type="text" placeholder="Item Name" />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplierName">
            Supplier Name
        </label>
        <input required defaultValue={info.supplierName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="supplierName" type="text" placeholder="Supplier Name" />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
        </label>
        <input required defaultValue={info.price} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="number" placeholder="Price" min={0}/>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
            Quantity
        </label>
        <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Quantity" min={1} />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minimumquantity">
            Minimum Order Quantity
        </label>
        <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="minimumquantity" type="number" placeholder="Minimum Quantity" min={1} />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
        </label>
        <input required defaultValue={info.description} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Description" />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Image
        </label>
        <input required defaultValue={info.image}className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="text" placeholder="Description" />
        <div className="lg:w-1/2 mx-auto mt-5  flex flex-wrap items-center justify-center">
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto mt-5" type="submit">
            Update Item/Quantity Restock
        </button>
        {/* <button onClick={()=>navigate("/manageinventory")} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto mt-5" >
            Manage Items
        </button> */}
        </div>
    </div>
        </form>
  )
}

export default UpdateDetail