import React from 'react'
import { Link } from 'react-router-dom'

const TabLinks = ({ onChange, active }) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="li-product-tab">
                    <ul className="nav li-product-menu">
                        <li><Link onClick={() => onChange(1)} to='/' className={active === 1 ? 'active' : undefined}><span>New Arrival</span></Link></li>
                        <li><Link onClick={() => onChange(2)} to='/' className={active === 2 ? 'active' : undefined}><span>Bestseller</span></Link></li>
                        <li><Link onClick={() => onChange(3)} to='/' className={active === 3 ? 'active' : undefined}><span>Featured Products</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TabLinks