import React, { useState } from 'react'
import HeaderMiddle from './HeaderMiddle'
import HeaderTop from './HeaderTop'
import Navbar from './Navbar'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleNavbar = () => {
        setIsVisible(prev => !prev)
    }
    return (
        <header>
            <HeaderTop />
            <HeaderMiddle />
            <Navbar show={isVisible} />
            <div onClick={handleNavbar} className={`mobile-menu-bar ${isVisible ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header