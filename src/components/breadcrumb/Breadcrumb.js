import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumb = ({page}) => {
    return (
        <div className="breadcrumb-area">
            <div className="container">
                <div className="breadcrumb-content">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li className="active">{page}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb