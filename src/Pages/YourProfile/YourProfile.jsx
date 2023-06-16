import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const YourProfile = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div className=''>
            <h1 className='text-5xl text-center font-semibold font-serif my-5 underline uppercase'>Your Profile</h1>
            <div className=''>
                <h3>{user?.displayName}</h3>
                <h3>{user?.email}</h3>
                <h3>{user.metadata?.creationTime}</h3>
                <h3>{user.metadata?.lastSignInTime}</h3>
            </div>
        </div>
    );
};

export default YourProfile;