import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ auth = false, children }) => {
    return auth ?  <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;