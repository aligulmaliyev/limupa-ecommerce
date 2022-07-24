import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { configActions } from '../../store/slices/config-slice';
function Navbar() {
    const isActiveMenu = useSelector(state => state.config.isActiveMenu);
    const dispatch = useDispatch();

    return (
        <div className={`header-bottom ${isActiveMenu ? 'active' : ''} header-sticky`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hb-menu">
                            <nav>
                                <ul>
                                    <li><NavLink onClick={() => dispatch(configActions.menuToggle())} end to="/" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Home</NavLink></li>
                                    <li><NavLink onClick={() => dispatch(configActions.menuToggle())} end to="/products" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Shop</NavLink></li>
                                    <li><NavLink onClick={() => dispatch(configActions.menuToggle())} end to="/products/categories/1" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Smartwatch</NavLink></li>
                                    <li><NavLink onClick={() => dispatch(configActions.menuToggle())} end to="/products/categories/5" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Accessories</NavLink></li>
                                    <li><NavLink onClick={() => dispatch(configActions.menuToggle())} end to="/about" className={({ isActive }) => isActive ? 'active-nav' : undefined}>About</NavLink></li>
                                    <li><NavLink onClick={() => dispatch(configActions.menuToggle())} end to="/contact" className={({ isActive }) => isActive ? 'active-nav' : undefined}>Contact</NavLink></li>
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