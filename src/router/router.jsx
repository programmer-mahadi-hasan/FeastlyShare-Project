import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFoods from "../Pages/AddFoods/AddFoods";
import ManageFoods from "../Pages/ManageFoods/ManageFoods";
import FoodRequest from "../Pages/FoodRequest/FoodRequest";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
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
                loader: () => fetch('https://feastly-share-server.vercel.app/foods')
            },
            {
                path: 'food/:id',
                element: <PrivateRoute>
                    <FoodDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://feastly-share-server.vercel.app/food/${params.id}`)
            },
            {
                path: 'add-foods',
                element: <PrivateRoute>
                    <AddFoods />
                </PrivateRoute>
            },
            {
                path: 'manage-foods',
                element: <PrivateRoute>
                    <ManageFoods />
                </PrivateRoute>
            },
            {
                path: 'request-foods',
                element: <PrivateRoute>
                    <FoodRequest />
                </PrivateRoute>
            }
        ]
    },
])

export default router