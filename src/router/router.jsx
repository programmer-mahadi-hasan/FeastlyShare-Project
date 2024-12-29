import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";

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
            }
        ]
    },
])

export default router