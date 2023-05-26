import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import TopCarDetail from "../Pages/Home/TopCar/TopCarDetail/TopCarDetail";


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
          element:<TopCarDetail></TopCarDetail>,
          loader: ({params}) => fetch(`http://localhost:5000/topCar/${params.id}`)
        }
      ]
    },
  ]);

  export default router