import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../../components/card/Card'

const ProductsContainer = ({ title, categories = [], data = [], filterKey }) => {
    const parseData = data.filter(item => item.categoryId === filterKey)
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
                                            <li key={category.id}><NavLink  to={`/products/category/${category.id}`} >{category.name}</NavLink></li>
                                        ))
                                    }
                                </ul>}
                        </div>
                        <div className='row'>
                            {
                                parseData.slice(0, 4).map(product => (
                                    <div key={product.id} className='col-lg-3 col-sm-6 col-12 '>
                                        <Card data={product} type='normal' />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsContainer