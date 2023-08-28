import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <>
            <div className=' bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold pr-12 ps-8 py-12   text-black'>
                <h3>ADMIN DASHBOARD</h3>
                <NavLink
                    className=''
                    to='dashboard'
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "blue" : "",
                        };
                    }}
                >
                    <h4 className='flex items-center gap-2 my-3'><FaHome></FaHome><span>Dashboard</span></h4>
                </NavLink>

            </div>
        </>
    );
};

export default AdminDashboard;