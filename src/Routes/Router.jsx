import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import Homepage from "../Pages/Homepage";
import CategoruNews from "../Pages/CategoruNews";
import Login from "../Pages/Login";
import Registor from "../Pages/Registor";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRout from "../Provider/PrivetRout";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Home></Home>,
            children:[
                {
                    path:'/',
                    Component:Homepage
                },
                {
                    path:'/category/:id',
                    Component:CategoruNews,
                    loader:()=>fetch("/news.json"),
                    
                }
            ]
        },
        {
            path:'/auth',
            element:<AuthLayout></AuthLayout>,
            children:[
                {
                    path:'/auth/login',
                    Component:Login
                },
                {
                    path:'/auth/reg',
                    Component:Registor
                }
            ]
        },
        {
            path:'/news-details/:id',
            element:<PrivetRout>
                <NewsDetails></NewsDetails>
            </PrivetRout>,
            loader:()=> fetch("/news.json"),
            hydrateFallbackElement:<div className="flex justify-center items-center"><span className="loading loading-bars loading-xl"></span></div>
        },
        {
            path:'/*',
            element:<h2>Error</h2>
        }
    ]
)

export default router;