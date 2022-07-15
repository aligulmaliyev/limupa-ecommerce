import React from 'react';
import {Link} from 'react-router-dom';

const Pagination = ({ itemPerPage, totalItems,paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <ul className="pagination-box pt-xs-20 pb-xs-15">
            <li><a href="#" className="Previous"><i className="fa fa-chevron-left"></i> Previous</a>
            </li>
            {
                pageNumbers.map(number=>(
                    <li key={number} className="active"><Link to='/products' onClick={()=>paginate(number)}>{number}</Link></li>
                ))
            }
            <li>
                <a href="#" className="Next"> Next <i className="fa fa-chevron-right"></i></a>
            </li>
        </ul>
    )
}

export default Pagination