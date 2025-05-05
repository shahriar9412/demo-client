import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import AddProduct from "../components/AddProduct";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://demo-server-green.vercel.app/product')
        },
        {
          path: "addProduct",
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
            path: 'login', 
            element: <Login></Login>
        }, 
        {
            path: 'signup', 
            element: <SignUp></SignUp>
        }
      ]
    }
  ]);


  export default router;