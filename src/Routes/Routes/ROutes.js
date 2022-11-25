import { createBrowserRouter } from "react-router-dom";
import Main from "../../LAyout/MAin/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";

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
            }
        ]
    }
])
export default router;