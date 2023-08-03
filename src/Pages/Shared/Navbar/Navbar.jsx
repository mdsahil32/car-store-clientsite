import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/bookingCar'>Booking Car</Link></li>
        {
            user ? <>
                <li><Link onClick={handleLogout}>Logout</Link></li>
                <li><Link to='/profile'><img className='rounded-full w-12' src={user?.photoURL} alt="" /></Link></li>
            </>
                : <li><Link to='/login'>Login</Link></li>
        }
        
    </>

    return (
        <div className="navbar max-w-screen-lg bg-gradient-to-r from-cyan-500 to-blue-500  text-black">
            <div className="navbar-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <h1 className='text-4xl uppercase font-semibold border-l-4 border-black ms-3'><span className='text-blue-800 ms-1'>Car</span> Store</h1>
            </div>
            <div className="navbar hidden lg:flex justify-end">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;