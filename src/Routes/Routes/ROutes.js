import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../../LAyout/MAin/Main";
import AddAProduct from "../../pages/AddAProduct/AddAProduct";
import Allbuyers from "../../pages/AllBuyers/Allbuyers";
import AllSeller from "../../pages/AllSeller/AllSeller";
import Blog from "../../pages/Blog/Blog";

import DashboardLayout from "../../pages/DashboardLAyout/DashboardLayout";
import MyOrders from "../../pages/DashboardLAyout/MyOrders/MyOrders";
import Cates from "../../pages/Home/Categories/Cates/Cates";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyProducts from "../../pages/MyProducts/MyProducts";
import Signup from "../../pages/Signup/Signup";
import AdminRoute from "../AdminRoutes/AdminRoutes";
import BuyerRoute from "../BuyerRoutes/BuyerRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoutes/SellerRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/blog',
                element: <Blog></Blog>
            }, {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/signup',
                element: <Signup></Signup>
            }
            , {
                path: '/category/:id',
                element: <PrivateRoute><Cates></Cates></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },


            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            }, {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><Allbuyers></Allbuyers></AdminRoute>
            },
            {
                path: '/dashboard/addaproduct',
                element: <SellerRoute><AddAProduct></AddAProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            }

        ]
    },
    {
        path: '*', element:
            <div className="text-5xl text-center text-error-content my-36">
                <h1> Ohhho! We couldn't find the page! Return to <button className="btn text-4xl"><Link to="/">Home</Link></button> </h1>
                <img className="mx-auto mt-4" src={"https://www.sumydesigns.com/wp-content/uploads/2019/03/404-error.jpg"} alt="" />

            </div>

    }
])
export default router;