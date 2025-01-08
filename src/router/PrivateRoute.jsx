import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <Loading />
    }
    if (user && user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to={"/login"} />
};

export default PrivateRoute;