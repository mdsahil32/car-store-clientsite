import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const YourProfile = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div className=''>
            <h1 className='text-5xl text-center font-semibold font-serif my-5 underline uppercase'>Your Profile</h1>
            <img src={user?.photoURL} alt="" />
            <div className=''>
                <h3>{user?.displayName}</h3>
                <h3>{user?.email}</h3>
                
            </div>
        </div>
    );
};

export default YourProfile;