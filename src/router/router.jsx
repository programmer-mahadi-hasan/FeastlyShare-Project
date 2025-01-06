import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFoods from "../Pages/AddFoods/AddFoods";
import ManageFoods from "../Pages/ManageFoods/ManageFoods";
import FoodRequest from "../Pages/FoodRequest/FoodRequest";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <h1 className="text-5xl text-orange-500 font-extrabold text-center">Error Page not found!</h1>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'available-foods',
                element: <AvailableFoods />,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: 'add-foods',
                element: <AddFoods />
            },
            {
                path: 'manage-foods',
                element: <ManageFoods />
            },
            {
                path: 'food-request',
                element: <FoodRequest />
            }
        ]
    },
])

export default router