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
                                    <li><NavLink to="/" className={({ isActive }) => isActive && 'active-nav'}>Home</NavLink></li>
                                    <li><NavLink to="/products" className={({ isActive }) => isActive && 'active-nav'}>Shop</NavLink></li>
                                    <li><NavLink to="/blog" className={({ isActive }) => isActive && 'active-nav'}>Blog</NavLink></li>
                                    <li><NavLink to="/about" className={({ isActive }) => isActive && 'active-nav'}>About</NavLink></li>
                                    <li><NavLink to="/contact" className={({ isActive }) => isActive && 'active-nav'}>Contact</NavLink></li>
                                    <li><NavLink to="/product/smartwatch" className={({ isActive }) => isActive && 'active-nav'}>Smartwatch</NavLink></li>
                                    <li><NavLink to="/product/accessories" className={({ isActive }) => isActive && 'active-nav'}>Accessories</NavLink></li>
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