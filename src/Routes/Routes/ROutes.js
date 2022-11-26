import { createBrowserRouter } from "react-router-dom";
import Main from "../../LAyout/MAin/Main";
import Blog from "../../pages/Blog/Blog";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])
export default router;