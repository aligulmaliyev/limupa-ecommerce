import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const isAuth = useSelector(state => state.auth.isAuth);
    return isAuth ? (children || <Outlet />) : <Navigate to="/login" state={{ path: location.pathname }} replace />
}

export default ProtectedRoute;