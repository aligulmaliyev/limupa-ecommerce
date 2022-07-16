import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="header-bottom header-sticky d-none d-lg-block d-xl-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hb-menu">
                            <nav>
                                <ul>
                                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Home</NavLink></li>
                                    <li><NavLink to="/products" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Shop</NavLink></li>
                                    <li><NavLink to="/products/categories/1" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Smartwatch</NavLink></li>
                                    <li><NavLink to="/products/categories/5" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Accessories</NavLink></li>
                                    <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active-nav' : undefined}>About</NavLink></li>
                                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Contact</NavLink></li>
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