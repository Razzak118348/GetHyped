import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";

const Routes = createBrowserRouter([
{
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
        {
            path:"/",
            element:<Home></Home>

        }
    ]
  },

])
export default Routes;