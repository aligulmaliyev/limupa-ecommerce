import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/slices/auth-slice';

const HeaderTop = () => {
    const [showSetting, setIsSetting] = useState(false);
    const [showLanguage, setIsLanguage] = useState(false);
    const [showCurrency, setIsCurrency] = useState(false);
    const dispatch = useDispatch();
    
    return (
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="header-top-left">
                            <ul className="phone-wrap">
                                <li><span>Telephone Enquiry:</span><Link to="/">(+123) 123 321 345</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8">
                        <div className="header-top-right">
                            <ul className="ht-menu">
                                <li>
                                    <div className='ht-setting-trigger is-active'><span onClick={() => setIsSetting(prevState => !prevState)}>Setting</span></div>
                                    {showSetting && <div className='setting ht-setting'>
                                        <ul className="ht-setting-list">
                                            <li><NavLink to="/profile">My Account</NavLink></li>
                                            <li><NavLink to="/checkout">Checkout</NavLink></li>
                                            <li><NavLink onClick={() => dispatch(authActions.logout())} to="/login">Logout</NavLink></li>
                                        </ul>
                                    </div>}
                                </li>
                                <li>
                                    <span className="currency-selector-wrapper">Currency :</span>
                                    <div className='ht-currency-trigger is-active'><span onClick={() => setIsCurrency(prevState => !prevState)}>USD $</span></div>
                                    {
                                        showCurrency && <div className="currency ht-currency">
                                            <ul className="ht-setting-list">
                                                <li><NavLink to="/" className={({ isActive }) => isActive && 'active'} >EUR €</NavLink></li>
                                                <li><NavLink to="/" className={({ isActive }) => isActive && 'active'} >USD $</NavLink></li>
                                            </ul>
                                        </div>
                                    }
                                </li>
                                <li>
                                    <span className="language-selector-wrapper">Language :</span>
                                    <div className='ht-language-trigger is-active'><span onClick={() => setIsLanguage(prevState => !prevState)}>English</span></div>
                                    {
                                        showLanguage && <div className="language ht-language">
                                            <ul className="ht-setting-list">
                                                <li><NavLink to="/" className={({ isActive }) => isActive && 'active'} ><img src={process.env.PUBLIC_URL + `/assets/images/menu/flag-icon/1.jpg`} alt="" />English</NavLink></li>
                                                <li><NavLink to="/" className={({ isActive }) => isActive && 'active'} ><img src={process.env.PUBLIC_URL + `/assets/images/menu/flag-icon/2.jpg`} alt="" />Français</NavLink></li>
                                            </ul>
                                        </div>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop