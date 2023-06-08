import axios from 'axios';
import {toast} from 'react-toastify';

const AuthToken = (navigate,setVerifyingToken) => {
    const token = localStorage.getItem('token');
    if(token) {
        axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
        axios.get('http://localhost:5550/VerifyToken')
        .then(res => {
            if(res.data.success) {
                setVerifyingToken(false)
                console.log('Token is valid')
            }
        })
        .catch(err => {
            console.log(err)
            toast.error(err.response.data.message);
            localStorage.removeItem('token');
            navigate('/')
        })

    } else {
        navigate('/')
    }
}

export default AuthToken;
