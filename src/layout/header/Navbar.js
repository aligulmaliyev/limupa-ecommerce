import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const isActiveMenu = useSelector(state => state.config.isActiveMenu);
    return (
        <div className={`header-bottom ${isActiveMenu ? 'active' : ''} header-sticky`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`hb-menu ${isActiveMenu ? 'mobile' : ''}`}>
                            <nav>
                                <ul>
                                    <li><NavLink end to="/" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Home</NavLink></li>
                                    <li><NavLink end to="/products" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Shop</NavLink></li>
                                    <li><NavLink end to="/products/categories/1" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Smartwatch</NavLink></li>
                                    <li><NavLink end to="/products/categories/5" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Accessories</NavLink></li>
                                    <li><NavLink end to="/about" className={({ isActive }) => isActive ? 'active-nav' : undefined}>About</NavLink></li>
                                    <li><NavLink end to="/contact" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Contact</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar