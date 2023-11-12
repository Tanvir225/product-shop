import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Profile from "../Pages/Profile/Profile"
import Home from "../Pages/Home/Home"
import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Cart/Cart";
import ProductCard from "../Pages/Shop/ProductCard";

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/shop",
                element:<Shop></Shop>,
                loader: ()=>fetch('https://dummyjson.com/products')
            },
            {
                path:"/shop/:id",
                element:<ProductCard></ProductCard>,
                loader: ({params})=> fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path:"/cart",
                element:<Cart></Cart>
            },
            
            {
                path:"/profile",
                element:<Profile></Profile>,
            }
        ]
    }
]);
export default myCreatedRoute;