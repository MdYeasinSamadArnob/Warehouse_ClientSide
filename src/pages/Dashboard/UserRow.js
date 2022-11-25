import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const UserRow = ({ user, refetch }) => {
    const {name, email, role,_id } = user;
    const [user1,loading]=useAuthState(auth);
    const makeAdmin = () => {
        fetch(`https://warehouse-serverside-537o.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    const removeAdmin = () => {
        fetch(`https://warehouse-serverside-537o.onrender.com/userchange/admin/${email}`, {
            method:"PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to remove an admin');
            }
            return res.json()})
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(`Successfully removed an admin`);
            }
        })
    }

    return (
        <tr className="text-center">
            <th className="border border-slate-600">{_id}</th>
            <td className="border border-slate-700">{name}</td>
            <td  className="border border-slate-700">{email}</td>
            <td  className="border border-slate-700">{role !== 'admin' && <button onClick={makeAdmin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Make Admin</button>}
            {(role === "admin" && email !== user1.email) ? <button onClick={removeAdmin}   className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove Admin</button>:(email === user1.email && role==="admin")?"You Are An Admin":role === "none" && ""}</td>
        </tr>
    );
};

export default UserRow;