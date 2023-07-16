import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import TopCarDetail from "../Pages/TopCarDetail/TopCarDetail";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CheapCarDetail from "../Pages/CheapCarDetail/CheapCarDetail";
import YourProfile from "../Pages/YourProfile/YourProfile";
import BookingCar from "../Pages/BookingCar/BookingCar";
import BugattiCars from "../Pages/BugattiCars/BugattiCars";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:'topCarDetail/:id',
          element:<PrivateRoute><TopCarDetail></TopCarDetail></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-store-server-mu.vercel.app/topCar/${params.id}`)
        },
        // expensive car collection ----------
        {
          path: 'bugatti',
          element: <BugattiCars></BugattiCars>,
        },
        
        // --------
        {
          path: 'cheapCarDetail/:id',
          element: <PrivateRoute><CheapCarDetail></CheapCarDetail></PrivateRoute>,
          loader:({params}) => fetch(`https://car-store-server-mu.vercel.app/cheapCar/${params.id}`)
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'profile',
          element: <YourProfile></YourProfile>
        },
        {
          path: 'bookingCar',
          element: <BookingCar></BookingCar>
        }
      ]
    },
  ]);

  export default router