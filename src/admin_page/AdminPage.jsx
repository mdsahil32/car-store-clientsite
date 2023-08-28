import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminDashboard from '../admin_dashboard/AdminDashboard';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const AdminPage = () => {
    return (
        <>
        <Navbar></Navbar>
            <div className='flex items-center'>
                <AdminDashboard></AdminDashboard>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AdminPage;