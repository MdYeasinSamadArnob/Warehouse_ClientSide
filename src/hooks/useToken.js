// import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            const email = user?.user?.email;
            if (email) {
                // const { data } = await axios.post('https://warehouse-serverside-537o.onrender.com/login', { email });
                await fetch(`https://warehouse-serverside-537o.onrender.com/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authentication': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify({
                            email: email
                            })
                    })
                .then(res => res.json())
                .then(data => {
                    console.log("This is Data: ",data);
                    setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
                })

                // console.log("this is data:",data);
                // setToken(data.accessToken);
                // localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user]);
    return [token];
}

export default useToken;