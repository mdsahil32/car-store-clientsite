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
          loader: ({params}) => fetch(`http://localhost:5000/topCar/${params.id}`)
        },
        {
          path: 'cheapCarDetail/:id',
          element: <CheapCarDetail></CheapCarDetail>,
          loader:({params}) => fetch(`http://localhost:5000/cheapCar/${params.id}`)
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router