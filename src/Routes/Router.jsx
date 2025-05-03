import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import Homepage from "../Pages/Homepage";
import CategoruNews from "../Pages/CategoruNews";

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
                    loader:()=>fetch("/news.json")
                }
            ]
        },
        {
            path:'/auth',
            element:<h1>Authentication layout</h1>
        },
        {
            path:'/news',
            element:<h1>News layout</h1>
        },
        {
            path:'/*',
            element:<h2>Error</h2>
        }
    ]
)

export default router;