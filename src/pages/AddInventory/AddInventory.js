import React,{useState} from 'react'
import { Form, Input, InputNumber, Button } from 'antd';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

function AddInventory() {

  const [price,setPrice]=useState(0)
  const [quantity,setQuantity]=useState(1)
  const [MinimumQuantity,setMinimumQuantity]=useState(1)

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();


    const onFinish = async (values) => {
      values.user["price"]=price
      values.user["quantity"]=quantity
      values.user["minimumquantity"]=MinimumQuantity
      values.user["user"]=user?.email
      
        console.log(values);
        const url = `https://warehouse-serverside-537o.onrender.com/addinventory`;
        await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values.user)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            alert("Item Added Successfully")
            // navigate("/myitems")
        } )
      };

      const handlePriceChange = (e) => {
        setPrice(e.target.value)
    };

    const handleQuantityChange = (e) => {
      setQuantity(e.target.value)
  };

  const handleMinimumQuantityChange = (e) => {
    setMinimumQuantity(e.target.value)
};
    
      return (
          <div className="h-screen">
              <div className=" mx-auto pt-28 md:w-2/5 w-11/12">
                <PageTitle title="Add Inventory"></PageTitle>
        <Form  {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} >
          <Form.Item
            name={['user', 'itemName']}
            label="Item Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'supplierName']}
            label="Supplier Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'price']}
            label="Price"
            
          >
            {/* <InputNumber onChange={handlePriceChange}  type= 'number' min={0} required/> TK */}
            <input defaultValue={price} min={0} onChange={handlePriceChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="number" placeholder="Price" required />

          </Form.Item>
          <Form.Item
            name={['user', 'quantity']}
            label="Quantity"
            
          >
            <input defaultValue={quantity} min={1} onChange={handleQuantityChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Quantity" required/>

            {/* <InputNumber onChange={handleQuantityChange} type= 'number' min={1} required /> Unit */}
          </Form.Item>
          <Form.Item
            name={['user', 'minimumquantity']}
            label="Minimum Quantity"
            
          >
            <input defaultValue={MinimumQuantity} min={1} onChange={handleMinimumQuantityChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Quantity" required/>

            {/* <InputNumber onChange={handleQuantityChange} type= 'number' min={1} required /> Unit */}
          </Form.Item>
          <Form.Item name={['user', 'image']} rules={[
              {
                required: true,
              },
            ]} label="Image Link">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'description']} rules={[
              {
                required: true,
              },
            ]} label="Item Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button className="bg-green-500 hover:bg-green-700" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </div>
        </div>
      );
}

export default AddInventory