import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const WishList = () => {
    const location = useLocation()
    return (
        <div className="wishlist-area pt-60 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#">
                            <div className="table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="li-product-remove">remove</th>
                                            <th className="li-product-thumbnail">images</th>
                                            <th className="cart-product-name">Product</th>
                                            <th className="li-product-price">Unit Price</th>
                                            <th class="li-product-stock-status">Stock Status</th>
                                            <th className="li-product-add-cart">add to cart</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="li-product-remove"><Link to={location.pathname}><i className="fa fa-times"></i></Link></td>
                                            <td className="li-product-thumbnail"><Link to={location.pathname}><img src={process.env.PUBLIC_URL + `/assets/images/wishlist-thumb/1.jpg`} alt="" /></Link></td>
                                            <td className="li-product-name"><Link to={location.pathname}>Giro Civilia</Link></td>
                                            <td className="li-product-price"><span className="amount">$23.39</span></td>
                                            <td class="li-product-stock-status"><span class="in-stock">in stock</span></td>
                                            <td className="li-product-add-cart"><Link to={location.pathname}>add to cart</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="li-product-remove"><Link to={location.pathname}><i className="fa fa-times"></i></Link></td>
                                            <td className="li-product-thumbnail"><Link to={location.pathname}><img src={process.env.PUBLIC_URL + `/assets/images/wishlist-thumb/2.jpg`} alt="" /></Link></td>
                                            <td className="li-product-name"><Link to={location.pathname}>Pro Bike Shoes</Link></td>
                                            <td className="li-product-price"><span className="amount">$30.50</span></td>
                                            <td class="li-product-stock-status"><span class="in-stock">in stock</span></td>
                                            <td className="li-product-add-cart"><Link to={location.pathname}>add to cart</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="li-product-remove"><Link to={location.pathname}><i className="fa fa-times"></i></Link></td>
                                            <td className="li-product-thumbnail"><Link to={location.pathname}><img src={process.env.PUBLIC_URL + `/assets/images/wishlist-thumb/3.jpg`} alt="" /></Link></td>
                                            <td className="li-product-name"><Link to={location.pathname}>Nero Urban Shoes</Link></td>
                                            <td className="li-product-price"><span className="amount">$40.19</span></td>
                                            <td class="li-product-stock-status"><span class="out-stock">out stock</span></td>
                                            <td className="li-product-add-cart"><Link to={location.pathname}>add to cart</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList