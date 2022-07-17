import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ itemPerPage, totalItems, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <ul className="pagination-box pt-xs-20 pb-xs-15">
            {
                pageNumbers.map((number) => (
                    <li key={number} className={number === currentPage ? "active" : undefined}><Link to='/products' onClick={() => paginate(number)}>{number}</Link></li>
                ))
            }
        </ul>
    )
}

export default Pagination