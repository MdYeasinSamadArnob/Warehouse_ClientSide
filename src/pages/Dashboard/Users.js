import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner/Spinner';
// import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://warehouse-serverside-537o.onrender.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        // return <Loading></Loading>
        return <Spinner/>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="border-collapse w-full border border-slate-500">
                    <thead>
                        <tr>
                            <th className="border border-slate-600">Serial</th>
                            <th className="border border-slate-600">Name</th>
                            <th className="border border-slate-600">Email</th>
                            <th className="border border-slate-600">Job/Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user=><UserRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;