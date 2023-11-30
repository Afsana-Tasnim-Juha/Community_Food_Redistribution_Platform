import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import FoodsDetails from "../Pages/FoodsDetails/FoodsDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,

        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/featuredFoodsCount'),
            },
            {
                path: "/AvailableFoods",
                element: <AvailableFoods></AvailableFoods>,
                loader: () => fetch('http://localhost:5000/food')
            },
            {
                path: "/FoodsDetails/:id",
                element: <FoodsDetails></FoodsDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/featuredFoods/${params.id}`)

            },
            {
                path: "/AddFood",
                element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>,
            },
            {
                path: "/ManageMyFoods",
                element: <PrivateRoutes><ManageMyFoods></ManageMyFoods></PrivateRoutes>,
            },
            {
                path: "/MyFoodRequest",
                element: <PrivateRoutes><MyFoodRequest></MyFoodRequest></PrivateRoutes>,
            },
            {
                path: "/Login",
                element: <Login></Login>,
            },
            {
                path: "/Registration",
                element: <Registration></Registration>,
            },


        ],
    },

]);

export default router;