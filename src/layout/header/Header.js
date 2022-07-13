import React from 'react'
import HeaderMiddle from './HeaderMiddle'
import HeaderTop from './HeaderTop'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header>
            <HeaderTop/>
            <HeaderMiddle />
            <Navbar />
            <div className="mobile-menu-area d-lg-none d-xl-none col-12">
                <div className="container">
                    <div className="row">
                        <div className="mobile-menu">
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header