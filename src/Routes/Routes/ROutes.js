import { createBrowserRouter } from "react-router-dom";
import Main from "../../LAyout/MAin/Main";
import Blog from "../../pages/Blog/Blog";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Cates from "../../pages/Home/Categories/Cates/Cates";
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
            , {
                path: '/category/:id',
                element: <PrivateRoute><Cates></Cates></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
    { path: '*', element: <div className="text-5xl text-center text-error-content my-36"> <h1>404! Check and try again</h1></div> }
])
export default router;