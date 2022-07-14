import React from 'react'
import { Link } from 'react-router-dom'

const TabNav = ({ onChange, active, data = [] }) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="li-product-tab">
                    <ul className="nav li-product-menu">
                        {
                            data?.map(nav => (
                                <li key={nav.id}><Link onClick={() => onChange(nav.id)} to='/' className={active === nav.id ? 'active' : undefined}><span>{nav.name}</span></Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}


const TabContent = ({ children }) => {
    return (

        <div className='row'>
            {
                children
            }
        </div>
    )
}

export const Tab = { TabContent, TabNav }

