import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './header/Header';

const Layout = () => {
    return (
        <div className="body-wrapper">
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout