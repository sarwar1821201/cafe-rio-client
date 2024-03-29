import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menuu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Secret from "../pages/Shared/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUser from "../pages/Dashboard/AllUser/AllUser";


 export  const router= createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/menu',
                element: <Menu></Menu>
            },
            {
                path:'/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/secret',
                element: <PrivateRoute> <Secret></Secret>  </PrivateRoute>
            }
        ]
    },

    {
        path:'/dashboard',
        element: <PrivateRoute>  <Dashboard></Dashboard>  </PrivateRoute> ,
        children:[
            {
                path:'cart',
                element: <Cart></Cart>
            },
            {
                path: 'users',
                element: <AllUser></AllUser>
            }
        ]
    }
])