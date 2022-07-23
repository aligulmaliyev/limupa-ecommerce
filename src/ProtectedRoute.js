import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
const ProtectedRoute = ({ children }) => {
    const isAuth = useSelector(state => state.auth.isAuth);
    return isAuth ? (children || <Outlet />) : <Navigate to="/login" replace />
}

export default ProtectedRoute;