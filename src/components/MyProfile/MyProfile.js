// import React from 'react';
// import { useForm } from "react-hook-form";
// import { useQuery } from 'react-query';
// import { toast } from 'react-toastify';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from "../../firebase.init"
// // import Loading from '../Shared/Loading';

// const MyProfile = () => {
//   const [user, loading] = useAuthState(auth);
//     const { register, formState: { errors }, handleSubmit, reset } = useForm();

//     const { data: services, isLoading } = useQuery('services', () => fetch('https://warehouse-serverside-537o.onrender.com/service').then(res => res.json()))

//     const imageStorageKey='4295ac4d47b569312bea67b440cdbdbb';

//     /**
//      * 3 ways to store images
//      * 1. Third party storage //Free open public storage is ok for Practice project 
//      * 2. Your own storage in your own server (file system)
//      * 3. Database: Mongodb 
//      * 
//      * YUP: to validate file: Search: Yup file validation for react hook form
//     */
//     const onSubmit = async data => {
//         const image = data.image[0];
//         const formData = new FormData();
//         formData.append('image', image);
//         const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
//         fetch(url, {
//             method: 'POST',
//             body: formData
//         })
//         .then(res=>res.json())
//         .then(result =>{
//             if(result.success){
//                 const img = result.data.url;
//                 const doctor = {
//                     name: data.name,
//                     email: data.email,
//                     specialty: data.specialty,
//                     img: img
//                 }
//                 // send to your database 
//                 fetch('https://warehouse-serverside-537o.onrender.com/doctor', {
//                     method: 'POST',
//                     headers: {
//                         'content-type': 'application/json',
//                         authorization: `Bearer ${localStorage.getItem('accessToken')}`
//                     },
//                     body: JSON.stringify(doctor)
//                 })
//                 .then(res =>res.json())
//                 .then(inserted =>{
//                     if(inserted.insertedId){
//                         toast.success('Doctor added successfully')
//                         reset();
//                     }
//                     else{
//                         toast.error('Failed to add the doctor');
//                     }
//                 })

//             }
            
//         })
//     }

//     if (isLoading) {
//         // return <Loading></Loading>
//     }

//     return (
//         <div>
//             <h2 className="text-2xl">Add a New Doctor</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>

//                 <div className="form-control w-full max-w-xs">
//                     <label className="label">
//                         <span className="label-text">Name</span>
//                     </label>
//                     <input
//                         type="text"
//                         placeholder="Your Name"
//                         value={user.displayName}
//                         readOnly
//                         className="input input-bordered w-full max-w-xs"
//                         {...register("name", {
//                             required: {
//                                 value: true,
//                                 message: 'Name is Required'
//                             }
//                         })}
//                     />
//                     <label className="label">
//                         {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
//                     </label>
//                 </div>

//                 <div className="form-control w-full max-w-xs">
//                     <label className="label">
//                         <span className="label-text">Email</span>
//                     </label>
//                     <input
//                         type="email"
//                         value={user.email}
//                         placeholder="Your Email"
//                         className="input input-bordered w-full max-w-xs"
//                         {...register("email", {
//                             required: {
//                                 value: true,
//                                 message: 'Email is Required'
//                             },
//                             pattern: {
//                                 value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//                                 message: 'Provide a valid Email'
//                             }
//                         })}
//                     />
//                     <label className="label">
//                         {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
//                         {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
//                     </label>
//                 </div>

//                 <div className="form-control w-full max-w-xs">
//                     <label className="label">
//                         <span className="label-text">Specialty</span>
//                     </label>
//                     <select {...register('specialty')} class="select input-bordered w-full max-w-xs">
//                         {
//                             services?.map(service => <option
//                                 key={service._id}
//                                 value={service.name}
//                             >{service.name}</option>)
//                         }
//                     </select>
//                 </div>

//                 <div className="form-control w-full max-w-xs">
//                     <label className="label">
//                         <span className="label-text">Photo</span>
//                     </label>
//                     <input
//                         type="file"
//                         className="input input-bordered w-full max-w-xs"
//                         {...register("image", {
//                             required: {
//                                 value: true,
//                                 message: 'Image is Required'
//                             }
//                         })}
//                     />
//                     <label className="label">
//                         {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
//                     </label>
//                 </div>

//                 <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
//             </form>
//         </div>
//     );
// };

// export default MyProfile;



































import React,{useState,useEffect} from 'react'
import { Button, Form, Input, InputNumber } from 'antd';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"

import ImageUpload from './ImageUpload';
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
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const MyProfile = () => {
    // const imageStorageKey='ab57b4c079b047b3102cd9436204fe97';
  const [user, loading] = useAuthState(auth);
  const [image,setImage] = useState(null);
  const [initialValue,setInitialValue] = useState({})

  useEffect(() =>{
    fetch('https://warehouse-serverside-537o.onrender.com/user/'+user.email, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
        setInitialValue(data)
    })
  })


  const onFinish = (values) => {
    console.log(values);
    // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    // console.log(image);
    //     fetch(url, {
    //         method: 'POST',
    //         body: image
    //     })
    //     .then(res=>res.json())
    //     .then(result =>{
    //         if(result.success){
    //             const img = result.data.url;
    //             values.user["img"]=img;
          
    // Save user to mongodb
    values.user["name"]=user.displayName;
    values.user["email"]=user.email;
    values.user["role"]="none"
    
    fetch('https://warehouse-serverside-537o.onrender.com/updateuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values.user),
    })

      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setInitialValue(result)
        alert('Profile Updated Successfully');
      })
//       );
//     }
// })
  };


  return (
    <div>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} >
      <Form.Item
      required
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            // required: true,
          },
        ]}
      >
        <Input defaultValue={user.displayName} readOnly/>
      </Form.Item>
      <Form.Item
      required
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input defaultValue={user.email} readOnly/>
      </Form.Item>
      <Form.Item
      required
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
      </Form.Item>
      <Form.Item 
      rules={[
        {
          required: true,
        },
      ]}
      required name={['user', 'linkedin']} label="linkedin">
        <Input />
      </Form.Item>
      <div className="mx-auto text-center flex justify-center items-center">
        {/* <p >Image Upload: </p> */}
      {/* <ImageUpload setImage={setImage}/> */}
      </div>
      <Form.Item
      rules={[
        {
          required: true,
        },
      ]}
      required name={['user', 'about']} label="About Yourself">
        <Input.TextArea />
      </Form.Item>
      <Form.Item
      rules={[
        {
          required: true,
        },
      ]}
      wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
    {/* Show All Fileds of Initial Value */}
    <div className="mx-auto text-center flex flex-col justify-center items-center font-bold text-lg">
    <p >Your Details Now: </p>
    <p>Name: {initialValue.name}</p>
    <p>Email: {initialValue.email}</p>
    <p>Age: {initialValue.age}</p>
    <p>linkedin: {initialValue.linkedin}</p>
    <p>About: {initialValue.about}</p>
    </div>
    </div>
    
  );
};

export default MyProfile;