import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../../components/card/Card'

const ProductsContainer = ({ title, categories, data }) => {
    return (
        <section className="product-area li-laptop-product pt-60 pb-45">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="li-section-title">
                            <h2>
                                <span>{title}</span>
                            </h2>
                            {categories &&
                                <ul className="li-sub-category-list">
                                    {
                                        categories.map(category => (
                                            <li><NavLink to={`/products/category/${category.id}`} >{category.name}</NavLink></li>
                                        ))
                                    }
                                </ul>}
                        </div>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <Card img='1.jpg' />
                            </div>
                            <div className='col-lg-3'>
                                <Card img='2.jpg' />
                            </div>
                            <div className='col-lg-3'>
                                <Card img='3.jpg' />
                            </div>
                            <div className='col-lg-3'>
                                <Card img='4.jpg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsContainer