import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/AvailableFoods",
                element: <AvailableFoods></AvailableFoods>,
            },
            {
                path: "/AddFood",
                element: <AddFood></AddFood>,
            },
            {
                path: "/ManageMyFoods",
                element: <ManageMyFoods></ManageMyFoods>,
            },
            {
                path: "/MyFoodRequest",
                element: <MyFoodRequest></MyFoodRequest>,
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