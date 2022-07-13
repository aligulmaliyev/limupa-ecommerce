import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumb = ({page}) => {
    return (
        <div class="breadcrumb-area">
            <div class="container">
                <div class="breadcrumb-content">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li class="active">{page}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb