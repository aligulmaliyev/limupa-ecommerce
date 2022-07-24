import React from 'react'
import HeaderMiddle from './HeaderMiddle'
import HeaderTop from './HeaderTop'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header>
            <HeaderTop />
            <HeaderMiddle />
            <Navbar/>
        </header>
    )
}

export default Header