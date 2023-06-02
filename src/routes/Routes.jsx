import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/Shared/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../pages/DashBoard/Mycart/MyCart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
  


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        }, 
        {
        path: 'signup',
        element: <SignUp></SignUp>  
        },
        {
          path: 'secret',
          element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
      ],
    },
    {
      path: 'dashboard',
      element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'addItem',
          element: <AddItem></AddItem>
        }
      ]
    }
  ]);


  export default router;