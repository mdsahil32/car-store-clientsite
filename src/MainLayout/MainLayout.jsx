import React from 'react';
import { Outlet,  useNavigation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Lottie from 'lottie-react'
import spinner from '../../public/spinner.json'


const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            {/* company name */}
            {/* <Name></Name> */}
            <Navbar></Navbar>

            <div className='flex justify-center items-center'>{navigation.state === 'loading' && <Lottie animationData={spinner} /> }</div>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;