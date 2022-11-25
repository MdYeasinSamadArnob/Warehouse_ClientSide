
import { Button, Form, Input, InputNumber } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  // number: {
  //   range: '${label} must be between ${min} and ${max}',
  // },
};
/* eslint-enable no-template-curly-in-string */

const OrderModal = ({handleOk,handleDelivered,name,email,suppliername,price,quantity,minimumquantity,description,itemName}) => {

  console.log(name,email,suppliername,price,quantity,minimumquantity)

  const [minimumQuantity, setMinimumQuantity] = useState(minimumquantity);
  console.log(name,email)
  const onFinish = async (values) => {
    // values.preventDefault();
    console.log(values);
    values.user["quantity"]=quantity
    values.user["minimumquantity"]=minimumQuantity
    values.user["email"]=email
    values.user["name"]=name
    values.user["suppliername"]=suppliername
    values.user["price"]=price
    values.user["description"]=description
    values.user["itemName"]=itemName

    
    console.log("This is values",values.user)
    await fetch('https://warehouse-serverside-537o.onrender.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values.user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.booking);
                // if(data.success){
                //     // toast(`Appointment is set, ${formattedDate} at ${slot}`)
                // }
                // else{
                //     toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                // }
            })
            handleDelivered(minimumQuantity)
            // window.alert("Order Placed Successfully")
            toast("Order Placed Successfully")

    console.log(values)
    handleOk();

  };

  const handleMinimumQuantityChange = (e) => {
    setMinimumQuantity(e.target.value);
  };


  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            // required: true,
          },
        ]}
      >
        <Input defaultValue={name} value={name} readOnly={true}/>
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
         <Input defaultValue={email} value={email} readOnly={true}/>
      </Form.Item>

<Form.Item
        name={['user', 'price']}
        label="Price"
        rules={[
          {
            // required: true,
          },
        ]}
      >
        <InputNumber defaultValue={price} value={price} readOnly={true}/>
      </Form.Item>
      <Form.Item
        name={['user', 'quantity']}
        label="Quantity"
        rules={[
          {
            // required: true,
          },
        ]}
      >
        {/* <InputNumber defaultValue={minimumquantity} min={minimumquantity}  /> */}
        <input value={minimumQuantity} min={minimumquantity} max={quantity} onChange={handleMinimumQuantityChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Quantity" required/>
      </Form.Item>

      <Form.Item
        name={['user', 'phone']}
        label="phone"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input   />
      </Form.Item>
       
      {/* <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item> */}
      {/* <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item> */}
      <Form.Item name={['user', 'address']} label="Address">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      
    </Form>
  );
};

export default OrderModal;


























// import React from 'react';
// import { format } from 'date-fns';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import { toast } from 'react-toastify';

// const BookingModal = ({ date, data, setTreatment, refetch }) => {
//     console.log("The Data is :",data)
//     const { _id, itemName, quantity, price } = data;
//     const [user, loading, error] = useAuthState(auth);
//     // const formattedDate = format(new Date(), 'PP');
//     const handleBooking = event => {
//         event.preventDefault();
//         const slot = event.target.slot.value;

//         const booking = {
//             treatmentId: _id,
//             treatment: itemName,
//             // date: formattedDate,
//            quantity,
//             price,
//             patient: user.email,
//             patientName: user.displayName,
//             phone: event.target.phone.value
//         }

//         fetch('https://warehouse-serverside-537o.onrender.com/booking', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(booking)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if(data.success){
//                     // toast(`Appointment is set, ${formattedDate} at ${slot}`)
//                 }
//                 else{
//                     toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
//                 }
//                 setTreatment(null);
//                 refetch();
//             });
//     }

//     return (
//         <div>
//             <input type="checkbox" id="booking-modal" className="modal-toggle" />
//             <div className="modal modal-bottom sm:modal-middle">
//                 <div className="modal-box">
//                     <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                     <h3 className="font-bold text-lg text-secondary">Booking for: {itemName}</h3>
//                     <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
//                         {/* <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" /> */}
//                         {/* <select name="slot" className="select select-bordered w-full max-w-xs">
//                             {
//                                 slots.map((slot, index) => <option
//                                     key={index}
//                                     value={slot}
//                                 >{slot}</option>)
//                             }
//                         </select> */}
//                         <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
//                         <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
//                         <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
//                         <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingModal;